<script setup lang="ts">
import cateCard from './cateCard.vue'
import { ref } from 'vue'
const dataList = ref([])

/* const { data, pending, error, refresh } = await useAsyncData(
  'category',
  async () => await $fetch('/api/category/getCategory')
)*/
const { data } = await useFetch('/api/category/getCategory')
console.log(data.value, 'data')
</script>

<template>
  <div class="cate-box">
    <div class="p-4 cate-box-list">
      {{ dataList }}
      <cateCard class="m-r-30 c-p" />
      <cateCard class="m-r-30 c-p" />
      <cateCard class="m-r-30 c-p" />
      <cateCard class="m-r-30 c-p" />
      <cateCard class="m-r-30 c-p" />
      <cateCard class="m-r-30 c-p" />
      <cateCard class="m-r-30 c-p" />
      <cateCard class="c-p" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cate-box {
  height: 350px;
  overflow: hidden;
  &-list {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
