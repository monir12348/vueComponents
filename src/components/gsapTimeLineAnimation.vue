<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'

const entryRef = ref()
const container = ref()

onMounted(async () => {
  await nextTick()

  if (entryRef.value) {
    const entryText = entryRef.value.innerText
    entryRef.value.innerHTML = entryText
      .split("")
      .map(
        letter =>
          `<span style="display:inline-block; padding-left:10px; transform:translateY(100%);opacity:0;">
            ${letter === "" ? "&nbsp;" : letter}
          </span>`
      )
      .join("")

    const letters = entryRef.value.querySelectorAll("span")

    // GSAP Timeline
    const tl = gsap.timeline()

    // Step 1: Letter animation
    tl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.5
    })

    // Step 2: Scale animation (runs after letters finish)
    tl.to(container.value, {
      opacity: 0,
      scale: 10,
      duration: 10,
      ease: 'sine.inOut'
    })
  }
})
</script>

<template>
  <div
    class="w-full h-screen flex justify-center items-center bg-black"
    ref="container"
  >
    <div
      ref="entryRef"
      class="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-gilroy font-extrabold italic leading-base overflow-hidden text-brand-primary-1"
    >
      Dahuk Digital
    </div>
  </div>
</template>
