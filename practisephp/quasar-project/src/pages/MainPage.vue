<template>
  <div class="body">
    <div class="main-container">
      <h1>Register</h1>
      <form class="main-form" @submit.prevent="submitForm">
        <input v-model="name" type="text" placeholder="Name" />
        <input v-model="surname" type="text" placeholder="Surname" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Submit</button>
        <div class="info">
          <p>If you have already an account?</p>
          <b @click="loginData">Sign in</b>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const name = ref("");
const surname = ref("");
const password = ref("");

const router = useRouter();

const loginData = () => {
  router.push("/login");
}

const submitForm = async () => {
  if (!name.value || !surname.value || !password.value) {
    alert('Write something for the input please!');
    return;
  }

  try {
    // Send the POST request if all inputs are filled
    const response = await axios.post("http://localhost:7000/submit", {
      name: name.value,
      surname: surname.value,
      password: password.value,
    });
    console.log(response.data);
    // Navigate to UserPage with the user's name and surname
    router.push({ path: '/user', query: { name: name.value, surname: surname.value } });
  } catch (error) {
    console.error("There was a problem with the axios request:", error);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  background-color:  #4255FF;
  width: 100%;
  height: 100vh;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.main-container h1 {
  text-align: center;
  padding: 45px 0;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}
.main-form {
  background-color: white;
  width: 800px;
  padding: 100px 130px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-form input {
  background-color: white;
  color: black;
  border: 1px solid grey;
  padding: 15px 20px;
  margin: 15px 0;
  border-radius: 10px;
  width: 100%;
  font-size: 17px;
}
.main-form button {
  background-color:  #4255FF;
  border: none;
  color: white;
  padding: 15px 20px;
  margin: 15px 0;
  border-radius: 10px;
  width: 100%;
  font-size: 17px;
}
.info {
  display: flex;
  gap: 5px;
  justify-content: center;
}
.info b {
  color:  #4255FF;
  cursor: pointer;
}
</style>
