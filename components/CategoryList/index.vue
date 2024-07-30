<script setup lang="ts">
import cateCard from './cateCard.vue'
</script>

<template>
  <div class="cate-box">
    <div class="p-4 cate-box-list">
      <cateCard class="m-r-30 c-p"></cateCard>
      <cateCard class="m-r-30 c-p"></cateCard>
      <cateCard class="m-r-30 c-p"></cateCard>
      <cateCard class="m-r-30 c-p"></cateCard>
      <cateCard class="m-r-30 c-p"></cateCard>
      <cateCard class="m-r-30 c-p"></cateCard>
      <cateCard class="m-r-30 c-p"></cateCard>
      <cateCard class="c-p"></cateCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cate-box{
  height: 350px;
  overflow: hidden;
  &-list{
    display: flex;
    justify-content: flex-start;
  }
}
</style>
