<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';
import { useRouter } from 'vue-router';
import Nav from './components/Nav.vue';
const overlay=ref()
const router=useRouter()
router.beforeEach((to,from,next)=>{
  gsap.set(overlay.value,{left:'100%'})
  gsap.to(overlay.value,{
    left:'0%',
    duration:1,
    ease:'power1.inOut',
    onComplete:(()=>{
      next()
    })
  })
})

router.afterEach(()=>{
  gsap.to(overlay.value,{
    left:'-100%',
    duration:1,
    ease:'power1.inOut'
  })
})
</script>

<template>
  <div class="mt->">
  <Nav/>
  <div 
  ref="overlay"
  class="w-full h-full fixed top-0 bg-black z-[9999]">

  </div>
     <main>
    <RouterView />
  </main>
  </div>
</template>
<style scoped>

</style>
