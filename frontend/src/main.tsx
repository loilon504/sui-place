import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Chain, EthosConnectProvider } from 'ethos-connect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EthosConnectProvider
      ethosConfiguration={{chain: Chain.SUI_DEVNET, network: "https://fullnode.devnet.sui.io:443"}}
    >
      <App />
    </EthosConnectProvider>
  </StrictMode>,
)
