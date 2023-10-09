<template>
  <NuxtLayout>
    <div
      class="min-h-screen bg-light-primary text-black dark:bg-dark-primary dark:text-white"
    >
      <AppSidebar />
      <div class="flex flex-col px-2 sm:px-16 md:ml-16">
        <AppHeader />
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>
