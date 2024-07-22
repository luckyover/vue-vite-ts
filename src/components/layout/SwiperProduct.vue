<template>
  <div class="relative w-[500px] h-[500px] overflow-hidden">
    <transition
      enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-50"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      enter-active-class="ease-out duration-300"
      leave-from-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-50"
      leave-active-class="ease-in duration-500"
    >
      <img
        :key="imageSrc"
        class="absolute inset-0 w-full h-full object-cover"
        :src="imageSrc"
        alt="Dynamic Image"
      />
    </transition>
  </div>
  <div class="w-[400px] mx-auto">
    <swiper
      slides-per-view="auto"
      :space-between="10"
      @swiper="onSwiper"
      navigation
      :modules="[Navigation, Pagination, Scrollbar, A11y]"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(slideContent, index) in slides"
        :key="index"
        @click="scrollToSlide(index)"
        >{{ slideContent }}</swiper-slide
      >
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

const index_ok = ref(0);
const imageSrc = computed(() => {
  return `assets/img_${index_ok.value}.jpg`;
});
const swiperInstance = ref(null);
const viewport = ref(null);
const activeIndex = ref(null);
const slides = ref([]);
slides.value = Array.from({ length: 10 }).map(
  (el, index) => `Slide ${index + 1}`
);

const onSwiper = (swiper) => {
  activeIndex.value = swiper.activeIndex;
  swiperInstance.value = swiper;
  viewport.value = swiper.wrapperEl.getBoundingClientRect();
};
const scrollToSlide = (index) => {
  if (index_ok.value != index) {
    index_ok.value = index;
  }
  if (swiperInstance.value) {
    const slide = swiperInstance.value.slides[index];
    const slideRect = slide.getBoundingClientRect();

    if (
      slideRect.right > viewport.value.right &&
      slideRect.left > viewport.value.left
    ) {
      swiperInstance.value.slideTo(swiperInstance.value.activeIndex + 1);
    } else if (
      slideRect.left < viewport.value.left &&
      slideRect.right < viewport.value.right
    ) {
      swiperInstance.value.slideTo(index);
    }
  }
};

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex;
};
</script>

<style>
/* Transition classes */

.swiper-slide {
  border: 1px solid;
  width: 100px !important;
}
</style>
