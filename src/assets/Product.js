
import i1 from './i1.png'



// Product.js



import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'mango', image:[i1], rate: 10 },
      { id: 2, name: 'banana', rate: 20 },
      { id: 3, name: 'jack-fruit', rate: 30 }, 
    ],
    cart: []
  }),

  getters: {
    cartItemCount: (state) =>
      state.cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: (state) =>
      state.cart.reduce((sum, item) => sum + item.rate * item.quantity, 0)
  },

  actions: {
    addToCart(product) {
      const existing = this.cart.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    increment(id) {
      const item = this.cart.find((p) => p.id === id);
      if (item) item.quantity++;
    },

    decrement(id) {
      const item = this.cart.find((p) => p.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeCart(id);
      }
    },

    removeCart(id) {
      this.cart = this.cart.filter((p) => p.id !== id);
    },

    clearCart() {
      this.cart = [];
    }
  }
});

































































 /* export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Apple', price: 5 },
      { id: 2, name: 'Banana', price: 3 },
      { id: 3, name: 'Mango', price: 8 }
    ],
    cart: []
  }),

  getters: {
    cartItemCount: (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: (state) => state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  actions: {
    addToCart(product) {
      const existing = this.cart.find(p => p.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    increment(id) {
      const item = this.cart.find(p => p.id === id)
      if (item) item.quantity++
    },
    decrement(id) {
      const item = this.cart.find(p => p.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(id)
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(p => p.id !== id)
    },
    clearCart() {
      this.cart = []
    }
  },

  // ✅ Add this line to persist the cart in localStorage
  persist: true
})*/
