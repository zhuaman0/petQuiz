<template>
  <div class="flex q-my-xl q-gutter-xl row justify-center wrap">
    <q-card
      @click="pageAnime(save.id)"
      v-for="(save, index) in saveDates"
      :key="index"
      class="my-card"
      style="max-width: 300px"
    >
      <img style="height: 400px" :src="save.photo" />
      <q-card-section>
        <div class="text-h6">{{ save.title }}</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const route = useRouter();

const saveDates = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      "https://e893bd912fed4bdf.mokky.dev/watch"
    );
    saveDates.value = response.data;
  } catch (err) {
    console.log(err);
  }
});

const pageAnime = (id) => {
  route.push(`/anime/${id}`);
};
</script>

<style></style>
