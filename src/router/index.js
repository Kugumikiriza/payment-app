import { createRouter, createWebHistory } from 'vue-router'

import PaymentDetails from '../components/PaymentDetails'
import QuantityInput from '../components/QuantityInput'
import PaymentReceived from '../components/PaymentReceived'


const routes = [
  { path: '/', name: 'payment-details', component: PaymentDetails },
  { path: '/quantity', name: 'quantity-input', component: QuantityInput },
  { path: '/payment-received', name: 'payment-received', component: PaymentReceived },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
