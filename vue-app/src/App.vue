<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const toast = useToast();
const name = ref('');
const apiMessage = ref('');

// Function to get the current date, day of the week, and year
const getCurrentDateTime = () => {
  const options = {
    weekday: 'long', // Full name of the day of the week
    year: 'numeric', // Full numeric representation of the year
    month: 'long', // Full name of the month
    day: 'numeric' // Numeric representation of the day
  };

  // Get the current date, day of the week, and year formatted according to the user's locale
  return new Date().toLocaleString(undefined, options);
};

// Function to check API connection
const checkAPIConnection = async () => {
  try {
    await axios.get('http://localhost:3000/');
    toast.success("Connected to the Server");
  } catch (error) {
    console.error('Error connecting to API:', error);
    toast.error("Failed to connect to the Server"); 
  }
};

// Call the function to check API connection when the component is mounted
onMounted(() => {
  checkAPIConnection();
});

// Function to submit the form
const submitForm = async () => {
  try {
    const response = await axios.get('http://localhost:3000/', {
      params: { name: name.value }
    });
    apiMessage.value = `Hello ${name.value}, ${response.data.message}`;
    toast.success("Submitted successfully");
    name.value = ''; // Clear the input field
  } catch (error) {
    console.error('Error fetching API message:', error);
    toast.error("Failed to submit");
  }
};

// Reference to store the current date, day of the week, and year
const currentDateTime = ref(getCurrentDateTime());

// Function to get the user's current region
const getUserRegion = () => {
  return navigator.language; // Returns the language tag representing the user's locale
};

// Reference to store the user's current region
const userRegion = ref(getUserRegion());
</script>


<template>
  <div>
    <div>
    <p>{{ currentDateTime }}</p> 
     <!-- <i>{{ userRegion }}</i> -->
    <hr>
  </div>
  
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Enter your name">
      <button type="submit">Submit</button>
    </form>
    <br>
    <li class="msg-text">{{ apiMessage }}</li>
  </div>
</template>

<style scoped>
.msg-text {
  background-color: #010c1d;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  list-style: none;
}
</style>
