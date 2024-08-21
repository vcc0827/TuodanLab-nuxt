<script lang="ts" setup>
const { awesome } = useAppConfig();
</script>
<template>
    <footer class="flex mb-3 md:mb-6 bottom-0 w-full">
        <div class="w-full flex justify-center items-center">
            <div class="flex justify-center flex-wrap text-xs md:text-sm text-[#000] opacity-60">
                <div>{{ awesome?.layout?.footer?.year || new Date().getFullYear() }}@{{
                    awesome?.project?.name
                }}</div>
                <div class="mx-2 md:mx-3">{{ awesome?.project?.company }}</div>
                <div>{{ awesome?.project?.ICP }}</div>
            </div>
        </div>
    </footer>
</template>
