<script setup lang="ts"></script>

<template>
  <div>
    <el-container>
      <el-header height="50px">
        <default-header />
      </el-header>
      <el-main class="min-height"><slot></slot></el-main>
      <el-footer height="40px">
        <default-footer />
      </el-footer>
      <el-backtop :right="60" :bottom="100" />
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.min-height {
  min-height: calc(100vh - 91px);
}
</style>
