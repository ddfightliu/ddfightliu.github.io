<template>
  <div class="flex flex-col h-screen">
    <!-- 顶部导航栏 -->
    <div class="bg-gray-800 text-white h-12 flex items-center px-4">
      <div class="font-bold">My VS Code</div>
    </div>

    <div class="flex flex-grow">
      <!-- 侧边栏 -->
      <div class="bg-gray-900 text-gray-300 w-60 flex-shrink-0">
        <ul class="mt-4">
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">Explorer</li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">Search</li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">Source Control</li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">Run and Debug</li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">Extensions</li>
        </ul>
      </div>

      <!-- 主内容区域 -->
      <div class="flex-grow bg-gray-100">
        <div class="h-full flex items-center justify-center text-gray-500">
          Main Content Area
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑，静态页面
</script>

<style scoped>
/* 自定义样式以增强 VS Code 风格 */
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>