<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const modules = [EffectCoverflow, Pagination, Autoplay];
const images = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
];
//this is for mouseMoving dot-pattern animation
const bgPos = reactive({ x: 0, y: 0 });
const handleMouseMove = (e) => {
  // window width/height দিয়ে relative position বের করলাম
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  // background position control
  bgPos.x = x * 50; // adjust multiplier for speed
  bgPos.y = y * 50;
};

const bgStyle = computed(() => {
  return {
    backgroundColor: "#000000",
    backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 4px, transparent 1px)",
    backgroundSize: "100px 100px",
    backgroundPosition: `${bgPos.x}px ${bgPos.y}px`,
  };
});
</script>
<template>
  <div
    class="w-full h-[100vh] flex justify-center items-center mt-12 pt-12 animate-dots-wave"
 :style="bgStyle"
    @mousemove="handleMouseMove"
  >
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="4"
      :spaceBetween="10"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :coverflowEffect="{
        rotate: 0,
        stretch: 10,
        depth: 200,
        modifier: 2,
        slideShadows: true,
      }"
      :pagination="false"
      :modules="modules"
      class="mySwiper w-full max-w-[1320px]"
    >
      <swiper-slide v-for="(img, index) in images" :key="index">
        <img :src="img" class="w-[200px] h-[120px] object-cover rounded-xl" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<!-- <style>
 /* //this css animation for moving dot-grd pattern in infinite loop */
 @keyframes waveDots {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 20px -10px;
  }
  50% {
    background-position: 40px 0;
  }
  75% {
    background-position: 20px 10px;
  }
  100% {
    background-position: 0 0;
  }
}

.animate-dots-wave {
  animation: waveDots 10s ease-in-out infinite;
}
</style>    -->

