<script setup lang="ts">

</script>

<template>
<div class="article-item c-p">
  <div class="article-item-top m-b-16"></div>
  <p class="article-item-title">标题</p>
  <p class="article-item-details m-t-10">这是内容详情片段这是内容详情片段</p>
</div>
</template>

<style scoped lang="scss">
.article-item{
  border-radius: 8px;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.1);
  width: 204px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  &-top{
    width: 100%;
    height: 110px;
    background:#eee;
    border-radius: 8px;
    overflow: hidden;
  }
  &-title{
    font-size: 18px;
    color: #2B2C34;
    line-height: 20px;
    &:hover{
      color:$base-color;
    }
  }
  &-details{
    font-size: 14px;
    color: #2B2C34;
    line-height: 20px;
  }
}
</style>
