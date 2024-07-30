<script lang="ts" setup>
import CategoryList from '@/components/CategoryList/index.vue'
import ArticleList from '@/components/ArticleList/index.vue'
import BannerBox from '@/components/BannerBox/index.vue'
</script>
<template>
  <div class="middle-box content">
    <div class="middle-box-banner  m-t-20">
      <BannerBox></BannerBox>
    </div>
    <div class="middle-card m-t-20">
      <p class="middle-card-title c-p m-b-10">
        <span>
          查看所有分类
        </span>
      </p>
      <CategoryList></CategoryList>
    </div>
    <div class="middle-art m-t-20">
      <div></div>
      <ArticleList></ArticleList>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.middle-box {
  display: flex;
  flex-direction: column;
  &-banner {
    width: 100%;
    height: 400px;
  }
}
.middle-card{
  &-title{
    font-size: 18px;
    text-align: right;
    line-height: 26px;
    height: 26px;
    span{
      color: #333;
      &:hover{
        color: $base-color;
      }
    }

  }
}
</style>
