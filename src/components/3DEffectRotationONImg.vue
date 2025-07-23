<!-- FloatingBox.vue -->
<template>
  <div
    ref="boxRef"
    class="w-64 h-64 bg-red-500 rounded-xl transition-transform duration-300 ease-out shadow-lg"
    @mousemove="handleMouseMove"
    @mouseleave="resetRotation"
  >
    <!-- Optional content inside the box -->
    <div class="flex items-center justify-center h-full text-white font-bold text-xl">
      Hover Me
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const boxRef = ref(null)

function handleMouseMove(e) {
  const el = boxRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -10
  const rotateY = ((x - centerX) / centerX) * 10

  el.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  el.style.transition = 'transform 0.1s ease-out'
}

function resetRotation() {
  const el = boxRef.value
  if (!el) return

  el.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)'
  el.style.transition = 'transform 0.3s ease-out'
}
</script>

<style scoped>
/* Optional: helps GPU acceleration and 3D effect */
div {
  transform-style: preserve-3d;
  will-change: transform;
}
</style>
