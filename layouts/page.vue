<template>
  <div class="layouts-page overflow-x-hidden h-screen custom-background">
    <LayoutPageNavbar class="h-10 max-h-16" />
    <LayoutPageContent>
      <slot />
    </LayoutPageContent>
    <LayoutPageFooter class="h-[52px] md:h-[42px]"> </LayoutPageFooter>
  </div>
</template>

<style scoped>
.custom-background {
  background: linear-gradient(180deg, #ffe6df, #ffffff);
}
</style>
