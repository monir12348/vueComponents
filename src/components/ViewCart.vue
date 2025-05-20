<!-- CartView.vue -->
<script setup>
import { useProductStore } from '../assets/Product';
const store = useProductStore();

function increment(id) {
  store.increment(id);
}

function decrement(id) {
  store.decrement(id);
}
</script>

<template>
  <div>
    <div v-for="item in store.cart" :key="item.id">
        <img :src="item.image" alt="">
      <p>{{ item.name }}</p>
      <p>{{ item.rate }}</p>
      
      <p @click="increment(item.id)">+</p>
      <p>{{ item.quantity }}</p>
      <p @click="decrement(item.id)">-</p>
    </div>

    <p>Total Price: {{ store.cartTotal }}</p>
  </div>
</template>
