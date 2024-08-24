<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const { data: result } = await useFetch('/api/category/getArticles')
const handleClick = (val: any) => {
  const { id } = val
  void router.push({
    path: `/article/details/${id}`
  })
}
</script>

<template>
  <div class="category-box">
    <div class="content-box">
      <div class="category-box-content">
        <div class="category-box-title">
          <div class="category-box-name">分类汇总</div>
          <p class="category-box-description">
            记录开发过程中常见问题和技术难点
          </p>
        </div>
        <div class="category-box-menu">
          <p class="category-box-menutitle">目录</p>
          <div class="category-menu">
            <template v-for="(item, index) in result.data" :key="item.id">
              <p class="category-menu-title">
                {{ index + 1 }}、{{ item.name }}
              </p>
              <ul class="category-menu-list clearfix">
                <li
                  v-for="(child, childIndex) in item.articles"
                  :key="child.id"
                  @click="handleClick(child)"
                >
                  <span
                    >{{ index + 1 }} - {{ childIndex + 1 }}、{{
                      truncateString(child.title, 60)
                    }}</span
                  >
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-box {
  margin: 30px auto;
  padding: 0 10px;
  &-content {
    padding: 10px 30px 20px;
  }
  &-title {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
  }
  &-name {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  &-description {
    color: #00323c;
    margin-bottom: 10px;
  }
  &-menu {
    margin-top: 20px;
  }
  &-menutitle {
    font-size: 18px;
    margin-bottom: 20px;
  }
}
.category-menu {
  &-title {
    font-size: 16px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  &-list {
    margin-bottom: 20px;
    li {
      width: 50%;
      float: left;
      padding-left: 40px;
      box-sizing: border-box;
      line-height: 30px;
      cursor: pointer;
      span {
        font-size: 14px;
        &:hover {
          color: $base-color;
        }
      }
    }
  }
}
</style>
