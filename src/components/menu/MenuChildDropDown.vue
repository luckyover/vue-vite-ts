<script setup lang="ts">
import MenuChildDropDown from "@/components/menu/MenuChildDropDown.vue";
import { defineProps, ref, watch, onMounted } from "vue";
interface MenuItem {
  menu: string;
  icon?: string;
  child?: MenuItem[];
  // Add other properties as needed
  show?: boolean;
}
const props = defineProps<{
  item: MenuItem;
  parent?: boolean;
  position?: string;
}>();

const menuSub = ref<HTMLElement | null>(null);
const menuItem = ref<HTMLElement | null>(null);
const isShow = ref(false);
const current = ref<string>("");
const left = ref<string>("");
const pos = ref<"left" | "right">("left");

const handleBlur = (value) => {
  isShow.value = value;
};
watch(
  () => isShow.value,
  () => {
    setTimeout(() => {
      if (menuSub.value) {
        let { right, width } = menuSub.value.getBoundingClientRect();

        if (right + width > window.innerWidth) {
          pos.value = "right";
        } else {
          pos.value = "left";
        }
      }
    }, 0);
    if (menuItem.value) {
      let { right } = menuItem.value.getBoundingClientRect();
      if (right + 250 > window.innerWidth) {
        current.value = "right";
      } else {
        pos.value = "left";
      }
    }
  }
);


</script>

<template>
  <li
    :class="[
      'menu-item',
      item.child && item.child.length > 0 && 'has-child',
      parent || 'item-child',
    ]"
    :ref="parent ? 'menuItem' : ''"
    @mouseover="handleBlur(true)"
    @mouseleave="handleBlur(false)"
  >
    <a
      href="javascript:void(0)"
      class="menu-link menu-toggle text-gray-100 p-[0.565rem] px-[1rem] flex items-center"
      :class="[item.icon && item.icon !== '' ? '' : 'not-icon']"
    >
      <i
        class="menu-icon tf-icons bx mr-[0.5rem] text-[1.25rem]"
        :class="item.icon"
        v-if="item.icon && item.icon !== ''"
      ></i>
      <div>{{ item.menu }}</div>
    </a>
    <Transition
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform -translate-y-0"
      enter-active-class="ease-in-out duration-500"
    >
      <ul
        v-if="item.child && item.child.length && isShow"
        class="menu-sub"
        :class="[position, current]"
        :style="{ left: left + 'px' }"
        ref="menuSub"
      >
        {{
          left
        }}
        <MenuChildDropDown
          v-for="(child, index) in item.child"
          :key="index"
          :item="child"
          :position="pos"
        />
      </ul>
    </Transition>
  </li>
</template>
