// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract CloakedCreditFlow is SepoliaConfig {
    using FHE for *;
    
    struct Invoice {
        euint32 invoiceId;
        euint32 amount;
        euint32 discountRate;
        euint32 creditScore;
        bool isActive;
        bool isVerified;
        string description;
        address seller;
        address buyer;
        uint256 createdAt;
        uint256 expiresAt;
    }
    
    struct FactoringAgreement {
        euint32 agreementId;
        euint32 invoiceId;
        euint32 factorAmount;
        euint32 factorRate;
        euint32 sellerReputation;
        bool isActive;
        bool isSettled;
        address factor;
        address seller;
        uint256 createdAt;
        uint256 settlementDate;
    }
    
    struct Payment {
        euint32 paymentId;
        euint32 amount;
        euint32 fee;
        address payer;
        address recipient;
        uint256 timestamp;
    }
    
    mapping(uint256 => Invoice) public invoices;
    mapping(uint256 => FactoringAgreement) public agreements;
    mapping(uint256 => Payment) public payments;
    mapping(address => euint32) public reputationScores;
    mapping(address => euint32) public creditLimits;
    
    uint256 public invoiceCounter;
    uint256 public agreementCounter;
    uint256 public paymentCounter;
    
    address public owner;
    address public verifier;
    
    event InvoiceCreated(uint256 indexed invoiceId, address indexed seller, address indexed buyer);
    event FactoringAgreementCreated(uint256 indexed agreementId, uint256 indexed invoiceId, address indexed factor);
    event PaymentProcessed(uint256 indexed paymentId, address indexed payer, address indexed recipient);
    event ReputationUpdated(address indexed user, uint32 reputation);
    event CreditLimitUpdated(address indexed user, uint32 limit);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createInvoice(
        string memory _description,
        address _buyer,
        uint256 _expiresAt,
        externalEuint32 amount,
        externalEuint32 discountRate,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(_buyer != address(0), "Invalid buyer address");
        require(_expiresAt > block.timestamp, "Expiration must be in the future");
        
        uint256 invoiceId = invoiceCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        euint32 internalDiscountRate = FHE.fromExternal(discountRate, inputProof);
        
        invoices[invoiceId] = Invoice({
            invoiceId: FHE.asEuint32(0), // Will be set properly later
            amount: internalAmount,
            discountRate: internalDiscountRate,
            creditScore: FHE.asEuint32(0), // Will be calculated based on reputation
            isActive: true,
            isVerified: false,
            description: _description,
            seller: msg.sender,
            buyer: _buyer,
            createdAt: block.timestamp,
            expiresAt: _expiresAt
        });
        
        emit InvoiceCreated(invoiceId, msg.sender, _buyer);
        return invoiceId;
    }
    
    function createFactoringAgreement(
        uint256 _invoiceId,
        externalEuint32 factorAmount,
        externalEuint32 factorRate,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(invoices[_invoiceId].seller != address(0), "Invoice does not exist");
        require(invoices[_invoiceId].isActive, "Invoice is not active");
        require(block.timestamp <= invoices[_invoiceId].expiresAt, "Invoice has expired");
        
        uint256 agreementId = agreementCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalFactorAmount = FHE.fromExternal(factorAmount, inputProof);
        euint32 internalFactorRate = FHE.fromExternal(factorRate, inputProof);
        
        agreements[agreementId] = FactoringAgreement({
            agreementId: FHE.asEuint32(0), // Will be set properly later
            invoiceId: FHE.asEuint32(_invoiceId),
            factorAmount: internalFactorAmount,
            factorRate: internalFactorRate,
            sellerReputation: reputationScores[invoices[_invoiceId].seller],
            isActive: true,
            isSettled: false,
            factor: msg.sender,
            seller: invoices[_invoiceId].seller,
            createdAt: block.timestamp,
            settlementDate: 0
        });
        
        emit FactoringAgreementCreated(agreementId, _invoiceId, msg.sender);
        return agreementId;
    }
    
    function processPayment(
        uint256 _agreementId,
        externalEuint32 amount,
        externalEuint32 fee,
        bytes calldata inputProof
    ) public payable returns (uint256) {
        require(agreements[_agreementId].factor != address(0), "Agreement does not exist");
        require(agreements[_agreementId].isActive, "Agreement is not active");
        require(agreements[_agreementId].factor == msg.sender, "Only factor can process payment");
        
        uint256 paymentId = paymentCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        euint32 internalFee = FHE.fromExternal(fee, inputProof);
        
        payments[paymentId] = Payment({
            paymentId: FHE.asEuint32(0), // Will be set properly later
            amount: internalAmount,
            fee: internalFee,
            payer: msg.sender,
            recipient: agreements[_agreementId].seller,
            timestamp: block.timestamp
        });
        
        // Mark agreement as settled
        agreements[_agreementId].isSettled = true;
        agreements[_agreementId].settlementDate = block.timestamp;
        
        emit PaymentProcessed(paymentId, msg.sender, agreements[_agreementId].seller);
        return paymentId;
    }
    
    function updateReputation(address user, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        reputationScores[user] = reputation;
        emit ReputationUpdated(user, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function updateCreditLimit(address user, euint32 limit) public {
        require(msg.sender == verifier, "Only verifier can update credit limit");
        require(user != address(0), "Invalid user address");
        
        creditLimits[user] = limit;
        emit CreditLimitUpdated(user, 0); // FHE.decrypt(limit) - will be decrypted off-chain
    }
    
    function verifyInvoice(uint256 invoiceId, bool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify invoices");
        require(invoices[invoiceId].seller != address(0), "Invoice does not exist");
        
        invoices[invoiceId].isVerified = isVerified;
    }
    
    function getInvoiceInfo(uint256 invoiceId) public view returns (
        string memory description,
        uint8 amount,
        uint8 discountRate,
        bool isActive,
        bool isVerified,
        address seller,
        address buyer,
        uint256 createdAt,
        uint256 expiresAt
    ) {
        Invoice storage invoice = invoices[invoiceId];
        return (
            invoice.description,
            0, // FHE.decrypt(invoice.amount) - will be decrypted off-chain
            0, // FHE.decrypt(invoice.discountRate) - will be decrypted off-chain
            invoice.isActive,
            invoice.isVerified,
            invoice.seller,
            invoice.buyer,
            invoice.createdAt,
            invoice.expiresAt
        );
    }
    
    function getAgreementInfo(uint256 agreementId) public view returns (
        uint8 invoiceId,
        uint8 factorAmount,
        uint8 factorRate,
        bool isActive,
        bool isSettled,
        address factor,
        address seller,
        uint256 createdAt,
        uint256 settlementDate
    ) {
        FactoringAgreement storage agreement = agreements[agreementId];
        return (
            0, // FHE.decrypt(agreement.invoiceId) - will be decrypted off-chain
            0, // FHE.decrypt(agreement.factorAmount) - will be decrypted off-chain
            0, // FHE.decrypt(agreement.factorRate) - will be decrypted off-chain
            agreement.isActive,
            agreement.isSettled,
            agreement.factor,
            agreement.seller,
            agreement.createdAt,
            agreement.settlementDate
        );
    }
    
    function getPaymentInfo(uint256 paymentId) public view returns (
        uint8 amount,
        uint8 fee,
        address payer,
        address recipient,
        uint256 timestamp
    ) {
        Payment storage payment = payments[paymentId];
        return (
            0, // FHE.decrypt(payment.amount) - will be decrypted off-chain
            0, // FHE.decrypt(payment.fee) - will be decrypted off-chain
            payment.payer,
            payment.recipient,
            payment.timestamp
        );
    }
    
    function getReputationScore(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(reputationScores[user]) - will be decrypted off-chain
    }
    
    function getCreditLimit(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(creditLimits[user]) - will be decrypted off-chain
    }
    
    function withdrawFunds(uint256 agreementId) public {
        require(agreements[agreementId].seller == msg.sender, "Only seller can withdraw");
        require(agreements[agreementId].isSettled, "Agreement must be settled");
        require(block.timestamp > agreements[agreementId].settlementDate, "Settlement period not completed");
        
        // Mark agreement as inactive
        agreements[agreementId].isActive = false;
        
        // In a real implementation, funds would be transferred based on decrypted amount
        // payable(msg.sender).transfer(amount);
    }
}
