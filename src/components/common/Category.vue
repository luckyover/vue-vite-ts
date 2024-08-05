<script setup lang="ts">
import { computed } from "vue";
const imageSrc = computed(() => {
  return `assets/dazai-figurine.png`;
});
</script>
<template>
  <div class="flex gap-3 px-4 md:px-3 ">
    <div class="item-category flex flex-col items-center">
      <div class="relative w-[45px] h-[45px] overflow-hidden">
        <img
          class="absolute inset-0 w-full h-full object-cover rounded-full"
          alt=""
          :src="imageSrc"
        />
      </div>
      <span class="category-title">Home</span>
    </div>
    <div class="item-category flex flex-col items-center">
      <div class="relative w-[45px] h-[45px] overflow-hidden">
        <img
          class="absolute inset-0 w-full h-full object-cover rounded-full"
          alt=""
          :src="imageSrc"
        />
      </div>
      <span class="category-title">Home</span>
    </div>
    <div class="item-category flex flex-col items-center">
      <div class="relative w-[45px] h-[45px] overflow-hidden">
        <img
          class="absolute inset-0 w-full h-full object-cover rounded-full"
          alt=""
          :src="imageSrc"
        />
      </div>
      <span class="category-title">Home</span>
    </div>
  </div>
</template>
