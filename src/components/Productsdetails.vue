<!-- ProductDetails.vue -->
<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../assets/Product';

const route = useRoute();
const store = useProductStore();

const productId = route.params.id;


const product = store.products.find(p => p.id.toString() === productId);
</script>

<template>

    <div>
        <router-link to="/">home</router-link>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" alt="">
    <p>Price: {{ product.rate }}</p>
    <button @click="store.addToCart(product)">Add to Cart</button>
  </div>

  <div v-else>
    <p>Product not found.</p>
  </div>
  </div>
</template>















