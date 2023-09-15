<script lang="ts" setup>
import { Badge } from 'flowbite-vue';

const { $trpc } = useNuxtApp();

const greeting = await $trpc.greeting.home.useQuery();
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <template v-if="greeting.data.value">
      <h1 class="text-2xl font-bold text-primary-600 sm:text-4xl lg:text-8xl">
        {{ greeting.data.value.heading }}
      </h1>
      <Badge type="green">{{ greeting.data.value.message }}</Badge>
    </template>
  </div>
</template>
