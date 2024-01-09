<script setup lang="ts"></script>

<template>
  <div class="article-box">
    <div class="article-box-left">
      <div class="content-box article-box-containter">
        <h1 class="article-box-title">
          这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题
        </h1>
        <div class="article-box-info">
          <span class="fr">分类：分类1/分类2</span>
          <span>作者：张三</span>
          <span>发布时间：2021-01-01</span>
          <span>阅读量：100</span>
        </div>
        <div class="article-box-content">
          这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题这是文章标题
          这是文章标题这是文章标题这是文章标题这是文章标题
        </div>
        <div class="article-box-tags">
          <span>标签:</span>
          <p>这是标签1</p>
          <p>这是标签1</p>
          <p>这是标签1</p>
          <p>这是标签1</p>
        </div>
      </div>
      <div class="article-box-page content-box">
        <p>上一篇：<span>在 Vue 中读取本地文本文件（兼容各种浏览器）</span></p>
        <p>下一篇：<span>在 Vue 中读取本地文本文件（兼容各种浏览器）</span></p>
      </div>
    </div>
    <div class="article-box-right">
      <div class="article-box-user content-box">
        <div>
          <p class="article-box-img"></p>
          <p class="article-box-name">张三</p>
        </div>
        <div class="article-box-type">
          <p>文章数：100</p>
          <p>点赞数：100</p>
        </div>
      </div>
      <div class="article-box-menu content-box">
        <p>文章目录</p>
        <div class="article-box-scrollbar">
          <el-scrollbar height="100%">
            <ul>
              <li class="active">目录一</li>
              <li>目录一</li>
              <li>目录一</li>
              <li>目录一</li>
              <li>目录一</li>
              <li>目录一</li>
              <li>目录一</li>
              <li>目录一</li>
              <li>目录一</li>
              <li>目录一</li>
            </ul>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-box {
  width: 80%;
  min-width: 1200px;
  margin: 30px auto;
  display: flex;
  &-title {
    font-size: 24px;
    color: rgb(81, 90, 110);
    margin-bottom: 15px;
    text-align: center;
    padding: 0 30px;
  }
  &-info {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;
    span {
      margin-right: 10px;
    }
  }
  &-tags {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    p {
      border: 1px solid #ccc;
      cursor: pointer;
      height: 20px;
      padding: 0 8px;
      font-size: 12px;
      color: #000;
      line-height: 20px;
      border-radius: 4px;
      margin-right: 10px;
    }
    span {
      margin-right: 10px;
      line-height: 20px;
    }
  }
  &-left {
    flex: 1;
  }
  &-right {
    width: 300px;
    margin-left: 20px;
  }
  &-user {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-img {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 100%;
    background-color: #ccc;
  }
  &-name {
    text-align: center;
    font-size: 16px;
    color: #000;
    margin-top: 10px;
  }
  &-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ebeef5;
    margin-top: 20px;
    p {
      font-size: 14px;
      color: #333;
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
  &-menu {
    margin-top: 20px;
    padding: 0 15px 15px;
    p {
      align-items: center;
      border-bottom: 1px solid #ebeef5;
      color: #333;
      display: flex;
      font-size: 16px;
      font-weight: 500;
      height: 45px;
      line-height: 45px;
      margin-bottom: 10px;
    }
  }
  &-scrollbar {
    height: 290px;
    li {
      cursor: pointer;
      padding: 5px 0;
      font-size: 14px;
      color: #333;
      line-height: 20px;
      &:hover {
        color: $base-color;
      }
      &.active {
        color: $base-color;
      }
    }
  }
  &-page {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    span {
      cursor: pointer;
      color: $base-color;
    }
  }
  &-containter {
    padding: 10px 20px 20px;
  }
}
</style>
