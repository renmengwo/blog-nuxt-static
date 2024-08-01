<script setup lang="ts">
const formData = reactive({
  title: '',
  content: '',
  tags: []
})
</script>

<template>
  <div class="art-add-box">
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="标题">
        <el-input
          v-model="formData.title"
          placeholder="请输入标题，不超过50个字"
          maxlength="50"
          show-word-limit
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          v-model="formData.title"
          placeholder="请输入标题，不超过50个字"
          max="50"
          show-word-limit
          type="textarea"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.art-add {
  &-box {
    width: 100%;
    height: 100%;
  }
}
</style>
