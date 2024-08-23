<script setup lang="ts">
import { toRefs } from 'vue'
import { formatTimestamp } from '~/utils/dateUtils'
import { truncateString } from '~/utils/stringUtils'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const { item } = toRefs(props)
</script>

<template>
  <div class="article-item c-p">
    <div class="article-item-top m-b-16" />
    <p class="article-item-title">
      {{ item.title }}
    </p>
    <p class="article-item-details m-t-10">
      {{ truncateString(item.content, 60) }}
    </p>
    <p class="article-item-bottom">
      <span />
      <span>{{ formatTimestamp(item.createdAt, 'yyyy-MM-dd') }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.article-item {
  border-radius: 8px;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.1);
  width: 204px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  &-top {
    width: 100%;
    height: 110px;
    background: #eee;
    border-radius: 8px;
    overflow: hidden;
  }
  &-title {
    font-size: 18px;
    color: #2b2c34;
    line-height: 20px;
    &:hover {
      color: $base-color;
    }
  }
  &-details {
    font-size: 14px;
    color: #2b2c34;
    line-height: 20px;
    height: 120px;
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
  }
}
</style>
