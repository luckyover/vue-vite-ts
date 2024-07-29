<script setup lang="ts">
import MenuChildDropDown from "@/components/menu/vertical/MenuChildDropDown.vue";
import { IMenuChildDropDown } from "@/types/menu/menu.ts";
import { ref } from "vue";

defineProps<IMenuChildDropDown>();

const emit = defineEmits(["toggle"]);
const toggle = () => {
  emit("toggle");
};

//child
const openMenuIndex = ref(null);
const handleToggle = (index:any) => {
  return (openMenuIndex.value = openMenuIndex.value === index ? null : index);
};
</script>

<template>
  <li
    :class="[
      'menu-item',
      item.child && item.child.length > 0 && 'has-child',
      parent ? 'item-parent' : 'item-child',
      isOpen && 'open',
    ]"
    :ref="parent ? 'menuItem' : 'menuParent'"
    @click.stop="toggle"
  >
    <a
      href="javascript:void(0)"
      class="menu-link menu-toggle text-menu p-[0.565rem] px-[1rem] flex items-center"
    
      :class="[item.icon && item.icon !== '' ? '' : 'not-icon']"
    >
      <i
        class="menu-icon tf-icons bx mr-[0.5rem] text-[1.25rem]"
        :class="item.icon"
        v-if="item.icon && item.icon !== '' && parent"
      ></i>
      <div>{{ item.menu }}</div>
    </a>
    <div
      class="grid duration-300 ease-out"
      :class="isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <transition
        enter-from-class="opacity-0 "
        enter-to-class="opacity-100"
        enter-active-class="ease-out duration-300"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0"
        leave-active-class="ease-in duration-300"
      >
        <ul
          v-if="item.child && item.child.length && isOpen"
          class="menu-sub overflow-hidden"
        >
          <MenuChildDropDown
            v-for="(child, index) in item.child"
            :key="index"
            :item="child"
            :is-open="openMenuIndex == index"
            @toggle="handleToggle(index)"
          />
        </ul>
      </transition>
    </div>
  </li>
</template>
