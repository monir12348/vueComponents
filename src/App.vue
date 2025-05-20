<!-- App.vue -->
<template>
  <div class="px-10 py-10">
    <h1 class="font-bold text-3xl">MIR MONIR</h1>
    
    <!-- Navigation links (optional) -->
    <nav class="flex gap-4 my-4">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <!-- Dynamic component rendered here based on route -->
    <router-view />
  </div>
</template>

<script setup>
</script>
