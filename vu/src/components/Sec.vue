<template>
	<div>
	  <button class="bg-amber-500" @click="toggleBox">Toggle Box</button>
	  
	  <div v-if="isBoxVisible" class="box">
		 <h1>My Box</h1>
		 <p>Here is some information about the box.</p>
		 <input class="border-2 border-blue-500" v-model="boxInput" type="text" placeholder="Type here...">
	  </div>
	</div>
 </template>

<script setup>
import { ref } from 'vue';

// Reactive state to control visibility of the box
const isBoxVisible = ref(false);
const boxInput = ref('');

// Toggle visibility of the box
const toggleBox = () => {
  isBoxVisible.value = !isBoxVisible.value;
};
</script>

<style scoped>
button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  color: white;
  background-color: #f59e0b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.box {
  background-color: black;
  width: 300px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 20px auto;
  border-radius: 10px;
}

input {
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
