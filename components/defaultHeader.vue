<script setup lang="ts"></script>

<template>
  <div class="header-box">
    <div class="header-box-content content">
      <div class="header-box-left" />
      <div class="header-box-right">
        <ul class="header-box-right-nav m-r-40">
          <li>
            <span class="header-box-right-item">主页</span>
          </li>
          <li><span class="header-box-right-item"> About Me </span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-box {
  width: 100%;
  height: 50px;
  background-color: #eff0f3;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.12);
  &-content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }
  &-left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    width: 200px;
  }
  &-right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &-seach {
      width: 220px;
    }
    &-nav {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      li {
        padding: 0 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-left: 20px;
      }
    }
    &-item {
      color: #2b2c34;
      &:hover {
        color: $base-color;
      }
    }
  }
}
</style>
