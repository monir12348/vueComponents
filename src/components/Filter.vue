<script setup>
import { ref, computed } from 'vue'
import { dataCoffes } from '../assets/Data'


const dataInputs = ref([]) 
const searchInput = ref('') 


const categories = [...new Set(dataCoffes.map(coffee => coffee.category))]


const filteredData = computed(() => {
  let result = dataCoffes

  if (dataInputs.value.length > 0) {
    result = result.filter(coffee =>
      dataInputs.value.includes(coffee.category)
    )
  }

  if (searchInput.value) {
    result = result.filter(coffee =>
      coffee.name.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  }

  return result
})
</script>

<template>
  <input type="text" class="border" v-model="searchInput" placeholder="Search..." />

  <div class="flex gap-4 my-4">
    <label v-for="cat in categories" :key="cat">
      <input type="checkbox" :value="cat" v-model="dataInputs" />
      {{ cat }}
    </label>
  </div>

  <div v-if="filteredData.length > 0" class="grid gap-4">
    <div v-for="coffee in filteredData" :key="coffee.name">
      <p><strong>{{ coffee.name }}</strong></p>
      <p>{{ coffee.category }}</p>
    </div>
  </div>
  <p v-else>No results found.</p>
</template>
