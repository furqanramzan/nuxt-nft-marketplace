<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

const { $trpc } = useNuxtApp();

const data = ref({ name: '', slug: '', media: '', description: '' });

async function onSubmit() {
  await $trpc.asset.create.mutate(data.value);
  navigateTo('/');
}
</script>

<template>
  <form class="flex flex-col gap-5" @submit.prevent="onSubmit">
    <AppInput v-model="data.name" :input="{ name: 'name' }" />
    <AppInput v-model="data.slug" :input="{ name: 'slug' }" />
    <AppInput v-model="data.media" :input="{ name: 'media' }" />
    <AppInput
      v-model="data.description"
      :input="{ name: 'description', type: 'textarea' }"
    />
    <div className="mt-4 flex gap-x-3 sm:mt-6">
      <PrimaryButton type="submit">Save</PrimaryButton>
    </div>
  </form>
</template>
