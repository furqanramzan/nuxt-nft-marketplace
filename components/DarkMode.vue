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
    className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-500 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    @click="toggleTheme"
  >
    <Icon v-if="isDark" name="material-symbols:light-mode" />
    <Icon v-else name="material-symbols:dark-mode" />
  </button>
</template>
