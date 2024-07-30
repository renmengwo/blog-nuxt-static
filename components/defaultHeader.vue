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
    <div class="header-box-content content">
      <div class="header-box-left"></div>
      <div class="header-box-right">
        <ul class="header-box-right-nav m-r-40">
          <li>
            <span class="header-box-right-item">主页</span>
          </li>
          <li>
            <el-dropdown>
              <span class="header-box-right-item"> 分类 </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li><span  class="header-box-right-item"> About Me </span></li>
        </ul>
        <div class="header-box-right-seach">
          <client-only>
            <el-select
              clearable
              v-model="title"
              filterable
              remote
              reserve-keyword
              placeholder="全站搜索"
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-box {
  width: 100%;
  height: 50px;
  background-color: #EFF0F3;
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
    &-item{
      color:#2B2C34;
      &:hover{
        color:$base-color;
      }
    }
  }
}
</style>
