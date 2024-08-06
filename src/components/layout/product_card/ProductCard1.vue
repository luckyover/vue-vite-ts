<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
    <template v-for="item in data">
      <div
      class="bg-[rgb(237,239,244,.6)] rounded-lg overflow-hidden grid grid-cols-[35%_1fr] gap-2 md:gap-3 items-center p-2.5 relative"
    >
      <a
        class="relative h-0 pt-[100%] w-full  bg-custom-gradient1 rounded-[5px]"
      >
        <img
          :src="item.img"
          class="absolute top-0 w-full h-full object-contain"
          alt=""
        />
      </a>
      <div
        class=""
      >
        <div class="flex flex-col ">
          <a href="product.html">
            <h4 class="text-black font-semibold text-overflow">{{item.title  }}</h4>
          </a>
          <h4 class="text-[#777] ">{{ item.shop}}</h4>
          <div class="price flex gap-2">
            <h4>  <span class="">₫</span>{{ item.price  }}</h4>
            <del class="text-[#777]">  <span class="">₫</span> {{ item.cost }}</del>
            <span class="text-red-500">{{item.sale  }}</span>
          </div>
        </div>
      </div>
  
    </div>
    </template>
  
  </div>
</template>
<script setup lang="ts">
  import {ref} from "vue"
  const data = ref([{
    'img':'/assets/ok.png',
    'title':'Pink Hoodie t-shirt full',
    'sale':'20%',
    'cost':'35.00',
    'price':'32.00',
    'shop':'Nuươc hoa phaáp',
  },
  {
    'img':'/assets/ok.png',
    'title':'Pink Hoodie t-shirt full',
    'sale':'20%',
    'cost':'35.00',
    'price':'32.00',
    'shop':'Nuươc hoa phaáp',
  },
  {
    'img':'/assets/ok.png',
    'title':'Pink Hoodie t-shirt full',
    'sale':'20%',
    'cost':'35.00',
    'price':'32.00',
    'shop':'Nuươc hoa phaáp',
  }])
</script>
