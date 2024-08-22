<template>
  <q-layout>
    <q-header
      elevated
      class="text-white"
      style="background-color: #24292e"
      height-hint="61.59"
    >
      <q-toolbar class="q-px-xl q-py-sm flex justify-center">
        <div>
          <img
            width="50px"
            height="50px"
            style="border-radius: 200px"
            :src="dataAnime.photo"
            alt=""
          />
        </div>
        <div class="title q-px-sm" style="font-size: 25px">
          {{ dataAnime.title }}
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container
      style="
        background-color: chocolate;
        width: auto;
        height: auto;
        margin: 0 auto;
      "
    >
      <q-btn
        v-for="n in number"
        :key="n"
        :label="'Series ' + n"
        style="background-color: #24292e; color: white"
        @click="selectSeries(n)"
      />
      <div v-if="selectedSeries">
        <h2>Series {{ selectedSeries }}</h2>
        <p>Description or additional content for Series {{ selectedSeries }}</p>
        <q-video
          style="height: 100vh"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const number = ref(0);
const dataAnime = ref({});
const selectedSeries = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://e893bd912fed4bdf.mokky.dev/watch/${id}`
    );
    number.value = response.data.series;
    dataAnime.value = response.data;
  } catch (err) {
    console.error(err);
  }
});

const selectSeries = (seriesNumber) => {
  selectedSeries.value = seriesNumber;
};
</script>

<style scoped>
.title {
  font-size: 25px;
  color: white;
}
</style>
