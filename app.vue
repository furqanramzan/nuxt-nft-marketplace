<template>
  <NuxtLayout>
    <div
      class="min-h-screen bg-light-primary text-black dark:bg-dark-primary dark:text-white"
    >
      <AppSidebar />
      <div class="ml-16 flex flex-col">
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>
