<script lang="ts" setup></script>
<template>
  <div class="containter-box">
    <div class="containter-box-banner">banner图</div>
    <div class="containter-box-content">
      <div class="containter-main">
        <div class="containter-box-list content-box">
          <cantainter-item v-for="item in 20" :key="item" />
        </div>
        <div class="containter-main-right">
          <div class="content-box">
            <div>
              <div>
                <p class="containter-main-img"></p>
                <p class="containter-main-name">张三</p>
              </div>
              <div>
                <div>
                  <p>21</p>
                  <p>标签数</p>
                </div>
                <div>
                  <p>23</p>
                  <p>文章数</p>
                </div>
                <div>
                  <p>123</p>
                  <p>点赞数</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content-box m-t-20"></div>
        </div>
      </div>
      <div class="containter-box-page">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :total="100"
          :page-size="10"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.containter-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  &-content {
    max-width: 1320px;
    margin: 0 auto;
  }
  &-banner {
    width: 100%;
    height: 400px;
    background-color: #f5f5f5;
  }
  &-list {
    width: calc(100% - 370px);
  }
  &-page {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px auto;
  }
}
.containter-main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &-right {
    width: 350px;
  }
}
</style>
