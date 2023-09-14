<template>
    <div class="container">
        <div class="navbar">
        <nav></nav>
       </div>
       <br>
       <h2>Payment Link</h2>
      <hr/>

      <h3>Link Details</h3>
      
      <p>MYBOB WORKSHOP</p>

      <P>Our best workshop to unlock your potential.........</P>

      <div>
        <label for="quantity">Quantity:</label>
        <input type="number" v-model="quantity" />
        <p><b>Total Amount:</b> {{ totalAmount }} UGX</p>
        <div v-if="quantity > 20" class="error">Quantity cannot be greater than 20.</div>
      </div>
      <button class="Payment-btn" @click="proceedToPayment" :disabled="quantity > 20">Proceed to Payment</button>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        quantity: 1,
        unitPrice: 85000,
    };
  },
  computed: {
    totalAmount() {
      return this.quantity * this.unitPrice;
    },
  },
    methods: {
      proceedToPayment() {
        const totalAmount = this.quantity * this.unitAmount;
        if (this.quantity <= 20) {
          this.$router.push({ name: 'payment-received',
          query: { totalAmount },
      });
        }
      },
    },
  };
  </script>
  