<script setup>
  //this is product_details page used libraries are vue-3 carousel, vue-3 zommer
import { Magnifier } from "vue3-zoomer";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import ContainerComponent from "../components/ContainerComponent.vue";
import img_1 from "../assets/keyboard1.png";
import img_2 from "../assets/keyboard2.png";
import img_3 from "../assets/keyboard3.png";
const images = [
  {
    id: 1,
    img: img_1,
  },
  {
    id: 2,
    img: img_2,
  },
  {
    id: 3,
    img: img_3,
  },
];
</script>

<template>
  <ContainerComponent>
    <div class="grid grid-cols-12 gap-4 mt-12">
      <!--image content-->
      <div class="col-span-12 lg:col-span-6 w-full h-180 ">
        <Carousel
          :items-to-show="1"
          :wrap-around="true"
          :autoplay="false"
          :mouse-drag="true"
          :pause-autoplay-on-hover="true"
          class="relative overflow-hidden"
        >
          <Slide v-for="(img, index) in images" :key="index">
            <Magnifier
              :src="img.img"
              :zoom-scale="3"
              :size="250"
              class="w-full h-180 object-cover"
            />
            <div
              class="flex flex-col gap-2 text-center items-start absolute left-3 top-3 z-50"
            >
              <div class="bg-sky-500 text-sm  py-2 px-2">
                <span>Best Seller</span>
              </div>
              <div class="border border-sky-500 text-sm font-medium py-2 px-2">
                <span>New</span>
              </div>
              <div
                class="bg-green-600 text-sm text-white font-medium py-2 px-2"
              >
                <span>50%</span>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <!--contentList-->
      <div class="col-span-12 lg:col-span-6 w-full">
         <p class="text-3xl leading-base">Ajazz AK820 MAX Plus Tri-Mode Mechanical Keyboard</p>
      </div>
    </div>
  </ContainerComponent>
</template>
