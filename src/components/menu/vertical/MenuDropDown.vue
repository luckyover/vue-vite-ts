<script setup lang="ts">
import MenuChildDropDown from "@/components/menu/vertical/MenuChildDropDown.vue";
import menu from "@/data/menu.ts";
import { ref, computed } from "vue";
import { IMenuResponsive } from "@/types/menu/menu.ts";
const props = defineProps<IMenuResponsive>();
const isOpen = ref<boolean>(false);
const openMenuIndex = ref(null);

const handleToggle = (index:any) => {
  return (openMenuIndex.value = openMenuIndex.value === index ? null : index);
};

const getId = computed(() => {
  if (props.type == "ipad") {
    return "menu-ipad";
  } else {
    return "menu-vertical";
  }
});
</script>
<template>
  <div @click="isOpen = !isOpen">
    <slot> </slot>
  </div>
  <div>
    <div
      class="fixed inset-0 transform transition-all"
      v-if="isOpen && type == 'ipad'"
      @click="isOpen = false"
    >
      <div class="absolute inset-0 bg-backdrop opacity-50"></div>
    </div>

    <div
      class="w-[260px] bg-slate-300 text-nav fixed left-0 top-0"
      id="menu-wrap"
      :class="[isOpen ? 'open' : 'close', getId]"
    >
      <div class="logo-details h-[60px] leading-[60px] flex items-center relative ml-4" >
        <i class="bx bxl-c-plus-plus icon text-white h-[60px] !leading-[60px] min-w-[55px] text-2xl text-center opacity-0"></i>
        <div class="logo_name text-white text-2xl font-semibold opacity-0 h-[60px] !leading-[60px] ">CodingLab</div>
        <i class="bx  text-white text-2xl min-w-[55px] h-[60px] !leading-[60px]    absolute top-1/2 right-0 transform -translate-y-1/2" :class="isOpen ? 'bx-menu-alt-right' : 'bx-menu'" id="btn-menu" @click="isOpen = !isOpen" ></i>

      </div>
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
#menu-wrap .menu-link {
  position: relative;
  padding: 9px 35px 9px 16px;
}
#menu-wrap .has-child > .menu-link {
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
#menu-wrap .menu-toggle::after {
  transition-duration: 0.3s;
  transition-property: -webkit-transform, transform;
}
#menu-wrap .menu-item.open {
  > .menu-link {
    &::after {
      transform: translateY(-50%) rotate(135deg);
    }
  }
}

#menu-wrap .menu-sub > .menu-item > .menu-link {
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
///menu-ipad
.menu-ipad {
  transition-duration: 0.3s;
  transition-property: transform, -webkit-transform;
  transform: translate3d(-100%, 0, 0);
}
.menu-ipad.open {
  transform: translate3d(0, 0, 0);
}
///menu-vertical
#menu-wrap.menu-vertical.close .has-child > .menu-link {
  &::after {
    display: none;
  }
}
.menu-vertical.close .menu-sub {
  display: none;
}
.menu-vertical.close {
  width: 5.25rem;
}
.menu-vertical .menu-link > div {
  transition: all 0.4s ease;
  opacity: 0;
}


.menu-vertical.open .menu-link > div,
.menu-vertical.open .bxl-c-plus-plus,
.menu-vertical.open .logo_name {
  opacity: 1;
}
.menu-vertical,.menu-vertical .bxl-c-plus-plus,.menu-vertical .logo_name {
  transition: all 0.5s ease;
}
</style>
