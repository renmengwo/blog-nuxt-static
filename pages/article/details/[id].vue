<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { data: result } = await useFetch('/api/article/detail', {
  method: 'get',
  query: {
    id: route.params.id
  }
})
const handleClick = (val: any) => {
  if (!val) return
  const { id } = val
  void router.push({
    path: `/article/details/${id}`
  })
}

useSeoMeta({
  title: result.value.data.currentArticle.title,
  description: result.value.data.currentArticle.title,
  keywords: result.value.data.currentArticle.categoryName,
  'X-XSS-Protection': true
})
</script>

<template>
  <div class="article-box">
    <div class="article-box-left">
      <div class="content-box article-box-containter">
        <h1 class="article-box-title">
          {{ result.data.currentArticle.title }}
        </h1>
        <div class="article-box-info">
          <span class="fr"
            >发布时间：{{
              formatTimestamp(result.data.currentArticle.createdAt)
            }}</span
          >
          <span>阅读量：{{ result.data.currentArticle.viewCount }}</span>
          <span>分类：{{ result.data.currentArticle.categoryName }}</span>
        </div>
        <div
          class="article-box-content"
          v-html="result.data.currentArticle.content"
        />
        <div class="article-box-tags">
          <span>标签:</span>
          <el-tag
            v-for="tag in result.data.currentArticle.tags"
            :key="tag"
            class="m-r-6"
            :disable-transitions="false"
          >
            {{ tag }}
          </el-tag>
        </div>
      </div>
      <div class="article-box-page content-box">
        <p @click="handleClick(result.data.prevArticle)">
          上一篇：<span>{{
            result.data.prevArticle ? result.data.prevArticle.title : ''
          }}</span>
        </p>
        <p @click="handleClick(result.data.nextArticle)">
          下一篇：<span>{{
            result.data.nextArticle ? result.data.nextArticle.title : ''
          }}</span>
        </p>
      </div>
    </div>
    <div class="article-box-right">
      <div class="article-box-user content-box">
        <div>
          <p class="article-box-img" />
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
  margin: 30px auto;
  padding: 0 10px;
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
<style lang="scss">
.article-box-content {
  ol,
  ul {
    padding-left: 20px;
  }
  li {
    list-style: unset;
  }
}
</style>
