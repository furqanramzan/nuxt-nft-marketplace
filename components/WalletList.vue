<script lang="ts" setup>
import { type WalletStatus, wallets } from './wallets';
import { WalletButton, WalletLink } from '#components';

const { isConnectable, isMetaMask, isCoinbase } = useWeb3();
const walletStatus = ref<WalletStatus>({});

onMounted(() => {
  const connectable = isConnectable();
  if (connectable) {
    walletStatus.value = {
      metamask: isMetaMask(),
      coinbase: isCoinbase(),
    };
  }
});
</script>

<template>
  <div class="grid grid-cols-2 gap-10">
    <component
      :is="walletStatus[wallet.name] ? WalletButton : WalletLink"
      v-for="(wallet, index) of wallets"
      :key="index"
      :wallet="wallet"
    >
      <WalletItem :wallet="wallet" />
    </component>
  </div>
</template>
