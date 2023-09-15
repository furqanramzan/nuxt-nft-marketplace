export interface Wallet {
  name: 'metamask' | 'coinbase';
  title: string;
  image: string;
  href: string;
}
export type WalletStatus = Partial<Record<Wallet['name'], boolean>>;

export const wallets: Wallet[] = [
  {
    name: 'metamask',
    title: 'MetaMask',
    image: '/wallets/metamask.svg',
    href: 'https://metamask.io/download/',
  },
  {
    name: 'coinbase',
    title: 'Coinbase',
    image: '/wallets/coinbase.svg',
    href: 'https://www.coinbase.com/wallet/articles/getting-started-extension',
  },
];
