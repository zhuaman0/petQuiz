<!-- src/App.vue -->
<template>
	<div>
	  <h1 class="text-xl font-bold underline">Todo List</h1>
	  <button class="border-2 border-blue-500" @click="goToSec">Go to Sec</button> <!-- Add this button -->
	  <div class="main">
		 <input class="border-2 border-blue-500" v-model="intValue" type="text">
		 <button class="border-2 border-blue-500"	 @click="sendUser">Send</button>
	  </div>
	  <ul>
		 <li :class="{ 'line': newLine }" v-for="(newUser, bab) in newUsers" :key="bab.id">
			{{ newUser }}
			<button class="border-2 border-blue-500" @click="deleteUser(bab)">Delete</button>
			<button class="bg-blue-500 border-2 border-amber-500 text-white p-2" @click="lineGo(id)">Line</button>
		 </li>
	  </ul>
	  <h1 :class="{ 'line': lineThrough }">Baby</h1>
	  <button class="bg-amber-500" @click="lineButton">Line Through</button>
	  <router-view>
	  </router-view>
	</div>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 import { useRouter } from 'vue-router';
 
 const router = useRouter();
 const newUsers = ref([]);
 const intValue = ref('');
 const lineThrough = ref(false)
 const newLine = ref(false)
 
 const sendUser = () => {
	if (intValue.value !== '') {
	  newUsers.value.push(intValue.value);
	  intValue.value = '';
	} else {
	  alert('the best');
	}
 };

 const deleteUser = (bab) => {
	newUsers.value.splice(bab, 1)
 }
 
 const goToSec = () => {
	router.push('/sec');
 };

 const lineButton = () => {
	lineThrough.value = !lineThrough.value
 }

 const lineGo = (id) => {
	newLine.value[id] = !newLine.value[id]
 }
 </script>
 
 <style scoped>
 h1 {
	text-align: center;
 }
 .main {
	display: flex;
	justify-content: center;
 }
 li {
	list-style-type: none;
 }
 .but {
	display: flex;
	justify-content: end;
 }
 .line {
	text-decoration: line-through;
}
 </style>
 