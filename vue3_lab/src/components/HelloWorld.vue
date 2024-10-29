<script setup lang="ts">
import axios from 'axios';
declare global {
  interface Window {
    editor: {
      getHtml: () => string;
    };
  }
}
// 定义 post 请求方法
const sendPostRequest = async () => {
  try {
    const response = await axios.post('/office/inserthtml', {
      html: window.editor.getHtml()
    });
    console.log('响应数据:', response.data);
  } catch (error) {
    console.error('请求失败:', error);
  }
};
</script>

<template>
  <div class="card">
    <button type="button" @click="sendPostRequest();">post</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
