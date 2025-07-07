<script setup>
import ContainerComponent from '../components/ContainerComponent.vue';
import { IconChevronRight } from '@tabler/icons-vue';
import { computed } from 'vue';
import {useRoute} from 'vue-router'
const route=useRoute()
const segments=computed(()=>{
const parts=route.path.replace(/^\//,"").split("/").filter(Boolean)
return parts.map((part)=>({
    text: part.replace(/-/g,"").replace(/\b\w/g, (l)=> l.toUpperCase())
}))
})
</script>
<template>
    <ContainerComponent>
        <div class="mt-4 flex gap-2 items-center">
            <div class="flex gap-2 items-center">
       <router-link to="/" class="text-sm text-gray-500 ">
       <span>Home</span>
        </router-link>
       <IconChevronRight 
       stroke='2'
       size="16"
       color="gray"
        />
        </div>
        <div v-for="(segment,index) in segments" :key="index">
            <span>{{ segment.text }}</span>
        </div>
        </div>
    </ContainerComponent>
</template>
