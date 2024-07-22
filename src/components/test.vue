<template>
    <div>
      <input type="file" @change="handleFileUpload" multiple />
      <div>
        <img v-for="(image, index) in processedImages" :key="index" :src="image" alt="Processed Image" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { removeBackground } from "@imgly/background-removal";
  
  const processedImages = ref([]);
  
  // Handle file upload
  const handleFileUpload = async (event) => {
    const files = event.target.files;
    if (!files.length) return;
  
    // Clear the existing processed images
    processedImages.value = [];
  
    // Set up the configuration
    const config = {
      debug: true,
      publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.5.3/dist/',
      rescale: true,
      device: 'cpu',
      proxyToWorker: true,
      output: {
        format: 'image/png',
        quality: 1,
      },
      progress: (key, current, total) => {
        // Optional: handle progress
      },
    };
  
    // Process each file
    for (const file of files) {
      try {
        const imageUrl = URL.createObjectURL(file);
        const result = await removeBackground(imageUrl, config);
        const blobUrl = URL.createObjectURL(result);
        processedImages.value.push(blobUrl);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any styles if needed */
  </style>
  