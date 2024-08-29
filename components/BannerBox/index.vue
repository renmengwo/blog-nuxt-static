<script setup lang="ts">
const imgRandomList = [
  {
    id: '1',
    alt: '随机图片生成',
    src: 'https://picsum.photos/1080/400?3'
  },
  {
    id: '2',
    alt: '随机图片生成',
    src: 'https://picsum.photos/1080/400?1'
  },
  {
    id: '3',
    alt: '随机图片生成',
    src: 'https://picsum.photos/1080/400?2'
  }
]
</script>

<template>
  <div class="banner-box">
    <el-carousel :interval="4000" height="400px">
      <el-carousel-item v-for="item in imgRandomList" :key="item.id">
        <div>
          <img :src="item.src" :alt="item.alt" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.banner-box {
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
