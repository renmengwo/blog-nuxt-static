<script setup lang="ts"></script>

<template>
  <div>
    <el-container>
      <el-header height="50px">
        <default-header />
      </el-header>
      <el-main><slot></slot></el-main>
      <el-footer>
        <default-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss"></style>
