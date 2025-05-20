<script setup>
import {ref} from 'vue'

const showModal= ref(false)
const openModal=()=>{
showModal.value =true
}

const closeModal=()=>{
    showModal.value=false
}

</script>

<template >

<button  @click="openModal" class="px-2 py-2 bg-gray-200">Modal</button>

<div  v-if="showModal">

    <p>lorem ipsum doller doller doller</p>
<button @click="closeModal" class="px-2 py-2 bg-gray-200">ModalOpen</button>
</div>
</template>