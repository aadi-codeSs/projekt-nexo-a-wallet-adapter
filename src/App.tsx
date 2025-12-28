import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './components/Airdrop';
import { Logo } from './components/ui/Logo';
// import { SendTokens } from './SendTokens';
// import { SignMessage } from './SignMessage';

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
      <ConnectionProvider endpoint={"http://127.0.0.1:8899"}>
          <WalletProvider wallets={[]} >
              <WalletModalProvider>
                <Logo logoName='NEXO' size='sm'/>
                <div className='flex '>
                  <WalletMultiButton className={` !bg-slate-500 `} />
                  <WalletDisconnectButton className={` !bg-slate-500 `}/>
                </div>
                <Airdrop/>
                {/* <RequestAirdrop />
                <ShowSolBalance /> */}
                {/* <Tokens /> */}
                {/* <SignMessage /> */}
                {/* <SendTokens /> */}
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App