<script setup lang="ts">
import Editor from '@/components/wangEditor/index.vue'
import { reactive, ref, nextTick, onMounted } from 'vue'
import { ElMessage } from '#imports'
const route = useRoute()
const { data: cateResult } = await useFetch('/api/category/getCategory')

const formData = reactive({
  title: '',
  content: '',
  categoryId: '',
  id: '',
  tags: []
})
const inputValue: any = ref('')
const inputVisible = ref(false)
const InputRef = ref(null)
const editRef = ref(null)
const formRef = ref(null)
const formRule = reactive({
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  categoryId: [{ required: true, message: '请选择分类', trigger: 'change' }],
  content: [{ required: true, message: '请输入文章内容', trigger: 'blur' }]
})
const { data: result } = await useFetch('/api/article/detail', {
  method: 'get',
  query: {
    id: route.params.id
  }
})
onMounted(() => {
  initFormData()
})
const initFormData = () => {
  if (result.value.code === 200) {
    formData.title = result.value.data.currentArticle.title
    formData.categoryId = result.value.data.currentArticle.categoryId
    formData.tags = result.value.data.currentArticle.tags
    formData.content = result.value.data.currentArticle.content
    formData.id = result.value.data.currentArticle.id
    editRef.value.valueHtml = result.value.data.currentArticle.content
  }
}

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
const handleSubmit = async () => {
  formData.content = editRef.value.valueHtml
  await formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      const { data: result } = await useAsyncData(
        'article',
        async () =>
          await $fetch('/api/article/update', {
            method: 'post',
            body: formData
          })
      )
      if (result.value.code === 200) {
        ElMessage.success('编辑成功')
      }
    }
  })
}
</script>

<template>
  <div class="art-add-box m-t-20">
    <el-form
      ref="formRef"
      :model="formData"
      label-width="80px"
      :rules="formRule"
    >
      <el-form-item label="标题" prop="title">
        <el-input
          v-model="formData.title"
          placeholder="请输入标题，不超过50个字"
          maxlength="50"
          show-word-limit
          clearable
        />
      </el-form-item>
      <el-form-item label="分类" prop="categoryId">
        <el-select
          v-model="formData.categoryId"
          placeholder="请选择文章分类"
          clearable
          style="width: 100%"
        >
          <el-option
            v-for="item in cateResult.data"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="内容">
        <Editor ref="editRef" />
      </el-form-item>
      <el-form-item label="标签">
        <div class="tag-box">
          <el-tag
            v-for="tag in formData.tags"
            :key="tag"
            class="m-r-6"
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
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput"
          >
            + 添加标签
          </el-button>
        </div>
      </el-form-item>
    </el-form>
    <div class="art-add-bottom">
      <el-button type="primary" @click="handleSubmit"> 提交 </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.art-add {
  &-box {
    width: 100%;
    height: 100%;
  }
  &-bottom {
    display: flex;
    justify-content: flex-end;
  }
}
.tag-box {
  display: flex;
}
</style>
