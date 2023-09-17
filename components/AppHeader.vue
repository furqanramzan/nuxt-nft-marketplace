<template>
  <header
    class="flex grow-0 flex-col items-center justify-between gap-5 py-10 md:flex-row"
  >
    <div class="max-md:order-2">
      <div class="relative">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5"
        >
          <Icon name="material-symbols:search" />
        </div>
        <input
          id="search"
          type="text"
          class="block w-full rounded-lg border-0 bg-light-secondary p-2.5 pl-12 text-sm text-gray-900 focus:ring-blue-500 dark:bg-dark-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
          placeholder="Search here"
        />
      </div>
    </div>
    <div class="flex gap-4 max-md:order-1">
      <DarkMode />
      <ConnectWallet />
    </div>
  </header>
</template>
