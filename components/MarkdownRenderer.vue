<template>
    <div>
      <ContentRenderer v-if="markdownContent" :data="mdcVars" :value="markdownContent" />
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        markdownContent: null,
      };
    },
    methods: {
      async fetchMarkdown() {
        try {
          const response = await axios.get('https://raw.githubusercontent.com/ddfightliu/script/refs/heads/main/poems/test0.md');
          this.markdownContent = response.data;
          console.log('Markdown content fetched:', this.markdownContent,response);
        } catch (error) {
          console.error('Error fetching markdown:', error);
        }
      },
    },
    mounted() {
      this.fetchMarkdown();
      console.log('Mounted, fetching markdown...');
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles for your component here */
  </style>