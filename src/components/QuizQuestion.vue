<template>
  <div class="question" v-if="step === 1">
    <h2 class="question-title h2-title">Are you ready to place an order?</h2>
    <p class="question-desc">Choose the dishes you want, and our waiter will assist you.</p>
    <div class="question-buttons">
      <button class="question-button" @click="nextStep">Make an Order</button>
    </div>
  </div>
  <div class="question" v-else-if="step === 2">
    <h2 class="question-title h2-title">Select the hot dish you would like to order</h2>
    <div class="question-checkboxes">
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.hotDishes" value="Pasta"> Pasta - $5</label>
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.hotDishes" value="Pizza"> Pizza - $8</label>
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.hotDishes" value="Steak"> Steak - $12</label>
    </div>
    <div class="question-buttons">
      <button class="question-button" @click="prevStep">Back</button>
      <button class="question-button" @click="nextStep">Next</button>
    </div>
  </div>
  <div class="question" v-else-if="step === 3">
    <h2 class="question-title h2-title">Select the cold dish you would like to order</h2>
    <div class="question-checkboxes">
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.coldDishes" value="Salad"> Salad - $3</label>
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.coldDishes" value="Sushi"> Sushi - $7</label>
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.coldDishes" value="Carpaccio"> Carpaccio - $10</label>
    </div>
    <div class="question-buttons">
      <button class="question-button" @click="prevStep">Back</button>
      <button class="question-button" @click="nextStep">Next</button>
    </div>
  </div>
  <div class="question" v-else-if="step === 4">
    <h2 class="question-title h2-title">Select the dessert you would like to order</h2>
    <div class="question-checkboxes">
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.desserts" value="Tiramisu"> Tiramisu - $4</label>
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.desserts" value="Ice cream"> Ice cream - $3</label>
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.desserts" value="Cheesecake"> Cheesecake - $5</label>
    </div>
    <div class="question-buttons">
      <button class="question-button" @click="prevStep">Back</button>
      <button class="question-button" @click="nextStep">Next</button>
    </div>
  </div>
  <div class="question" v-else-if="step === 5">
    <h2 class="question-title h2-title">Select the drink you wish to order</h2>
    <div class="question-checkboxes">
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.drinks" value="Tea"> Tea - $2</label>
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.drinks" value="Coffee"> Coffee - $3</label>
      <label class="question-label"><input class="question-checkbox" type="checkbox" v-model="order.drinks" value="Juice"> Juice - $4</label>
    </div>
    <div class="question-buttons">
      <button class="question-button" @click="prevStep">Back</button>
      <button class="question-button" @click="showSummary">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['order'],
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    nextStep() {
      this.step += 1;
      this.$emit('next');
    },
    prevStep() {
      this.step -= 1;
      this.$emit('prev');
    },
    showSummary() {
      this.$emit('summary', this.order);
    },
  },
};
</script>
