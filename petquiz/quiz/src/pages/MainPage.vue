<template>
  <div class="container">
    <h1>Welcome to our site</h1>
    <div class="form-container">
      <div class="form-content">
        <div class="form-section">
          <h1>We’re glad to have you!</h1>
          <form class="form" @submit.prevent="submitForm">
            <input v-model="name" type="text" placeholder="Enter name..." />
            <input
              v-model="surname"
              type="text"
              placeholder="Enter surname..."
            />
            <input
              v-model="password"
              type="password"
              placeholder="Enter password..."
            />
            <button type="submit">Next</button>
            <p>Already have an account? <b>Sign up</b></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const surname = ref("");
const password = ref("");

const submitForm = async () => {
  try {
    const response = await axios.post("http://localhost:9000/data", {
      name: name.value,
      surname: surname.value,
      password: password.value,
    });
    console.log("Response:", response.data);
  } catch (err) {
    console.error("Error submitting form:", err.response?.data || err.message);
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height for centering */
  flex-direction: column;
}
.container h1 {
  font-size: 30px;
}
.form-container {
  width: 800px;
  height: 600px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Center text inside .form-content */
}
.form-content h1 {
  font-size: 30px;
}
.form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form h1 {
  font-size: 25px;
  max-width: 350px;
  line-height: 30px;
  margin-bottom: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}
.form input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}
.form p {
  margin-top: 10px;
}
</style>
