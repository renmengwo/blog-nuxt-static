<script setup lang="ts">
import Editor from '@/components/wangEditor/index.vue'
import { reactive, ref, nextTick } from 'vue'
const formData = reactive({
  title: '',
  content: '',
  categoryId: '',
  tags: []
})
const optionsList = ref([{
  value: '1',
  label: '前端'
}, {
  value: '2',
  label: '后端'
}, {
  value: '3',
  label: '数据库'
}, {
  value: '4',
  label: '运维'
}])
const formRule = reactive({
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' }
  ],
  categoryId: [
    { required: true, message: '请选择分类', trigger: 'change' }
  ]
})
const inputValue: any = ref('')
const inputVisible = ref(false)
const InputRef = ref(null)

const handleClose = (tag: string): void => {
  formData.tags.splice(formData.tags.indexOf(tag), 1)
}

const showInput = (): void => {
  inputVisible.value = true
  void nextTick(() => {
    InputRef.value?.input?.focus()
  })
}

const handleInputConfirm = (): void => {
  if (inputValue.value) {
    formData.tags.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>

<template>
  <div class="art-add-box m-t-20">
    <el-form ref="form" :model="formData" label-width="80px" :rules="formRule">
      <el-form-item label="标题" prop="title">
        <el-input
          v-model="formData.title"
          placeholder="请输入标题，不超过50个字"
          maxlength="50"
          show-word-limit
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="categoryId">
        <el-select v-model="formData.categoryId" placeholder="请选择文章分类" clearable style="width:100%">
          <el-option
            v-for="item in optionsList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容">
          <Editor></Editor>
      </el-form-item>
      <el-form-item label="标签">
        <div class="tag-box">
          <el-tag
            class="m-r-6"
            v-for="tag in formData.tags"
            :key="tag"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button v-else class="button-new-tag" size="small" @click="showInput">
            + 添加标签
          </el-button>
        </div>
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
.tag-box{
  display: flex;
}
</style>
