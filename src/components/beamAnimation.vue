<script setup>
import ContainerComponent from "~/components/ContainerComponent.vue";
</script>

<template>
  <div>
    <ContainerComponent>
      <div class="w-full h-auto py-20">
        <div class="flex h-auto items-center">
          <!--left-->
          <div class="flex flex-col w-full">
            <!--left_1-->
            <div class="flex w-full items-center gap-2">
              <div class=" translate-y-[-5px] sm:translate-y-[-20px] lg:translate-y-[-30px] xl:translate-y-[-50px] ">
                <img
                  src="../../assets/images/figma.png"
                  alt="figma"
                  class="w-16 sm:w-20 object-fit"
                />
              </div>
              <div class="flex w-full relative flex-col rotate-10">
                <div class="w-full h-[2px] bg-gray-100"></div>
                <div
                  class="w-5 sm:w-10 h-[2px] bg-linear-to-l from-blue-500 to-purple-500 animate-left"
                ></div>
              </div>
            </div>
            <!--left_2-->
            <div class="flex w-full items-center gap-2">
              <div class=" ">
                <img
                  src="../../assets/images/vue.png"
                  alt="vue"
                  class="w-16 sm:w-20 object-fit"
                />
              </div>
              <div class="flex w-full relative flex-col">
                <div class="w-full h-[2px] bg-gray-100"></div>
                <div
                  class="w-5 sm:w-10 h-[2px] bg-linear-to-l from-blue-500 to-purple-500 animate-left"
                ></div>
              </div>
            </div>
            <!--left_3-->
            <div class="flex w-full items-center gap-2">
              <div class=" translate-y-[5px] sm:translate-y-[20px] lg:translate-y-[30px]  xl:translate-y-[40px]">
                <img
                  src="../../assets/images/tailwind.png"
                  alt="vue"
                  class="w-16 sm:w-20 object-fit"
                />
              </div>
              <div class="flex w-full relative flex-col rotate-[-10deg]">
                <div class="w-full h-[2px] bg-gray-100"></div>
                <div
                  class="w-5 sm:w-10 h-[2px] bg-linear-to-l from-blue-500 to-purple-500 animate-left"
                ></div>
              </div>
            </div>
          </div>
          <!--end-->
          <div
            class="w-60 md:w-80 aspect-square items-center bg-white shadow-md flex items-cneter justify-center rounded-full z-1"
          >
            <img src="../../assets/images/logo.png" alt="logo" class="w-30" />
          </div>
          <!--right-->
          <div class="flex flex-col w-full">
            <!--right_1-->
            <div class="flex w-full items-center gap-2">
              <div class="flex w-full relative flex-col rotate-[-10deg]">
                <div class="w-full h-[2px] bg-gray-100"></div>
                <div
                  class="w-10 h-[2px] bg-linear-to-l from-blue-500 to-purple-500 animate-right"
                ></div>
              </div>
              <div class="translate-y-[-10px] sm:translate-y-[-20px] lg:translate-y-[-30px] xl:translate-y-[-50px]  ">
                <img
                  src="../../assets/images/react.png"
                  alt="react"
                  class="w-16 sm:w-20 object-fit"
                />
              </div>
            </div>
            <!--right_2-->
            <div class="flex w-full items-center gap-2">
              <div class="flex w-full relative flex-col">
                <div class="w-full h-[2px] bg-gray-100"></div>
                <div
                  class="w-10 h-[2px] bg-linear-to-l from-blue-500 to-purple-500 animate-right"
                ></div>
              </div>
              <div class="">
                <img
                  src="../../assets/images/nuxt.png"
                  alt="nuxt"
                  class="w-16 sm:w-20 object-fit"
                />
              </div>
            </div>
            <!--right_3-->
            <div class="flex w-full items-center gap-2">
              <div class="flex w-full relative flex-col rotate-10">
                <div class="w-full h-[2px] bg-gray-100"></div>
                <div
                  class="w-10 h-[2px] bg-linear-to-l from-blue-500 to-purple-500 animate-right"
                ></div>
              </div>
              <div class=" translate-y-[5px] sm:translate-y-[20px] lg:translate-y-[30px]  xl:translate-y-[40px]">
                <img
                  src="../../assets/images/laravel.png"
                  alt="laravel"
                  class="w-16 sm:w-20 object-fit"
                />
              </div>
            </div>
          </div>
          <!--end-->
        </div>
      </div>
     

    </ContainerComponent>
  </div>
</template>
<style scoped>
/* Beam gradient look */
@keyframes beam-left {
  0% {
    left: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

@keyframes beam-right {
  0% {
    right: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    right: 100%;
    opacity: 0;
  }
}

.animate-left {
  position: absolute;
  animation: beam-left 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.animate-right {
  position: absolute;
  animation: beam-right 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>
