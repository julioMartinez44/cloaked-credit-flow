# Cloaked Credit Flow

A revolutionary encrypted supply chain finance platform built with FHE (Fully Homomorphic Encryption) technology. This platform enables secure invoice factoring where terms remain encrypted until both buyer and seller reach agreement.

## Features

- **FHE-Encrypted Data**: Core financial data is encrypted using Fully Homomorphic Encryption
- **Secure Wallet Integration**: Multiple wallet providers supported (Rainbow, MetaMask, WalletConnect)
- **Supply Chain Finance**: Invoice factoring with encrypted terms
- **Real-time Analytics**: Encrypted financial analytics and reporting
- **Multi-chain Support**: Ethereum Sepolia testnet integration

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Blockchain**: Ethereum Sepolia
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Wallets**: Rainbow Kit, WalletConnect, MetaMask

## Configuration

### Environment Variables

```bash
# Blockchain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475

# Infura Configuration (Optional)
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/julioMartinez44/cloaked-credit-flow.git
cd cloaked-credit-flow
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Start the development server:
```bash
npm run dev
```

## Smart Contract

The platform includes a comprehensive FHE-enabled smart contract that handles:

- Encrypted invoice creation and management
- Secure payment processing
- Reputation system with encrypted scores
- Multi-party agreement protocols

## Security Features

- **FHE Encryption**: All sensitive financial data is encrypted using Fully Homomorphic Encryption
- **Zero-Knowledge Proofs**: Transaction validation without revealing sensitive information
- **Multi-signature Support**: Enhanced security for high-value transactions
- **Audit Trail**: Immutable transaction history

## Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure environment variables on your hosting platform

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue on GitHub or contact the development team.

## Roadmap

- [ ] Multi-chain support (Polygon, Arbitrum)
- [ ] Advanced FHE operations
- [ ] Mobile app development
- [ ] Enterprise integrations
- [ ] Advanced analytics dashboard