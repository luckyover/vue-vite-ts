<script setup lang="ts">
import Slider from "@/components/common/Slider.vue";
import ProductCard1 from "@/components/layout/product_card/ProductCard1.vue";
import ProductCard from "@/components/layout/product_card/ProductCard.vue";
</script>
<template>
  <div class="flex flex-col gap-3 mb-24">
    <div class="card bg-bg_layout shadow-card rounded-[0.357rem]">
      <div class="card-body p-4 md:p-6 gap-3 grid grid-cols-1">
        <Slider />
        <div class="headding flex justify-between items-center mt-3 mb-2 md:mt-4 md:mb-3">
          <div class="heading font-semibold text-s7">Sản Phẩm bán chạy</div>
          <div class="list all text-bgm text-s5">Xem Thêm</div>
        </div>
        <ProductCard1 />
      </div>
   
    </div>
    <div class="card bg-bg_layout shadow-card rounded-[0.357rem]">
     
      <div class="card-body p-4 md:p-6 gap-3 grid grid-cols-1">
        <div class="headding flex justify-between items-center mt-3 mb-2 md:mt-4 md:mb-3">
          <div class="heading font-semibold text-s7">Sản Phẩm mới</div>
          <div class="list all text-bgm text-s5">Xem Thêm</div>
        </div>

        <ProductCard />
      </div>
    </div>
  </div>
</template>