<script setup lang="ts">

</script>

<template>
  <div class="card-item">
    <div class="card-item-middle m-b-30" />
    <p class="card-item-label">
      Vue
    </p>
  </div>
</template>

<style scoped lang="scss">
.card-item{
  flex: 0 0 200px;
  height: 280px;
  border-radius: 8px;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding-top:65px;
  padding-left: 30px;
  &:hover{
    background:#6246EA
  }
  &-middle{
    width: 60px;
    height: 60px;
    border-radius: 6px;
    background: #fff;
  }
  &-label{
    font-size: 24px;
    color: #2B2C34;
  }
}
</style>
