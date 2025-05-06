<template>
  <div class="prose">
    <ContentRenderer v-if="markdownContent" :value="{ body: markdownContent }" />
    <p v-else>Loading...</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const BASE_URL = 'https://raw.githubusercontent.com/ddfightliu/script/aa4b0bff06e4a271f616c4d8520ad093cdd6a50b/poems/';

// Reactive variable to store markdown content
const markdownContent = ref();

// Function to fetch the list of markdown files
const fetchMarkdownFiles = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    console.log('Response data:', response.data);
    return response.data.files; // Assuming the response contains a "files" array
  } catch (error) {
    console.error('Error fetching markdown file list:', error);
    throw error;
  }
};

// Function to fetch the content of a specific markdown file
const fetchMarkdownFile = async (fileName: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${fileName}`);
      markdownContent.value = response.data;
      console.log('Markdown content fetched:', markdownContent.value);
  } catch (error) {
    console.error(`Error fetching markdown file "${fileName}":`, error);
    throw error;
  }
};

// Fetch markdown content when the component is mounted
onMounted(() => {
  fetchMarkdownFile('test0.md');
  console.log('Mounted, fetching markdown...');
});
</script>

<style scoped>
/* Add any styles for your component here */
p {
  font-size: 16px;
  color: #555;
}
</style>