<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
    <template v-for="item in data">
      <div
        class="card-item bg-[whitesmoke] md:hover:-translate-y-2 flex flex-col box-border rounded-lg shadow-md transition-transform duration-200 ease-in-out"
      >
        <div class="relative h-0 pb-[80%] w-full">
          <div
            class="h-[70%] absolute top-0 w-full bg-custom-gradient rounded-lg"
          ></div>
          <img
            class="absolute top-0 w-full h-full object-contain mt-5"
            src="/assets/ok.png"
            alt="sekiro-figurine"
          />
        </div>
        <div class="text-container mt-6 p-2 md:p-3 flex flex-col ">
          <ul class="ratings flex">
            <li><i class="bx bxs-star text-[#ee4d2d]"></i></li>
            <li><i class="bx bxs-star text-[#ee4d2d]"></i></li>
            <li><i class="bx bxs-star text-[#ee4d2d]"></i></li>
            <li><i class="bx bxs-star text-[#ee4d2d]"></i></li>
            <li><i class="bx bxs-star text-[#ee4d2d]"></i></li>
          </ul>
          <h2 class="product-title text-black font-semibold text-overflow">{{ item.title }}</h2>

          <div class="pricing-and-cart">
            <div class="pricing flex justify-between items-center">
              <p class="previous-price text-bgm font-semibold ">
                <span class="text-sm">₫</span>
                <span class="price">48.020</span>
              </p>
              <p class="previous-price text-ss">Đã bán 1,7k</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const data = ref([
  {
    img: "/assets/ok.png",
    title: "Pink Hoodie t-shirt full",
    sale: "20%",
    cost: "35.00",
    price: "32.00",
    shop: "Nuươc hoa phaáp",
  },
  {
    img: "/assets/ok.png",
    title: "Pink Hoodie t-shirt full",
    sale: "20%",
    cost: "35.00",
    price: "32.00",
    shop: "Nuươc hoa phaáp",
  },
  {
    img: "/assets/ok.png",
    title: "Pink Hoodie t-shirt full",
    sale: "20%",
    cost: "35.00",
    price: "32.00",
    shop: "Nuươc hoa phaáp",
  },
  {
    img: "/assets/ok.png",
    title: "Pink Hoodie t-shirt full",
    sale: "20%",
    cost: "35.00",
    price: "32.00",
    shop: "Nuươc hoa phaáp",
  },
]);
</script>
