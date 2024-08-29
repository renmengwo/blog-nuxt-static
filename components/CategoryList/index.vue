<script setup lang="ts">
import cateCard from './cateCard.vue'

/* const { data, pending, error, refresh } = await useAsyncData(
  'category',
  async () => await $fetch('/api/category/getCategory')
)*/
const { data: result } = await useFetch('/api/category/getCategory')
</script>

<template>
  <div class="cate-box">
    <div class="p-4 cate-box-list">
      <cateCard
        v-for="item in result.data"
        :key="item.id"
        class="m-r-30 c-p"
        :item="item"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cate-box {
  overflow: hidden;
  &-list {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
