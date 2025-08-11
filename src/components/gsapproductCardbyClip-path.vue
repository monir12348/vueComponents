<script setup>
import { onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContainerComponent from '~/components/ContainerComponent.vue';
import productCard from '../../assets/images/heroImg.png';

const cardData = [
    { id: 1, Title: "card1", img: productCard },
    { id: 2, Title: "card2", img: productCard },
    { id: 3, Title: "card3", img: productCard },
    { id: 4, Title: "card4", img: productCard },
    { id: 5, Title: "card5", img: productCard },
];
onMounted(async () => {
  await nextTick();
gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".image").forEach((img) => {
    gsap.fromTo(
      img,
      { clipPath: "inset(0% 100% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration:2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          scrub:2, // যখন ইমেজ viewport এর 80% নিচে আসবে
          
        }
      }
    );
  });
});
</script>

<template>
  <ContainerComponent>
    <div class="bg-white w-full h-auto">
      <div v-for="item in cardData" :key="item.id">
        <div class="pt-12 border-b border-amber-200 w-full flex flex-row">
          <div class="basis-[50%] text-5xl font-bold text-gray-700 self-center">
            {{ item.Title }}
          </div>
          <div
            class="basis-[50%] h-70 image"
            :style="{ 
              backgroundImage: `url(${item.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
          ></div>
        </div>
      </div>
    </div>
  </ContainerComponent>
</template>
