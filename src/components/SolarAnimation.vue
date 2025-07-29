<template>
  <div class="w-[500px] h-[500px] rounded-full  relative mx-auto pb-16">
    <!-- Rotating Wrapper -->
    <div class="absolute inset-0 animate-spin-slow">
      <!-- Planet -->
      <div
        class="w-[50px] h-[50px] bg-orange-400 rounded-full absolute left-0 top-0 "
      ></div>

      <div class="absolute inset-30 animate-spin-fast ">
      <!-- Planet -->
      <div
        class="w-[50px] h-[50px] bg-orange-400 rounded-full absolute left-0 top-0"
      ></div>
    </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animation speed using Tailwind’s extend feature */
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}

@keyframes spin-fast {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-fast {
  animation: spin-fast 6s linear infinite;
}
</style>
