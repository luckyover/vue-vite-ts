<script setup lang="ts">
import { ref } from "vue";
import MenuChildDropDown from "@/components/menu/MenuChildDropDown.vue";
const menus = ref([
  {
    menu: "Layouts",
    icon: "bx-layout",
    child: [
      {
        menu: "Test",
        icon: "bx-layout",

        child: [
          {
            menu: "Test11",
            icon: "bx-layout",
          },
          {
            menu: "Test12",
            icon: "",

           
          },
        ],
      },
      {
        menu: "Test2",
        icon: "bx-layout",

        child: [],
      },
    ],
  },
  {
    menu: "Layouts",
    icon: "bx-layout",
    child: [
      {
        menu: "Test",
        icon: "bx-layout",

        child: [
          {
            menu: "Test11",
            icon: "bx-layout",

            child: [],
          },
          {
            menu: "Test12",
            icon: "bx-layout",

           
          },
        ],
      },
      {
        menu: "Test2",
        icon: "bx-layout",

        child: [],
      },
    ],
  },

]);
</script>
<template>
  <ul class="menu-inner" >
    <MenuChildDropDown
      v-for="(item, index) in menus"
      :key="index"
      :item="item"
      :parent="true"
    />
  </ul>
</template>

<style lang="scss">
.menu-inner {
  display: flex;
  .menu-link {
    position: relative;
    padding: 9px 35px 9px 16px;
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
      transform: translateY(-50%) rotate(135deg);
    }
  }
}
.menu-link {
  border-radius: 0.375rem;
  padding: 9px 35px 9px 16px;
  &:hover {
    background-color: rgba(67, 89, 113, 0.04);
  }
}
///ul child
.menu-sub {
  position: absolute;
  width: 14.5rem;
  padding: 0.325rem 0;
  border-radius: 0.375rem;
  background: #fff;
  box-shadow: 0 0.25rem 1rem rgba(161, 172, 184, 0.45);
  .menu-item:not(.has-child) > .menu-link {
    &::after {
      width: 0em;
      height: 0em;
    }
  }
  .menu-item.has-child > .menu-link {
    &::after {
      transform: translateY(-50%) rotate(45deg);
    }
  }
}
.menu-item{
  position: relative;
}
.menu-sub.right{
  left: calc(-100% + 35px);
}
.item-child > .menu-sub {
  left: 100%;
  top: 2px;
  width: 100%;
  padding: 0.425rem 0;
}
.item-child > .menu-sub.right {
  left: -100%;
  top: 2px;
  width: 100%;
  padding: 0.425rem 0;
}

.menu-link.not-icon:before {
    content: "";
    position: absolute;
    left: 1.4375rem;
    width: .375rem;
    height: .375rem;
    border-radius: 50%;
    background-color: #b4bdc6 !important;
}

</style>
