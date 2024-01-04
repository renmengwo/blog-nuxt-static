<script setup lang="ts">
import { ref, onMounted } from 'vue'
onMounted(() => {
  list.value = states.map(item => {
    return { value: `value:${item}`, label: `label:${item}` }
  })
})
interface ListItem {
  value: string
  label: string
}
const list = ref<ListItem[]>([])
const title = ref('')
const loading = ref(false)
const options = ref<ListItem[]>([])
const remoteMethod = (query: string): any => {
  if (query !== '') {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter(item => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]
</script>

<template>
  <div class="header-box">
    <div class="header-box-content">
      <div class="header-box-left">
        <div class="header-box-left-logo"></div>
        <div class="header-box-left-title">欢迎来到自由博客</div>
      </div>
      <div class="header-box-right">
        <div class="header-box-right-seach">
          <client-only>
            <el-select
              clearable
              v-model="title"
              filterable
              remote
              reserve-keyword
              placeholder="请输入标题"
              :remote-method="remoteMethod"
              :loading="loading"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </client-only>
        </div>
        <ul class="header-box-right-nav">
          <li>
            <span>首页</span>
          </li>
          <li>
            <el-dropdown>
              <span> 前端开发 </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown>
              <span> 后端开发 </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li><span> 杂记 </span></li>
          <li><span> ABout Me </span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-box {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.12);
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  }
  &-left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    &-logo {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      background-color: #f00;
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
      transition: transform 1s ease;
    }
    &-title {
      font-size: 20px;
      font-weight: bold;
    }
    &:hover {
      .header-box-left-logo {
        transform: rotate(360deg) scale(1.5);
      }
    }
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
      margin-left: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      li {
        padding: 0 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
