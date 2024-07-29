<script lang="ts" setup>
import Vue from "vue";
import HorizontalMenu from "@/components/menu/horizontal/MenuDropDown.vue";
import MenuLogo from "@/components/menu/logo/MenuLogo.vue";
</script>
<template>
  <div class="">
    <MenuLogo />
    <div class="HorizontalMenu w-full  fixed top-[4.03rem] shadow-card bg-bg_layout">
      <div class="ln-container">
        <HorizontalMenu />
      </div>
    </div>
  </div>
   <div class="ln-container">
        <!-- <router-view/> -->
    </div>

</template>
