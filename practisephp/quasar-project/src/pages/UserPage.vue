<template>
  <div class="user-page">
    <header>
      <div class="logo">
        Quiz
      </div>
      <div class="main-center">
        <div class="main-title">
          <h1>Profile</h1>
        </div>
      </div>
      <div class="icons">
        <img @click="sendPage" src="https://www.shareicon.net/data/2016/05/24/770136_man_512x512.png" alt="Profile Icon">
      </div>
    </header>

    <div class="profile-content">
      <div class="user-info">
        <h2>Hello, {{ name }} {{ surname }}!</h2>
      </div>
      <div class="answers-section">
        <h3>Your Answers:</h3>
        <ul>
          <li v-for="answer in answers" :key="answer.id" class="answer-item">
            {{ answer.answer }}
          </li>
        </ul>
      </div>
      <div class="input-section">
        <input v-model="newAnswer" type="text" placeholder="Your answer" />
        <button @click="saveAnswer" class="save-button">Save Answer</button>
        <button @click="sendPage" class="main-page-button">Go to Main Page</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const name = ref(route.query.name);
const surname = ref(route.query.surname);
const userId = route.query.id;
const answers = ref([]);
const newAnswer = ref('');
const router = useRouter();

const sendPage = () => {
  router.push("/main");
}

const fetchAnswers = async () => {
  try {
    const response = await axios.get(`http://localhost:7000/answers/${userId}`);
    answers.value = response.data;
  } catch (error) {
    console.error('Error fetching answers:', error);
  }
};

const saveAnswer = async () => {
  if (!newAnswer.value) {
    alert('Please write an answer!');
    return;
  }

  try {
    const response = await axios.post('http://localhost:7000/save-answer', {
      userId: userId,
      answer: newAnswer.value
    });
    console.log(response.data);
    fetchAnswers(); // Refresh the answers list
    newAnswer.value = ''; // Clear the input field
  } catch (error) {
    console.error('Error saving answer:', error);
  }
};

onMounted(() => {
  fetchAnswers();
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.user-page {
  background-color: #F7F7F7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}

.logo {
  color: #4255FF;
  font-weight: bold;
  font-size: 45px;
}

.main-center {
  display: flex;
  align-items: center;
}

.main-title h1 {
  font-size: 20px;
}

.icons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icons img {
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.profile-content {
  padding: 20px;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
}

.user-info {
  margin-bottom: 20px;
}

.user-info h2 {
  color: #4255FF;
  font-size: 24px;
}

.answers-section {
  margin-bottom: 20px;
}

.answers-section h3 {
  color: #333;
}

.answers-section ul {
  list-style-type: none;
  padding: 0;
}

.answer-item {
  background-color: #EDEDED;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.input-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  background-color: #EDEDED;
  border: none;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
}

.save-button, .main-page-button {
  background-color: #4255FF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.save-button:hover, .main-page-button:hover {
  background-color: #0044CC;
}
</style>
