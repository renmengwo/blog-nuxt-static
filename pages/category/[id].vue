<script setup lang="ts"></script>

<template>
  <div class="content-box category-box">
    <div class="category-box-content">
      <div class="category-box-title">
        <div class="category-box-name">前端开发</div>
        <p class="category-box-description"></p>
      </div>
      <div class="category-box-menu"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-box {
  width: 80%;
  min-width: 1200px;
  margin: 30px auto;
  &-content {
    padding: 10px 30px 20px;
  }
  &-title {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
  }
}
</style>
