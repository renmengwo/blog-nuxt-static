<script lang="ts" setup></script>
<template>
  <div class="containter-box">
    <div class="containter-box-banner">banner图</div>
    <div class="containter-box-content">
      <div class="containter-box-list">
        <cantainter-item v-for="item in 20" :key="item" />
      </div>
      <div class="containter-box-page">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :total="100"
          :page-size="10"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.containter-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  &-content {
    width: 80%;
    min-width: 1200px;
    margin: 0 auto;
  }
  &-banner {
    width: 100%;
    height: 400px;
    background-color: #f5f5f5;
  }
  &-list {
    margin: 20px auto 0;
    background: #fff;
    border-radius: 8px;
    width: 100%;
    box-shadow: rgb(148, 148, 148) 0 0 10px -5px;
  }
  &-page {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px auto;
  }
}
</style>
