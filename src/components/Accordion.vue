<script setup>
import {ref} from 'vue'
const text= ref(false)




const inputVal=()=>{
 if(inputValue===plus){
  inputValue=minus
 }

 else{
  inputValue= plus
 }
}

const textAc=()=>{
  if(text.value===false){
    text.value =true
  }
  else{
    text.value=false
  }
}



</script>

<template>
  <div class="flex flex-col gap-4 border-2 border-gray-400 rounded">

    <div class="flex gap-4">
      <p class="font-bold text-2xl">LOREM</p>
      <input type="button" value="+"  class="py-1 px-1 border text-[14px]" @click="textAc">
</div>

<div class="text-[16px] " v-if="text">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio alias, repellat ipsum libero aut quia corrupti, in, dicta nam doloribus voluptas iusto. Consectetur laborum officiis vitae dolor possimus laudantium.
  </p>
</div>

  </div>
</template>