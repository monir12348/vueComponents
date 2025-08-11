<script setup>
import {onMounted,ref,nextTick} from 'vue'
import {gsap} from 'gsap'
const entryRef=ref()
onMounted( async()=>{
    await nextTick()
  if(entryRef.value){
    const entryText= entryRef.value.innerText
    entryRef.value.innerHTML=entryText.split("").map(letter=>`<span style="display:inline-block; padding-left:10px; transform:translateY(100%);opacity:0;">${letter===""?"&nbsp;" : letter}</span>`).join("")
  
    const letters = entryRef.value.querySelectorAll("span")
    gsap.to(letters,{
        opacity:1,
        y:0,
        duration:0.5,
        ease:'power2.inOut',
        stagger:0.5
    })
  }
})
</script>

<template>
    <div class="w-full h-screen
     flex justify-center items-center bg-black ">
   <div ref="entryRef"  class="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-gilroy font-extrabold italic leading-base overflow-hidden text-brand-primary-1">
  Dahuk Digital
   </div>
    </div>
</template>
