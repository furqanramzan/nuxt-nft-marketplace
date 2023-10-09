<script lang="ts" setup>
const props = defineProps<{
  class?: string;
  type?: 'submit' | 'reset' | 'button';
}>();

const type = computed(() => props.type || 'button');
</script>

<template>
  <button
    :type="type"
    :class="props.class"
    class="inline-flex items-center rounded-lg bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  >
    <slot />
  </button>
</template>
