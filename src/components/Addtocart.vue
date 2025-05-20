<!-- AddToCart.vue -->
<script setup>
import { useProductStore } from '../assets/Product';
import { useRoute } from 'vue-router';
const route= useRoute()
const store = useProductStore();
</script>

<template>
  <div>
    <div v-for="ProductItem in store.products" :key="ProductItem.id">

      <router-link :to="`/product/${ProductItem.id}`">

      <p>{{ ProductItem.name }}</p>
      <img :src="ProductItem.image" alt="">
      <p>{{ ProductItem.rate }}</p>
      </router-link>
      <button @click="store.addToCart(ProductItem)">Add to cart</button>
    </div>

    <p>Total Items in Cart: {{ store.cartItemCount }}</p>
  </div>
</template>
