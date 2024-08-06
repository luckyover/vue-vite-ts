<script setup lang="ts">
import { computed } from "vue";
const imageSrc = computed(() => {
  return `assets/dazai-figurine.png`;
});
</script>
<template>
  <div class="flex gap-3 px-4 md:px-3 ">
    <div class="item-category flex flex-col items-center">
      <div class="relative w-[60px] h-[60px] overflow-hidden bg-custom-gradient rounded-full">
        <img
          class="absolute inset-0 w-full h-full object-cover"
          alt=""
          :src="imageSrc"
        />
      </div>
      <span class="category-title font-semibold">Home</span>
    </div>
    <div class="item-category flex flex-col items-center">
      <div class="relative w-[60px] h-[60px] overflow-hidden bg-custom-gradient rounded-full">
        <img
          class="absolute inset-0 w-full h-full object-cover"
          alt=""
          :src="imageSrc"
        />
      </div>
      <span class="category-title font-semibold">Home</span>
    </div>
    <div class="item-category flex flex-col items-center">
      <div class="relative w-[60px] h-[60px] overflow-hidden bg-custom-gradient rounded-full">
        <img
          class="absolute inset-0 w-full h-full object-cover"
          alt=""
          :src="imageSrc"
        />
      </div>
      <span class="category-title font-semibold">Home</span>
    </div>
  </div>
</template>
