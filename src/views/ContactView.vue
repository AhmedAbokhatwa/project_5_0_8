<template>
  <div>
    <h1>Customer List</h1>
    <div v-if="error" style="color: red;">
      {{ error }}
    </div>
    <ul v-if="!error">
      <li v-for="customer in customers" :key="customer.name">
        {{ customer.name }}
      </li>
      <li v-for="customer in customers" :key="customer.name">
        {{ customer.customer_name }}
      </li>
      <li v-for="customer in customers" :key="customer.name">
        {{ customer.customer_group }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      customers: [],
      customers_data: [],
      error: null,
    };
  },
  mounted() {
    this.fetchCustomers();
  },
  methods: {
    async fetchCustomers() {
  try {
    const result = await axios.get(`http://192.168.8.5:8000/api/resource/Customer`, {
      headers: {
        'Authorization': 'token 4750088bc39cd38:2be5cf5909b8dd6',
      },
    });

    // const allCustomers = result.data.data; // Array of customers

    // Loop through each customer to fetch additional data
    this.customers_data = result.data.data;
    for (let customerId of this.customers_data ) {
      const detailedCustomer = await axios.get(`http://192.168.8.5:8000/api/resource/Customer/${customerId.name}`, {
        headers: {
          'Authorization': 'token 4750088bc39cd38:2be5cf5909b8dd6',
        },
      });
      console.log('Detailed customers_data:', (detailedCustomer.data.data.customer_group));
      // // Push detailed customer data to the array
      this.customers.push(detailedCustomer.data.data);
    }

    // console.log('Detailed Customers:', this.customers);
  } catch (error) {
    this.error = 'Error fetching customer data: ' + error.message;
    console.error('Error fetching customer data:', error);
  }
}

  },
};
</script>
