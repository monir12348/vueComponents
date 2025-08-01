<script setup>
import ContainerComponent from "./ContainerComponent.vue";
import { IconArrowNarrowDown } from "@tabler/icons-vue";
import { ref } from "vue";
const accordionData = [
  {
    id: 1,
    title: "lorem ipsum doller doller",
    description: [
      {
        id: 1,
        item: "lorem ipsuym doller",
      },
      {
        id: 2,
        item: "lorem ipsuym doller",
      },
      {
        id: 3,
        item: "lorem ipsuym doller",
      },
    ],
  },
  {
    id: 2,
    title: "lorem ipsum doller doller",
    description: [
      {
        id: 1,
        item: "lorem ipsuym doller",
      },
      {
        id: 2,
        item: "lorem ipsuym doller",
      },
      {
        id: 3,
        item: "lorem ipsuym doller",
      },
    ],
  },
];
const accordion = ref({});
const showAccordion = (id) => {
  accordion.value[id] = !accordion.value[id];
};
const beforeEnter = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
};

const enter = (el) => {
  const height = el.scrollHeight;
  el.style.transition = 'all 0.4s ease-in-out';
  el.style.height = height + 'px';
  el.style.opacity = '1';
  setTimeout(() => {
    el.style.height = 'auto';
  }, 400);
};

const leave = (el) => {
  const height = el.scrollHeight;
  el.style.height = height + 'px';
  el.offsetHeight; // force repaint
  el.style.transition = 'all 0.4s ease-in-out';
  el.style.height = '0';
  el.style.opacity = '0';
};

</script>

<template>
  <div>
    <ContainerComponent>
        <div class="flex flex-col" v-for="data in accordionData" :key="data.id">
      <div class="border-b py-8 border-gray-300">
        <div class="w-full flex justify-between items-center">
          <h3 class="text-xl font-semibold text-gray-700">
            {{ data.title }}
          </h3>
          <div
            class="px-2 py-2 rounded-full bg-gray-800 text-white cursor-pointer"
            @click="showAccordion(data.id)"
            :class="
              accordion[data.id]
                ? 'rotate-180 transition-all duration-300'
                : 'rotate-0 transition-all duration-300'
            "
          >
            <IconArrowNarrowDown stroke="2" size="20" />
          </div>
        </div>
        <Transition
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
>
  <section v-if="accordion[data.id]" class="">
    <ul class="text-gray-600 text-md w-full list-disc px-4">
      <li v-for="item in data.description" :key="item.id" class="pb-2">
        {{ item.item }}
      </li>
    </ul>
  </section>
</Transition>

      </div>
      </div>
    </ContainerComponent>
  </div>
</template>
