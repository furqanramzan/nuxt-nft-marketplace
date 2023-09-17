<template>
  <NuxtLayout>
    <div
      class="min-h-screen bg-light-primary text-black dark:bg-dark-primary dark:text-white"
    >
      <AppSidebar />
      <div class="flex flex-col md:ml-16">
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>
