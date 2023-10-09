<script setup lang="ts">
const links = [
  {
    name: 'Home',
    href: '/',
    icon: 'material-symbols:home',
  },
  {
    name: 'Create',
    href: '/create',
    icon: 'material-symbols:add-circle',
  },
];

const sidebar = ref(false);
function toggleSidebar() {
  sidebar.value = !sidebar.value;
}
</script>

<template>
  <div
    class="fixed bottom-0 left-0 flex w-full bg-light-secondary text-gray-500 dark:bg-dark-secondary dark:text-gray-300 md:top-0 md:h-screen md:w-16 md:flex-col md:py-10"
  >
    <span
      v-for="(link, index) of links"
      :key="index"
      class="flex h-14 w-full items-center justify-center"
    >
      <NuxtLink
        :to="link.href"
        class="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="active-link-icon"
      >
        <Icon :name="link.icon" />
      </NuxtLink>
    </span>
    <span class="flex h-14 w-full items-center justify-center md:mt-auto">
      <button
        class="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="toggleSidebar"
      >
        <Icon v-if="sidebar" name="material-symbols:arrow-circle-left" />
        <Icon v-else name="material-symbols:arrow-circle-right" />
      </button>
    </span>
  </div>
  <aside
    :class="{ '!w-64 !border-l': sidebar }"
    class="fixed left-0 top-0 z-40 h-screen w-0 overflow-x-hidden border-gray-200 bg-light-secondary py-6 pt-10 transition-all dark:border-gray-700 dark:bg-dark-secondary md:left-16"
    aria-label="Sidebar"
  >
    <div class="h-full overflow-y-auto px-3">
      <ul class="space-y-2 font-medium">
        <li
          v-for="(link, index) of links"
          :key="index"
          class="!m-0 flex h-14 w-full items-center"
        >
          <NuxtLink
            :to="link.href"
            class="w-full rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            active-class="active-link-text"
          >
            <span class="ml-3 flex-1 whitespace-nowrap">{{ link.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="postcss">
.active-link-text {
  @apply bg-primary-500 text-white hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800;
}
.active-link-icon {
  @apply text-primary-500;
}
</style>
