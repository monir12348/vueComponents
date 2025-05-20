<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1') // default active tab

const t1 = () => {
  activeTab.value = 'tab1'
}

const t2 = () => {
  activeTab.value = 'tab2'
}

const t3 = () => {
  activeTab.value = 'tab3'
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Tab Buttons -->
    <div class="flex gap-4 items-end">
      <div class="flex flex-col items-center">
        <input type="button" value="Tab 1" @click="t1" />
        <hr class="h-[2px] w-full bg-blue-700" :class="activeTab === 'tab1' ? 'block' : 'hidden'" />
      </div>

      <div class="flex flex-col items-center">
        <input type="button" value="Tab 2" @click="t2" />
        <hr class="h-[2px] w-full bg-blue-700" :class="activeTab === 'tab2' ? 'block' : 'hidden'" />
      </div>

      <div class="flex flex-col items-center">
        <input type="button" value="Tab 3" @click="t3" />
        <hr class="h-[2px] w-full bg-blue-700" :class="activeTab === 'tab3' ? 'block' : 'hidden'" />
      </div>
    </div>

    <!-- Tab Content -->
    <div>
      <div class="text-red-500" v-if="activeTab === 'tab1'">
        Vue.js offers a great future for developers
      </div>
      <div class="text-blue-500" v-if="activeTab === 'tab2'">
        Building scalable, high-performing applications quickly
      </div>
      <div class="text-green-500" v-if="activeTab === 'tab3'">
        Developers and client projects.
      </div>
    </div>
  </div>
</template>
