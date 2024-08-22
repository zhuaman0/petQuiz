<template>
  <div class="body">
    <header>
      <div class="logo">
        Quiz
      </div>
      <div class="main-center">
        <div class="main-title">
          <h1>Главная</h1>
          <h1>Ваша история</h1>
        </div>
        <div class="search">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/light-e-treasure-3/search-286.png" alt="">
          <input type="search" placeholder="Поиск вопроса...">
        </div>
      </div>
      <div class="icons">
        <div  @click="createTest" class="icons-plus">
          <h1>+</h1>
        </div>
        <div class="black-white"></div>
        <img src="https://cdn.countryflags.com/thumbs/russia/flag-round-250.png" alt="">
        <img @click="sendUserPage" src="https://www.shareicon.net/data/2016/05/24/770136_man_512x512.png" alt="">
        <div @click="quizPage" class="unknown"></div>
      </div>
    </header>
    <div v-if="creatTes" class="createQuiz">
      <h2>Create Quiz</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const creatTes = ref(false);

const sendUserPage = () => {
  router.push("/user");
};

const createTest = () => {
  creatTes.value = !creatTes.value;
};
const quizPage = () => {
  router.push('/scratch')
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  background-color: #F7F7F7;
  width: 100%;
  height: 100vh;
}
header {
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
.main-title h1 {
  font-size: 20px;
}
.main-title {
  display: flex;
  gap: 40px;
}
.logo {
  color: #4255FF;
  font-weight: bold;
  font-size: 45px;
}
.search {
  position: relative;
  display: flex;
  align-items: center;
}
.search img {
  position: absolute;
  left: 12px;
  width: 25px;
  height: 25px;
}
.search input {
  background-color: #EDEDED;
  color: black;
  border: none;
  height: 40px;
  width: 450px;
  border-radius: 25px;
  padding: 0 45px;
  display: flex;
  align-items: center;
}
.search input::placeholder {
  font-size: 16px;
}
.icons {
  display: flex;
  align-items: center;
  gap: 40px;
}
.icons img {
  width: 35px;
  height: 35px;
}
.main-center {
  display: flex;
  align-items: center;
  gap: 40px;
}
.black-white {
  background-color: black;
  width: 35px;
  height: 35px;
  border-radius: 150px;
}
.icons-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #4255FF;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.icons-plus h1 {
  margin: 0;
  font-size: 20px;
}
.unknown {
  background-color: #EDEDED;
  border-radius: 30px;
  border: none;
  width: 80px;
  height: 35px;
}
.createQuiz {
  background-color: #4255FF;
  height: 70vh;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  top: 20px;
  border-radius: 10px;
  color: white;
}
</style>
