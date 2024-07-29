<script setup lang="ts">
import layout from '@/page/layout/layout.vue'
</script>

<template>
  <layout></layout>
</template>

<style>
body{
  background: #f5f5f9;
}
.ln-container{
    padding-right: 1rem;
    padding-left: 1rem;
 }
@media (min-width: 1400px) {
  .ln-container{
     max-width: 1440px;
  }
}
@media (min-width: 1024px) {
  .ln-container{
     padding-right: 1.625rem;
     padding-left: 1.625rem;
  }
}



</style>
