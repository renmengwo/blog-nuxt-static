<script setup>
import { onMounted } from 'vue'
import { initCanvasEffect } from './utils/canvasUtils.ts'
onMounted(() => {
  initCanvasEffect()
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss" scoped></style>
