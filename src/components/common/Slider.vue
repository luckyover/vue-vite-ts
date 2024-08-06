<template>
  <div>
    <swiper
      slides-per-view="auto"
      :space-between="10"
      @swiper="onSwiper"
      :modules="[Navigation, Pagination, Scrollbar, A11y]"
      @slideChange="onSlideChange"
    
    >
      <swiper-slide
        v-for="(slideContent, index) in slides"
        :key="index"
        @click="scrollToSlide(index)"
        class="md:!w-[33%] !w-[85%] no-select"
      >
        <div class="relative h-0 pb-[45%]">
          <img
            class="absolute top-0 w-full h-full object-cover rounded-md"
            :src="imageSrc()"
            alt="sekiro-figurine"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { watch, ref, computed } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slides = ref([]);
slides.value = Array.from({ length: 10 }).map(
  (el, index) => `Slide ${index + 1}`
);

const imageSrc = () => {
  return `assets/img_1.jpg`;
}
</script>
