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
    padding-right: 0rem;
    padding-left: 0rem;
    margin-left: auto;
    margin-right: auto;
 }
@media (min-width: 1400px) {
  .ln-container{
     max-width: 1440px;
  }
}
@media (min-width: 768px) {
  .ln-container{
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
.no-select {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* Internet Explorer/Edge */
  user-select: none;         /* Non-prefixed version, currently supported by Chrome, Opera, and Edge */
}


</style>
