# Vercel Deployment Guide for Cloaked Credit Flow

This guide provides step-by-step instructions for deploying the Cloaked Credit Flow application to Vercel.

## Prerequisites

- GitHub account
- Vercel account
- Node.js 18+ installed locally
- Git installed

## Step 1: Prepare the Repository

1. Ensure all changes are committed and pushed to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: ready for deployment"
   git push origin main
   ```

## Step 2: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository:
   - Select "Import Git Repository"
   - Choose your GitHub account
   - Find and select `cloaked-credit-flow` repository
   - Click "Import"

## Step 3: Configure Project Settings

### Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `./` (leave empty)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables
Add the following environment variables in Vercel dashboard:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
VITE_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
```

### Advanced Settings
- **Node.js Version**: 18.x
- **Build Command Override**: `npm run build`
- **Install Command Override**: `npm install`

## Step 4: Deploy

1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Once deployed, you'll receive a Vercel URL (e.g., `https://cloaked-credit-flow.vercel.app`)

## Step 5: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" tab
3. Go to "Domains" section
4. Add your custom domain
5. Configure DNS records as instructed by Vercel

## Step 6: Environment Variables Configuration

### Required Environment Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_CHAIN_ID` | `11155111` | Ethereum Sepolia Chain ID |
| `NEXT_PUBLIC_RPC_URL` | `https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990` | RPC URL for Sepolia |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | `2ec9743d0d0cd7fb94dee1a7e6d33475` | WalletConnect Project ID |
| `NEXT_PUBLIC_INFURA_API_KEY` | `b18fb7e6ca7045ac83c41157ab93f990` | Infura API Key |
| `VITE_WALLET_CONNECT_PROJECT_ID` | `2ec9743d0d0cd7fb94dee1a7e6d33475` | Vite-specific WalletConnect ID |

### Adding Environment Variables in Vercel

1. Go to your project dashboard
2. Click "Settings" tab
3. Click "Environment Variables" in the left sidebar
4. Add each variable:
   - **Name**: Variable name (e.g., `NEXT_PUBLIC_CHAIN_ID`)
   - **Value**: Variable value (e.g., `11155111`)
   - **Environment**: Select "Production", "Preview", and "Development"
5. Click "Save" for each variable

## Step 7: Verify Deployment

1. Visit your deployed URL
2. Test wallet connection functionality
3. Verify all features are working correctly
4. Check browser console for any errors

## Step 8: Automatic Deployments

Vercel will automatically deploy your application when you push changes to the main branch. To trigger a manual deployment:

1. Go to your project dashboard
2. Click "Deployments" tab
3. Click "Redeploy" on the latest deployment

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all dependencies are in `package.json`
   - Verify Node.js version is 18+
   - Check build logs in Vercel dashboard

2. **Environment Variables Not Working**
   - Ensure variables are prefixed with `NEXT_PUBLIC_` or `VITE_`
   - Redeploy after adding new variables
   - Check variable names match exactly

3. **Wallet Connection Issues**
   - Verify WalletConnect Project ID is correct
   - Check RPC URL is accessible
   - Ensure chain ID matches Sepolia (11155111)

4. **Contract Interaction Issues**
   - Verify contract address is correct
   - Check that contract is deployed on Sepolia
   - Ensure user has Sepolia ETH for gas

### Build Optimization

1. **Enable Build Caching**
   - Vercel automatically caches `node_modules`
   - Use `.vercelignore` for unnecessary files

2. **Performance Optimization**
   - Enable Vercel Analytics
   - Use Vercel Edge Functions if needed
   - Optimize bundle size

## Monitoring and Analytics

1. **Vercel Analytics**
   - Enable in project settings
   - Monitor performance metrics
   - Track user interactions

2. **Error Monitoring**
   - Check Vercel function logs
   - Monitor build logs
   - Set up alerts for failures

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive keys to repository
   - Use Vercel's secure environment variable storage
   - Rotate keys regularly

2. **API Keys**
   - Use separate keys for development and production
   - Monitor API usage
   - Set up rate limiting if needed

## Support

For additional help:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)

## Deployment Checklist

- [ ] Repository is connected to Vercel
- [ ] Build settings are configured correctly
- [ ] All environment variables are set
- [ ] Custom domain is configured (if applicable)
- [ ] Deployment is successful
- [ ] Application is accessible via URL
- [ ] Wallet connection works
- [ ] All features are functional
- [ ] No console errors
- [ ] Performance is acceptable
