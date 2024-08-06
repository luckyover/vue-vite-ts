<script setup lang="ts">
    import Slider from '@/components/common/Slider.vue'
    import ProductCard1 from '@/components/layout/product_card/ProductCard1.vue'
    import ProductCard from '@/components/layout/product_card/ProductCard.vue'
</script>
<template>
    <div class="card bg-bg_layout shadow-card rounded-[0.357rem]">
        <div class="card-body p-4 md:p-6 gap-3 grid grid-cols-1 mb-16">
                <Slider/>
                <ProductCard1/>
                <ProductCard/>
        </div>
    </div>
</template>