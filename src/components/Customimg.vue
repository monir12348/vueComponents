<script setup>
import { images } from '../assets/Data'
import { ref } from 'vue'

const img = ref(null)

const left = () => {
  if (img.value) {
    img.value.scrollLeft += 500
    img.value.style.scrollBehavior = 'smooth'
  }
}

const right = () => {
  if (img.value) {
    img.value.scrollLeft -= 500
    img.value.style.scrollBehavior = 'smooth'
  }
}
</script>

<template>
  <button
    @click="left"
    class="text-center font-medium px-2 py-2 text-[14px] bg-blue-600 rounded text-white"
  >
    Left
  </button>
  <button
    @click="right"
    class="text-center font-medium px-2 py-2 text-[14px] bg-blue-600 rounded text-white"
  >
    Right
  </button>

  <div class="flex flex-col gap-4 w-[400px] overflow-x-hidden">
    <!-- Attach the ref here -->
    <div class="flex gap-3 overflow-x-scroll hide-scrollbar" ref="img">
      <img :src="images.i1" alt="" class="w-[400px]" />
      <img :src="images.i2" alt="" class="w-[400px]" />
      <img :src="images.i4" alt="" class="w-[400px]" />
    </div>
  </div>
</template>

<style scoped>

.hide-scrollbar::-webkit-scrollbar {
  display: none;
} 
</style>