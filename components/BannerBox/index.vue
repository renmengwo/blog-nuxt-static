<script setup lang="ts">

</script>

<template>
  <div class="banner-box">
    <el-carousel
      :interval="4000"
      height="400px"
    >
      <el-carousel-item
        v-for="item in 6"
        :key="item"
      >
        <h3
          text="2xl"
          justify="center"
        >
          {{ item }}
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.banner-box{
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
