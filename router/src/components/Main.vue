<template>
	<div>
	  <button @click="goToSec">send</button>
	</div>
 </template>
 
 <script lang="ts" setup>
 import { useRouter } from 'vue-router';
 
 const router = useRouter();
 const goToSec = () => {
	router.push('/sec');
 };
 </script>
 
 <style>
 /* Add your styles here */
 </style>
 