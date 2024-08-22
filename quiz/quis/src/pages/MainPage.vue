<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        ID: {{ user.id }}, Question: {{ user.question }}, Answer:
        {{ user.answer }}
        <button class="delete">Delete</button>
        <button
          @click="checkData(user.answer)"
          :class="{ check: true, ok: isChecked }"
          class="check"
        >
          Check
        </button>
      </li>
    </ul>
    <form @submit.prevent="addUser">
      <input v-model="newUser.question" placeholder="Question" required />
      <input v-model="newUser.answer" placeholder="Answer" required />
      <button type="submit">Add User</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const users = ref([]);
const newUser = ref({ question: "", answer: "" });
const error = ref("");
const isChecked = ref(false);

const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:6000/users");
    users.value = response.data;
  } catch (err) {
    error.value = "Failed to fetch users. Please try again later.";
  }
};

const addUser = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users",
      newUser.value
    );
    users.value.push(response.data);
    newUser.value.question = "";
    newUser.value.answer = "";
  } catch (err) {
    error.value = "Failed to add user. Please try again later.";
  }
};

const checkData = (answer) => {
  if (answer === "dd") {
    isChecked.value = true;
  } else {
    alert("chert");
    isChecked.value = false;
  }
};

onMounted(fetchUsers);
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #f9f9f9;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
.error {
  color: red;
}
form {
  margin-top: 20px;
}
form input {
  margin-right: 10px;
}
.delete {
  background-color: red;
  border-radius: 2px;
  padding: 7px 10px;
  border: none;
  color: white;
  margin-left: 15px;
}
.check {
  background-color: black;
  color: white;
  padding: 7px 10px;
  border: none;
  margin-left: 10px;
}
.check.ok {
  background-color: green;
}
</style>
