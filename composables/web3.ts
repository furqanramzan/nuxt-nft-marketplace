import { BrowserProvider, type JsonRpcSigner } from 'ethers';

declare let window: any;

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

  return { signer, isConnectable, connect, isConnected };
}
