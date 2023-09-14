<template>
    <div class="container">

       <div class="navbar">
        <nav></nav>
       </div>
      <h2>Payment Link</h2>
      <hr/>

      <h3>Link Details</h3>
      
      <p>MYBOB WORKSHOP</p>

      <P>Our best workshop to unlock your potential.........</P>


      <div class="Quantity-box">
        <label for="quantity"><b>Quantity:</b></label>
        <button @click="decreaseQuantity" >-</button>
        <input type="number" v-model="quantity" />
        <button @click="increaseQuantity" >+</button>
        <p><b>Total Amount:</b> {{ totalAmount }} UGX</p>

      </div>
      <button @click="proceedToPayment" class="Payment-btn">Proceed to Payment</button>
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
      increaseQuantity() {
        this.quantity++;
      },
      decreaseQuantity() {
        if (this.quantity > 1) {
          this.quantity--;
        }
      },
      proceedToPayment() {
        this.$router.push({ name: 'quantity-input',params: { totalAmount: this.totalAmount } });
      },
    },
  };
  </script>
  
  