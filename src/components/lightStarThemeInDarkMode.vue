<script setup>
import { ref, onMounted } from "vue";
const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const dots = [];
  const colors = ["#00ffcc", "#ff00aa", "#33ff33", "#ffaa00", "#00aaff"];
  const shapes = ["circle", "rect", "triangle", "star"];

  // generate random particles
  for (let i = 0; i < 100; i++) {
    dots.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.04 + 0.1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    });
  }

  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach((dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

      let dx = (mouse.x - canvas.width / 2) * 0.00001;
      let dy = (mouse.y - canvas.height / 2) * 0.00001;

      ctx.save();
      ctx.translate(dot.x + dx * dot.x, dot.y + dy * dot.y);
      ctx.fillStyle = `rgba(${hexToRgb(dot.color)}, ${dot.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = dot.color;

      drawShape(ctx, dot.shape, dot.r);
      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  function drawShape(ctx, shape, size) {
    ctx.beginPath();
    if (shape === "circle") {
      ctx.arc(0, 0, size, 0, Math.PI * 2);
    } else if (shape === "rect") {
      ctx.rect(-size, -size, size * 2, size * 2);
    } else if (shape === "triangle") {
      ctx.moveTo(0, -size);
      ctx.lineTo(size, size);
      ctx.lineTo(-size, size);
      ctx.closePath();
    } else if (shape === "star") {
      drawStar(ctx, 5, size, size / 2);
    }
    ctx.fill();
  }

  function drawStar(ctx, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let x = 0;
    let y = 0;
    let step = Math.PI / spikes;

    ctx.moveTo(0, -outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = Math.cos(rot) * outerRadius;
      y = Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = Math.cos(rot) * innerRadius;
      y = Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(0, -outerRadius);
    ctx.closePath();
  }

  function hexToRgb(hex) {
    const c = document.createElement("div");
    c.style.color = hex;
    document.body.appendChild(c);
    const rgb = getComputedStyle(c).color;
    document.body.removeChild(c);
    return rgb.match(/\d+/g).join(",");
  }
  animate();
});
</script>

<template>
  <div class="relative w-full h-full bg-black overflow-hidden font-inter">
    <!-- Background Canvas -->
     <canvas
      ref="canvasRef"
      class="fixed top-0 left-0 w-full h-full"
    >
     
  </canvas>
  <NuxtLayout>
   <NuxtPage />
   </NuxtLayout>
    <!-- All Pages (Nuxt routing) -->
  </div>
</template>
<style scoped>
body{
  background-color: black;
}
</style>
