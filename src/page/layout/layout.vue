<script lang="ts" setup>
import HorizontalMenu from "@/components/menu/horizontal/MenuDropDown.vue";
import MenuLogo from "@/components/menu/logo/MenuLogo.vue";
import Vertical from "@/components/menu/vertical/MenuDropDown.vue"
import { onMounted, onUnmounted, ref } from 'vue';

interface MenuComponent {
  isOpen: boolean;
}
const device = ref<string>('pc');
const menuRef = ref<MenuComponent | null>(null);
const handleResize = () => {
  const width = window.innerWidth;
  device.value = 
    width < 768 ? 'mobile' :
    width < 1024 ? 'ipad' :
    'pc';

};
const handleClickMenu = () => {
  if (menuRef.value) {
    menuRef.value.isOpen = true;
  }
}
onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>
<template>
  <Vertical :type="device" v-if="device == 'ipad'" ref="menuRef"> </Vertical>
  <div class="">
    <MenuLogo :type="device" @clickMenu="handleClickMenu"/>
    <div
      class="HorizontalMenu w-full fixed top-[4.04rem] shadow-card bg-bg_layout"
    >
      <div class="ln-container">
        <HorizontalMenu v-if="device == 'pc'" />
      </div>
    </div>
  </div>
  
  <div class="ln-container pt-[8rem]">
    <router-view/>
  </div>
</template>
