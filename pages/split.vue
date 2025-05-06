<template>
  <div class="flex flex-col h-screen select-none">
    <!-- 上方窗口 -->
    <div
      class="bg-gradient-to-r from-blue-500 to-purple-500 text-white flex-shrink-0 overflow-hidden transition-all duration-150"
      :style="{ height: `${topHeight}px` }"
    >
      <div class="p-4">上方窗口内容</div>
    </div>

    <!-- 分割条 -->
    <div
      class="bg-gray-300 hover:bg-gray-400 h-1 hover:h-2 cursor-row-resize transition-all duration-150 active:bg-blue-500"
      @mousedown="startDragging"
    ></div>

    <!-- 下方窗口 -->
    <div class="bg-gradient-to-r from-green-400 to-teal-500 text-white flex-grow overflow-hidden transition-all duration-150">
      <div class="p-4">下方窗口内容</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';

const topHeight = ref(300);
const isDragging = ref(false);
let startY = 0;
let startHeight = 0;

const startDragging = (event) => {
  event.preventDefault();
  isDragging.value = true;
  startY = event.clientY;
  startHeight = topHeight.value;

  document.body.classList.add('cursor-row-resize');
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', stopDragging);
};

const handleMouseMove = (e) => {
  if (!isDragging.value) return;

  const dy = e.clientY - startY;
  const newHeight = startHeight + dy;

  // 设置最小高度为 100px，最大高度为窗口高度的 80%
  if (newHeight >= 100 && newHeight <= window.innerHeight * 0.8) {
    topHeight.value = newHeight;
  }
};

const stopDragging = () => {
  isDragging.value = false;
  document.body.classList.remove('cursor-row-resize');
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', stopDragging);
};

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', stopDragging);
  document.body.classList.remove('cursor-row-resize');
});
</script>

<style scoped>
/* 确保窗口高度等于设备高度 */
html, body {
  height: 100%;
  margin: 0;
}
</style>