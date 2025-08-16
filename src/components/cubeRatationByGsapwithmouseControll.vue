<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  const cube = document.getElementById("cube");

  // Auto rotation
  const autoRotate = gsap.to(cube, {
    rotationX: 360,
    rotationY: 360,
    ease: "none",
    duration: 10,
    repeat: -1,
    
  });

  // Pause auto rotate on hover
  cube.addEventListener("mouseenter", () => {
    autoRotate.pause();
  });

  // Mouse move control only inside cube
  cube.addEventListener("mousemove", (e) => {
    const rect = cube.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1

    const rotationX = y * 180;
    const rotationY = x * 180;

    gsap.to(cube, {
      rotationX,
      rotationY,
      duration: 5,
      ease: "power2.out",
    });
  });

  // Resume auto rotate when mouse leaves
  cube.addEventListener("mouseleave", () => {
    autoRotate.resume();
  });
});
</script>

<template>
  <div class="h-screen w-full bg-white flex justify-center items-center">
    <div class="relative cube w-[100px] h-[100px]" id="cube">
      <div class="face front bg-red-500">Front</div>
      <div class="face back bg-blue-500">Back</div>
      <div class="face right bg-green-500">Right</div>
      <div class="face left bg-black">Left</div>
      <div class="face top bg-white">Top</div>
      <div class="face bottom bg-purple-500">Bottom</div>
    </div>
  </div>
</template>

<style scoped>
.cube {
  transform-style: preserve-3d;
  position: relative;
  transform-origin: center;
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

/* Cube faces */
.front {
  transform: rotateY(0deg) translateZ(50px);
}
.back {
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}
</style>
