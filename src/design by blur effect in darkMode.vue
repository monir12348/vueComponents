<script setup>
import ContainerComponent from "./ContainerComponent.vue";
</script>

<template>
  <div class="relative pb-180">
    <div
      class="w-50 h-50 md:w-80 md:h-80 lg:w-120 lg:h-120 bg-purple-500/20 blur-[50px] md:blur-[100px] lg:blur-[200px] absolute top--0 right-0 rounded-full"
    ></div>
    <ContainerComponent class="">
      <div
        class="pt-10 lg:pt-36 text-center flex flex-col items-center justify-center"
      >
        <p
          class="text-3xl sm:text-5xl lg:text-8xl font-medium text-center leading-base text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"
        >
          Magic UI is the new way to build landing pages.
        </p>
        <p
          class="mt-6 text-center px-0 pb-2 lg:px-40 font-medium text-lg lg:text-2xl text-gray-400"
        >
          Beautifully designed, animated components and templates built with
          Tailwind CSS, React, and Framer Motion.
        </p>
        <div
          class="px-3 py-2 mb-6 lg:mb-16 text-gray-900 capitalize font-medium text-sm md:text-lg lg:text-xl bg-white rouded mt-10 rounded cursor-pointer"
        >
          <span> Get Started For free</span>
        </div>
      </div>
      <!--blurEffect-->
      <div
        class="flex flex-col mt-10 lg:mt-16 items-center justify-center relative"
      >
        <div
          class="h-50 lg:h-100 w-full lg:w-240 absolute top-1 bg-amber-400/20 blur-3xl"
        ></div>
        <div
          class="absolute top-1 px-1 py-1 rounded-xl bg-gradient-to-t from-black/100 to-white/10 mx-0 lg:mx-10"
        >
          <img src="../assets/dashboard.png" alt="" class="w-full lg:w-220" />
          <div
            class="h-80 w-80 hidden lg:block absolute left-70 bottom-40 rounded-full bg-purple-400/20 blur-3xl"
          ></div>
          <!--bottom fadeEffect-->
          <div
            class="pointer-events-none rounded-xl absolute bottom-0 left-0 w-full h-30 sm:h-60 lg:h-100 bg-gradient-to-t from-black to-transparent z-10"
          ></div>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>
