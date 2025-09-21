import { useContract, useWriteContract, useReadContract } from 'wagmi';
import { parseAbi } from 'viem';

const CONTRACT_ADDRESS = '0x...'; // Replace with deployed contract address
const CONTRACT_ABI = parseAbi([
  'function createInvoice(string memory _description, address _buyer, uint256 _expiresAt, externalEuint32 amount, externalEuint32 discountRate, bytes calldata inputProof) public returns (uint256)',
  'function createFactoringAgreement(uint256 _invoiceId, externalEuint32 factorAmount, externalEuint32 factorRate, bytes calldata inputProof) public returns (uint256)',
  'function processPayment(uint256 _agreementId, externalEuint32 amount, externalEuint32 fee, bytes calldata inputProof) public payable returns (uint256)',
  'function getInvoiceInfo(uint256 invoiceId) public view returns (string memory description, uint8 amount, uint8 discountRate, bool isActive, bool isVerified, address seller, address buyer, uint256 createdAt, uint256 expiresAt)',
  'function getAgreementInfo(uint256 agreementId) public view returns (uint8 invoiceId, uint8 factorAmount, uint8 factorRate, bool isActive, bool isSettled, address factor, address seller, uint256 createdAt, uint256 settlementDate)',
  'function getPaymentInfo(uint256 paymentId) public view returns (uint8 amount, uint8 fee, address payer, address recipient, uint256 timestamp)',
  'function getReputationScore(address user) public view returns (uint8)',
  'function getCreditLimit(address user) public view returns (uint8)',
  'event InvoiceCreated(uint256 indexed invoiceId, address indexed seller, address indexed buyer)',
  'event FactoringAgreementCreated(uint256 indexed agreementId, uint256 indexed invoiceId, address indexed factor)',
  'event PaymentProcessed(uint256 indexed paymentId, address indexed payer, address indexed recipient)',
  'event ReputationUpdated(address indexed user, uint32 reputation)',
  'event CreditLimitUpdated(address indexed user, uint32 limit)'
]);

export const useCloakedCreditContract = () => {
  const contract = useContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
  });

  return contract;
};

export const useCreateInvoice = () => {
  const { writeContract, isPending, error } = useWriteContract();

  const createInvoice = async (
    description: string,
    buyer: string,
    expiresAt: number,
    amount: any, // FHE encrypted value
    discountRate: any, // FHE encrypted value
    inputProof: string
  ) => {
    return writeContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: 'createInvoice',
      args: [description, buyer, expiresAt, amount, discountRate, inputProof],
    });
  };

  return { createInvoice, isPending, error };
};

export const useCreateFactoringAgreement = () => {
  const { writeContract, isPending, error } = useWriteContract();

  const createFactoringAgreement = async (
    invoiceId: number,
    factorAmount: any, // FHE encrypted value
    factorRate: any, // FHE encrypted value
    inputProof: string
  ) => {
    return writeContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: 'createFactoringAgreement',
      args: [invoiceId, factorAmount, factorRate, inputProof],
    });
  };

  return { createFactoringAgreement, isPending, error };
};

export const useProcessPayment = () => {
  const { writeContract, isPending, error } = useWriteContract();

  const processPayment = async (
    agreementId: number,
    amount: any, // FHE encrypted value
    fee: any, // FHE encrypted value
    inputProof: string,
    value?: bigint
  ) => {
    return writeContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: 'processPayment',
      args: [agreementId, amount, fee, inputProof],
      value: value,
    });
  };

  return { processPayment, isPending, error };
};

export const useGetInvoiceInfo = (invoiceId: number) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getInvoiceInfo',
    args: [invoiceId],
  });

  return { data, isLoading, error };
};

export const useGetAgreementInfo = (agreementId: number) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getAgreementInfo',
    args: [agreementId],
  });

  return { data, isLoading, error };
};

export const useGetPaymentInfo = (paymentId: number) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getPaymentInfo',
    args: [paymentId],
  });

  return { data, isLoading, error };
};

export const useGetReputationScore = (user: string) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getReputationScore',
    args: [user as `0x${string}`],
  });

  return { data, isLoading, error };
};

export const useGetCreditLimit = (user: string) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getCreditLimit',
    args: [user as `0x${string}`],
  });

  return { data, isLoading, error };
};
