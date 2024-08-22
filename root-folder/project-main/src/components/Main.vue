<template>
	<div>
	  <button @click="goToSec">send</button>
	</div>
 </template>
 
 <script lang="ts" setup>
 import { useRouter } from 'vue-router';
 const router = useRouter();
 const goToSec = () => {
	window.location.href = 'http://localhost:8080/';
 }
 </script>
 
 <style>
 </style>
 