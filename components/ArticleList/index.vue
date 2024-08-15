<script setup lang="ts">
import artCard from './artCard.vue'
</script>

<template>
  <div class="article-box">
    <artCard
      v-for="item in 20"
      :key="item"
      class="m-b-20 m-r-24"
    />
  </div>
</template>

<style scoped lang="scss">
.article-box{
  display: flex;
  flex-wrap: wrap;
}
</style>
