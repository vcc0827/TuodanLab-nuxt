<script lang="ts" setup>
const { awesome } = useAppConfig()
const icon = ref('https://static.hamu.site/mini/logo.png')

const handleContact = () => {
  alert('跳转联系')
}

const handleDownload = () => {
  alert('跳转下载')
}
</script>

<template>
  <header>
    <!-- content -->
    <div class="w-full flex items-center justify-around mt-5 mx-auto text-base text-[#000]">
      <!-- title -->
      <slot name="title">
        <NuxtLink to="/" class="font-bold md:text-lg text-primary-500 flex items-center">
          <img :src="icon" class="w-10 h-10 md:h-14 md:w-14 mr-1 md:mr-3 object-contain inline-block" />
          <span class="capitalize  md:text-2xl opacity-70">{{ awesome?.title }}</span>
        </NuxtLink>
      </slot>
      <!-- contact -->
      <div class="md:hidden">
        <button class="bg-[#ff4b67] rounded-3xl text-white w-24 h-10" @click="handleDownload">下载APP</button>
      </div>
      <div class="hidden md:flex items-center" @click="handleContact">
        <!-- <img src="public/favicon.ico" class="w-6 h-6 inline-block" /> -->
         <img src="https://static.hamu.site/mini/tuodan_h5_contact.png" class="w-6 h-6 inline-block" />
        <span class="opacity-70">联系我们</span>
      </div>
    </div>
  </header>
</template>

<style scoped></style>