<template>
    <div class="quiz-container" id="quiz-container">
      <component 
        :is="currentComponent" 
        @next="nextQuestion" 
        @prev="prevQuestion" 
        @summary="showSummary" 
        @reset="resetQuiz" 
        @confirm="confirmOrder" 
        :order="order"
        :prices="prices"
        ref="quiz"
      />
    </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue';
import Summary from './Summary.vue';
import Confirmation from './Confirmation.vue';

export default {
  components: {
    QuizQuestion,
    Summary,
    Confirmation,
  },
  data() {
    return {
      currentComponent: 'QuizQuestion',
      order: {
        hotDishes: [],
        coldDishes: [],
        desserts: [],
        drinks: [],
      },
      prices: {
        hotDishes: {
          Pasta: 5,
          Pizza: 8,
          Steak: 12,
        },
        coldDishes: {
          Salad: 3,
          Sushi: 7,
          Carpaccio: 10,
        },
        desserts: {
          Tiramisu: 4,
          'Ice cream': 3,
          Cheesecake: 5,
        },
        drinks: {
          Tea: 2,
          Coffee: 3,
          Juice: 4,
        },
      },
      step: 1,
    };
  },
  methods: {
    nextQuestion() {
      this.step++;
    },
    prevQuestion() {
      if (this.step > 1) this.step--;
    },
    showSummary(data) {
      Object.assign(this.order, data);
      this.currentComponent = 'Summary';
    },
    confirmOrder() {
      const orderExists = Object.values(this.order).some(category => category.length > 0);
      if (!orderExists) {
        this.resetQuiz();
      } else {
        this.currentComponent = 'Confirmation';
        this.step = 6;
      }
    },
    resetQuiz() {
      this.step = 1;
      this.currentComponent = 'QuizQuestion';
      this.order = {
        hotDishes: [],
        coldDishes: [],
        desserts: [],
        drinks: [],
      };
    },
  },
};
</script>
