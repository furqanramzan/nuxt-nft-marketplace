import {
  BrowserProvider,
  type Eip1193Provider,
  type JsonRpcSigner,
} from 'ethers';

interface Ethereum extends Eip1193Provider {
  isMetaMask: boolean;
  isCoinbaseWallet: boolean;
}
declare global {
  interface Window {
    ethereum: Ethereum;
  }
}

export function useWeb3() {
  const signer = ref<JsonRpcSigner>();

  function getProvider() {
    return new BrowserProvider(window.ethereum);
  }

  function isConnectable() {
    return Boolean(window.ethereum);
  }

  async function connect() {
    const provider = getProvider();
    signer.value = await provider.getSigner();
    return signer.value;
  }

  async function isConnected() {
    const provider = getProvider();
    const addresses = await provider.listAccounts();
    const connected = addresses.length > 0;
    if (connected) {
      await connect();
    }
    return connected;
  }

  function isMetaMask() {
    return window.ethereum.isMetaMask;
  }

  function isCoinbase() {
    return window.ethereum.isCoinbaseWallet;
  }

  return {
    signer,
    isConnectable,
    connect,
    isConnected,
    isMetaMask,
    isCoinbase,
  };
}
