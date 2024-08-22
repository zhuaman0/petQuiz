<template>
  <div class="body">
    <div class="login-container">
    <h1>Login</h1>
    <form class="main-form" action="">
      <input v-model="name" type="text" placeholder="Name">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="loginData" type="submit">Login</button>
    <div class="info">
      <p>Don't have an account?</p>
      <b @click="navigateLogin">Sign up?</b>
      <button @click="nextPage">SendMainPage</button>
    </div>
    </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref("");
const password = ref("");
const router = useRouter();

const loginData = async () => {
  try {
    const response = await axios.post('http://localhost:7000/login', {
      name: name.value,
      password: password.value
    });

    if (response.data.success) {
      const user = response.data.user;
      router.push({ path: '/user', query: { id: user.id, name: user.name, surname: user.surname } });
    } else {
      alert(response.data.message || 'Invalid username or password');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('An error occurred during login');
  }
};

const navigateLogin = () => {
  router.push("/")
}
const nextPage = () => {
  router.push('user')
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  background-color:  #4255FF;
  widows: 100%;
  height: 100vh;
}
.login-container h1{
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
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 100px 130px;
  border-radius: 5px;
}
.info {
  display: flex;
  gap: 5px;
  justify-content: center;
}
.main-form input {
  background-color: white;
  color: black;
  border: 1px solid grey;
  padding: 15px 20px;
  margin: 15px 0;
  border-radius: 10px;
}
.main-form input::placeholder {
  font-size: 17px;
}
.main-form button {
  background-color:  #4255FF;
  border: none;
  color: white;
  padding: 15px 20px;
  margin: 15px 0;
  border-radius: 10px;
}
.main-form b {
  color:  #4255FF;
}
</style>
