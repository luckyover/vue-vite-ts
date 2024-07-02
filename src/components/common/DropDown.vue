<script setup>
import { computed, ref } from 'vue';

const menu_drop_down = ref(null);
const openDropDown = ref(false);
const position = computed(() => {
  if (menu_drop_down.value) {
    const rect = menu_drop_down.value.getBoundingClientRect();
    const leftPosition = rect.left;
    const rightPosition = rect.right;
    return leftPosition <= 0 && rightPosition <= window.innerWidth ? 'left-0' : 'right-0';
  }
  return ''; 
});

const handleClick = () => {
    openDropDown.value = !openDropDown.value;
};
</script>

<template>
  <div>
      <div class="relative inline-block">
        <div @click="handleClick" class="cursor-pointer">
          <slot name="data-click">click</slot>
        </div>
        <div class="shadow-drop-down absolute top-full min-w-48" v-if="openDropDown" :class="position" ref="menu_drop_down">
          <slot name="data-content">
                45454 54 545 454 454 445
          </slot>
        </div>
      </div>
  </div>
</template>
