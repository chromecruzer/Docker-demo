<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const apiMessage = ref('');

const submitForm = async () => {
  try {
    // Make a GET request to the API with the name as a query parameter
    const response = await axios.get('http://localhost:3000/', {
      params: {
        name: name.value
      }
    });
    // Concatenate the entered name with the API message
    apiMessage.value = `Hello ${name.value}, ${response.data.message}`;
  } catch (error) {
    // Log any errors to the console
    console.error('Error fetching API message:', error);
  }
}
</script>

<template>
  <div>
   
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name">
      <button type="submit">Submit</button>
    </form>
    <!-- Display the entered name and the API message -->
    <br>
    <li class="msg-text">{{ apiMessage }}</li>
  </div>
</template>

<style scoped>
/* Add your scoped styles here */
.msg-text {
  background-color: #010c1d;
  /* Background color */
  padding: 10px;
  /* Padding */
  border-radius: 5px;
  /* Rounded corners */
  margin-top: 10px;
  /* Top margin */
  list-style: none;
  /* Remove bullet point */
}</style>
