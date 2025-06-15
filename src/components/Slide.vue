<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { IconArrowLeft } from '@tabler/icons-vue';
import { IconArrowRight } from '@tabler/icons-vue';

//image carousel by vue3_carousel library
const images = [
  'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
  'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
  'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
]
</script>

<template>
  <Carousel
    :items-to-show="1"
    :wrap-around="true"
    :autoplay="false"
    :mouse-drag="true"
    :pause-autoplay-on-hover="true"
    class="rounded-lg overflow-hidden"
  >
    <Slide v-for="(img, index) in images" :key="index">
      <div class="w-full h-[300px] md:h-[500px] relative">
        <img :src="img" alt="" class="w-full h-full object-cover" />
      </div>
    </Slide>

    <template #addons>
      <Navigation >
            <template #prev>
     
        <IconArrowLeft />
    
    </template>
    <template #next>
      
        <IconArrowRight />
     
    </template>
      </Navigation>
      <Pagination />
    </template>
  </Carousel>
</template>


<style scoped>
:deep(.carousel__pagination-button) {
  background-color: black;
  width: 24px;
  height: 12px;
  margin: 0 4px;
 
  opacity: 0.5;
}

:deep(.carousel__pagination-button--active) {
  background-color: #3b82f6; /* Tailwind blue-500 */
  opacity: 1;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
 
  width: 40px;
  height: 40px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 100%;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  
}


</style>

