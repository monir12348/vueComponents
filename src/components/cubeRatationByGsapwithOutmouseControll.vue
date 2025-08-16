<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
onMounted(() => {
  const shape = document.getElementById("cube");
  gsap.to(shape, {
    rotationX: 360,
    rotationY: 360,
    ease: "none",
    duration: 8,
    repeat: -1,
  });
});
</script>
<template>
  <div class="h-screen w-full bg-white">
    <div
      class="relative cube w-[100px] h-[100px] border-2 mt-100 ml-100"
      id="cube"
    >
      <div
        class="w-[100px] h-[100px] front bg-red-500 absolute flex justify-center items-center text-white text-xl font-bold"
      >
        Front
      </div>
      <div
        class="w-[100px] h-[100px] back bg-red-500 absolute flex justify-center items-center text-white text-xl font-bold"
      >
        back
      </div>
      <div
        class="w-[100px] h-[100px] right bg-red-500 absolute flex justify-center items-center text-white text-xl font-bold"
      >
        right
      </div>
      <div
        class="w-[100px] h-[100px] left bg-red-500 absolute flex justify-center items-center text-white text-xl font-bold"
      >
        left
      </div>
      <div
        class="w-[100px] h-[100px] top bg-red-500 absolute flex justify-center items-center text-white text-xl font-bold"
      >
        top
      </div>
      <div
        class="w-[100px] h-[100px] bottom bg-red-500 absolute flex justify-center items-center text-white text-xl font-bold"
      >
        Bottom
      </div>
    </div>
  </div>
</template>
<style scoped>
.cube {
  transform-style: preserve-3d;
}
.front {
  transform: rotateY(0deg) translateZ(100px);
}
.back {
  transform: rotateY(180deg) translateZ(100px);
}
.right {
  transform: rotateY(90deg) translateZ(100px);
}
.left {
  transform: rotateY(-90deg) translateZ(100px);
}
.top {
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}
</style>
