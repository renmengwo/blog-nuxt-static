<script setup lang="ts"></script>

<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main> 123<slot></slot></el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss"></style>
