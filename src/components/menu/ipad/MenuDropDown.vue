<script setup lang="ts">
import MenuChildDropDown from "@/components/menu/ipad/MenuChildDropDown.vue";
import menu from "@/data/menu.ts";
import { ref } from "vue";

const isOpen = ref<boolean>(false);
const openMenuIndex = ref(null);
const handleToggle = (index) => {
  return (openMenuIndex.value = openMenuIndex.value === index ? null : index);
};
</script>
<template>
  <div @click="isOpen = !isOpen">
    <slot> </slot>
  </div>
  <div>
    <!-- <div
      class="fixed inset-0 transform transition-all"
      v-if="isOpen"
      @click="isOpen = false"
    >
      <div class="absolute inset-0 bg-backdrop opacity-50"></div>
    </div> -->
    <!-- :class="isOpen ? 'transform-3d' : '-translate-x-full'" -->
    <div
      class=" w-[260px] bg-slate-300 text-nav fixed left-0 top-0 transform"
      id="menu-ipad"
     
      :class="isOpen ? 'open' : 'close'"
    >
      <ul class="menu-inner my-0 mx-4">
        <MenuChildDropDown
          v-for="(item, index) in menu"
          :key="index"
          :item="item"
          :parent="true"
          :is-open="openMenuIndex == index"
          @toggle="handleToggle(index)"
        />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
// #menu-ipad {
//   transition-duration: 0.3s;
//   transition-property: transform, -webkit-transform;
// }
#menu-ipad .menu-link {
  position: relative;
  padding: 9px 35px 9px 16px;
}
#menu-ipad .has-child > .menu-link {
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 2px);
    right: calc(1rem + 0.21em);
    display: block;
    width: 0.42em;
    height: 0.42em;
    border: 1px solid;
    border-bottom: 0;
    border-left: 0;
    transform: translateY(-50%) rotate(45deg);
  }
}
#menu-ipad .menu-toggle::after {
  transition-duration: 0.3s;
  transition-property: -webkit-transform, transform;
}
#menu-ipad .menu-item.open {
  > .menu-link {
    &::after {
      transform: translateY(-50%) rotate(135deg);
    }
  }
}

#menu-ipad .menu-sub > .menu-item > .menu-link {
  &::before {
    content: "";
    position: absolute;
    left: 1.4375rem;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: #b4bdc6;
    left: 1.3rem;
  }
  padding-left: 3rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  color: #566a7f;
}

///
#menu-ipad.close .menu-sub{
  display: none;
}
#menu-ipad.close{
  width: 5.25rem;
}
#menu-ipad .menu-link >div{
  transition: all 0.4s ease;
  opacity: 0;
} 
#menu-ipad.open .menu-link >div{
  opacity: 1;
} 
#menu-ipad{
  transition: all 0.5s ease;
}
</style>
