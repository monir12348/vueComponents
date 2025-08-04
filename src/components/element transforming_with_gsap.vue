<script setup>
  import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // টার্গেট ইমেজ এলিমেন্ট
  const shape = document.querySelector('.animate-shape')

  // floating animation
  gsap.to(shape, {
    y: '+=20',          // উপরে নিচে যাবে
    x: '+=10',          // সামান্য ডান-বামে যাবে
    rotation: '+=5',    // হালকা ঘুরবে
    duration: 3,        // এক সাইকেলের সময়
    ease: 'sine.inOut', // smooth effect
    repeat: -1,         // infinite loop
    yoyo: true,         // উল্টোদিকে ফিরবে
    delay: 0.2,         // সামান্য delay
    stagger: {
      each: 0.3,        // একাধিক হলে stagger effect
    }
  })

  // rotation এর সাথে আরও variation চাইলে:
  gsap.to(shape, {
    rotation: '+=10',
    duration: 5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  })
})
</script>
<template>
   <img src="example.png" alt="shape" animate-shape ">
</template>
<style>
  .animate-shape {
  will-change: transform;
}
</style>
