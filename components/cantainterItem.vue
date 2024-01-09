<script setup lang="ts"></script>

<template>
  <div class="container-item">
    <div class="container-item-title c-p">
      这是这是标题测试这是标题测试这是标题测试标题测试这是这是标题测试这是标题测试这是标题测试标题测试这是这是标题测试这是标题测试这是标题测试标题测试这是这是标题测试这是标题测试这是标题测试标题测试这是这是标题测试这是标题测试这是标题测试标题测试这是这是标题测试这是标题测试这是标题测试标题测试
    </div>
    <div class="container-item-content">
      <div>
        <span class="m-r-20">2024-01-02</span>
        <span class="c-p hover-active">这是标签</span>
      </div>
      <div class="c-p">
        <span class="m-r-5 hover-active">分类1</span>/<span
          class="m-l-5 hover-active"
          >分类2</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-item {
  border-bottom: 1px solid rgb(238, 238, 238);
  padding: 20px;
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      display: flex;
      align-items: center;
      & > span {
        font-size: 14px;
        color: rgb(81, 90, 110);
      }
    }
  }
  &-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 18px;
    color: rgb(81, 90, 110);
    margin-bottom: 15px;
    &:hover {
      color: $base-color;
    }
  }
}
.hover-active {
  &:hover {
    color: $base-color;
  }
}
</style>
