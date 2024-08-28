<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted, nextTick } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('')
const mode = ref('default')

// 模拟 ajax 异步获取内容
onMounted(() => {
  valueHtml.value = null
})

const toolbarConfig = {}
const editorConfig = {
  placeholder: '请输入内容',
  MENU_CONF: {
    uploadImage: {
      server: 'http://localhost:4000/api/file/upload', // 上传图片接口地址
      maxFileSize: 5 * 1024 * 1024, // 10M
      fieldName: 'file',
      onSuccess(file, res) {
        console.log('onSuccess', file, res)
      },
      onFailed(file, res) {
        alert(res.message)
        console.log('onFailed', file, res)
      },
      onError(file, err, res) {
        alert(err.message)
        console.error('onError', file, err, res)
      },
      customInsert(res, insertFn) {
        const url = res.data.url
        insertFn(url)
      }
    }
  }
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
const handleCreated = async (editor: any): void => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
defineExpose({
  valueHtml
})
</script>

<template>
  <client-only>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :default-config="toolbarConfig"
        :mode="mode"
      />
      <Editor
        v-model="valueHtml"
        style="height: 500px; overflow-y: hidden"
        :default-config="editorConfig"
        :mode="mode"
        @on-created="handleCreated"
      />
    </div>
  </client-only>
</template>

<style scoped lang="scss"></style>
