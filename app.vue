<script lang="ts" setup>
import { Badge, Spinner } from 'flowbite-vue';

const greeting = await useAsyncQuery(['greeting'], {
  lazy: true,
  server: false,
});
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <Spinner v-if="greeting.pending.value" />
    <template v-else>
      <h1 class="text-2xl font-bold text-primary-600 sm:text-4xl lg:text-8xl">
        {{ greeting.data.value.heading }}
      </h1>
      <Badge type="green">{{ greeting.data.value.message }}</Badge>
    </template>
  </div>
</template>
