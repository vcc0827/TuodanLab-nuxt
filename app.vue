<script lang="ts" setup>
useHead({
  title: '脱单实验室'
})
</script>

<template>
  <Body class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<style lang="scss">
html {
  font-family: inherit
}
</style>