<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = ref(true);

function toggleTheme() {
  const dark = window.document.documentElement.classList.contains('dark');
  colorMode.preference = dark ? 'light' : 'dark';
  isDark.value = !dark;
}

onMounted(() => {
  isDark.value = window.document.documentElement.classList.contains('dark');
});
</script>

<template>
  <button
    aria-label="Dark mode"
    type="button"
    className="flex items-center justify-center text-sm text-gray-500 hover:text-black focus:outline-none focus:ring-gray-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700"
    @click="toggleTheme"
  >
    <Icon v-if="isDark" name="material-symbols:light-mode" />
    <Icon v-else name="material-symbols:dark-mode" />
  </button>
</template>
