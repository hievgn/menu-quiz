<template>
  <h2 class="order-title h2-title">Your order</h2>
  <div v-if="!orderExists">
    <p class="order-desc">We're very sorry, but you didn't select anything.</p>
    <div class="question-buttons">
      <button class="question-button" @click="goToStart">Start again</button>
    </div>
  </div>
  <div v-else>
    <div v-if="order.hotDishes.length">
      <h3 class="order-summary-title h3-title">Hot dishes:</h3>
      <div class="orders-summary">
        <p class="order-summary" v-for="dish in order.hotDishes" :key="dish">{{ dish }} - ${{ prices.hotDishes[dish] }}</p>
      </div>
    </div>
    <div v-if="order.coldDishes.length">
      <h3 class="order-summary-title h3-title">Cold dishes:</h3>
      <div class="orders-summary">
        <p class="order-summary" v-for="dish in order.coldDishes" :key="dish">{{ dish }} - ${{ prices.coldDishes[dish] }}</p>
      </div>
    </div>
    <div v-if="order.desserts.length">
      <h3 class="order-summary-title h3-title">Desserts:</h3>
      <div class="orders-summary">
        <p class="order-summary" v-for="dessert in order.desserts" :key="dessert">{{ dessert }} - ${{ prices.desserts[dessert] }}</p>
      </div>
    </div>
    <div v-if="order.drinks.length">
      <h3 class="order-summary-title h3-title">Drinks:</h3>
      <div class="orders-summary">
        <p class="order-summary" v-for="drink in order.drinks" :key="drink">{{ drink }} - ${{ prices.drinks[drink] }}</p>
      </div>
    </div>
    <div class="order-total">
      <h3 class="order-total-title h3-title">Total: ${{ total }}</h3>
    </div>
    <div class="question-buttons">
      <button class="question-button" @click="$emit('prev')">Back</button>
      <button class="question-button" @click="$emit('confirm')">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['order', 'prices'],
  computed: {
    orderExists() {
      return Object.values(this.order).some(category => category.length > 0);
    },
    total() {
      let total = 0;
      for (let category in this.order) {
        for (let item of this.order[category]) {
          total += this.prices[category][item];
        }
      }
      return total;
    }
  },
  methods: {
    goToStart() {
      this.$emit('reset');
    }
  }
};
</script>
