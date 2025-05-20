<script setup>

import {ref} from 'vue'
const tab1= ref(false);
const tab2= ref(false);
const tab3=ref(false);

const t1=()=>{
    tab1.value=true
    tab2.value=false
    tab3.value=false
}

const t2=()=>{
    tab2.value=true
    tab1.value=false
    tab3.value=false
}

const t3=()=>{
    tab3.value=true
    tab1.value=false
    tab2.value=false
}

</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="flex gap-4">
            <input type="button" value="tab1" @click="t1">
            <input type="button" value="tab2" @click="t2">
            <input type="button" value="tab3" @click="t3">
        </div>

        <div class="flex gap-4">
 <div class="text-red-500"  v-if="tab1">Vue.js offers a great future for developers</div>
 <div class="text-blue-500" v-if="tab2">building scalable, high-performing applications quickly</div>
 <div class="text-green-500" v-if="tab3"> developers and client projects.</div>
 </div>

    </div>
</template>