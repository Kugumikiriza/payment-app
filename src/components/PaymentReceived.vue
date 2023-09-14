  <template>
    <div class="container">
      <div class="navbar">
        <nav></nav>
      </div>
      <div class="phone-content">
        <h1>Payment Received</h1>
        <p>Order Details</p>
        <div class="payment-info">
          <p><b>Date of purchase:</b>{{ paymentDate }}</p>
          <p><b>Unit Amount:</b>{{ unitAmount }} UGX</p>
          <p><b>Total Amount:</b>{{ totalAmount }} UGX</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentDate: new Date().toLocaleDateString(),
        unitAmount: this.$route.params.totalAmount || 85000,
        totalAmount: this.$route.params.totalAmount || 137000,
      };
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  
  