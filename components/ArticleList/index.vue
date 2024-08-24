<script setup lang="ts">
import artCard from './artCard.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const { data: result } = await useFetch('/api/article/list', {
  method: 'get',
  params: {
    page: 1,
    pageSize: 10
  }
})
const handleClick = (val: any) => {
  const { id } = val
  void router.push({
    path: `/article/details/${id}`
  })
}
</script>

<template>
  <div class="article-box">
    <artCard
      v-for="item in result.data.list"
      :key="item.id"
      :item="item"
      class="m-b-20 m-r-24"
      @on-click="handleClick"
    />
  </div>
</template>

<style scoped lang="scss">
.article-box {
  display: flex;
  flex-wrap: wrap;
}
</style>
