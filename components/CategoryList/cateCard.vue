<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const { item } = toRefs(props)
</script>

<template>
  <div class="card-item">
    <div class="card-item-middle m-b-30">
      <img :src="item.iconUrl" :alt="item.name" />
    </div>
    <p class="card-item-label">
      {{ item.name }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.card-item {
  flex: 0 0 200px;
  height: 230px;
  border-radius: 8px;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding-top: 65px;
  padding-left: 30px;
  &:hover {
    background: #6246ea;
  }
  &-middle {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  &-label {
    font-size: 24px;
    color: #2b2c34;
  }
}
</style>
