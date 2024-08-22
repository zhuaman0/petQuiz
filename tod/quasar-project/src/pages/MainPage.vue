<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header>
        <q-toolbar>
          <q-btn flat dense round @click="drawer = !drawer" icon="menu" />
          <q-toolbar-title>
            <h1 class="icon">todo</h1>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="500"
        bordered
        side="left"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item v-for="(btn, index) in buttons" :key="index" @click="navigate(btn.link)" clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="btn.icon" />
              </q-item-section>
              <q-item-section>
                {{ btn.name }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-dialog v-model="dialog">
                <q-layout
                  container
                  style="height: 500px"
                  class="bg-white shadow-2 rounded-borders"
                >
                <input v-model="title" type="text">
                <input v-model="time" type="text">
                <textarea v-model="desc" name="" id="" cols="30" rows="10"></textarea>
                <button @click="sendData">Send</button>
                </q-layout>
              </q-dialog>

      <q-page-container class="main-container">
        <q-page padding>
          <div class="todo-head">
            <h1 class="title-todo">To-Do</h1>
            <q-btn @click="dialogOpen" label="+"></q-btn>
            <q-btn style="width: 50px;height: 40px;font-size: 12px;" push color="white"  text-color="primary" label="Tasks">
      <q-badge color="orange" floating>{{ item.length }}</q-badge>
    </q-btn>
          </div>
          <q-card v-for="(items, index) in item" :key="index" class="my-card">
            <img class="card-img" src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg" alt="">
            <q-card-section>
              <div class="text-h6">{{ items.title }}</div>
              <div class="text-subtitle2">{{ items.time }}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ items.desc }}
              <q-btn label="Send" class="primary"/>
            </q-card-section>
          </q-card>
        </q-page>
        <q-page padding>
          <div class="todo-head">
            <h1 class="title-todo">Doing</h1>
            <q-btn @click="dialogOpen" label="+"></q-btn>
            <q-btn style="width: 50px;height: 40px;font-size: 12px;" push color="white"  text-color="primary" label="Tasks">
      <q-badge color="orange" floating>{{ doing.length }}</q-badge>
    </q-btn>
          </div>
          <q-card v-for="(doings, index) in doing" :key="index" class="my-card">
            <img class="card-img" src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg" alt="">
            <q-card-section>
              <div class="text-h6">{{ doings.title }}</div>
              <div class="text-subtitle2">{{ doings.time }}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ doings.desc }}
            </q-card-section>
          </q-card>
        </q-page>
        <q-page padding>
          <div class="todo-head">
            <h1 class="title-todo">Done</h1>
            <q-btn @click="dialogOpen" label="+"></q-btn>
            <q-btn style="width: 50px;height: 40px;font-size: 12px;" push color="white"  text-color="primary" label="Tasks">
      <q-badge color="orange" floating>{{ done.length }}</q-badge>
    </q-btn>
          </div>
          <q-card v-for="(dones, index) in done" :key="index" class="my-card">
            <img class="card-img" src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg" alt="">
            <q-card-section>
              <div class="text-h6">{{ dones.title }}</div>
              <div class="text-subtitle2">{{ dones.time }}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ dones.desc }}
            </q-card-section>
          </q-card>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import HeaderPage from './HeaderPage.vue';
const router = useRouter();
const navigate = (route) => {
  router.push(route)
}

const drawer = ref(false);
const item = ref([])
const dialog = ref(false)
const title = ref("");
const time = ref("");
const desc = ref("");
const done = ref([]);
const doing = ref([]);
const buttons = ref([
  {
    name: "Home",
    icon: "home",
    link: "/"
  },
  {
    name: "Header",
    icon: "code",
    link: "/header"
  }
])

const dialogOpen = () => {
  dialog.value = !dialog.value
}

onMounted(async () => {
  try {
    const responce = await axios.get('https://dcf36ff6cadf8adb.mokky.dev/item')
    item.value = responce.data
    console.log(item.value)
  }catch (err) {
    console.log(err)
  }
})

onMounted(async () => {
  try {
    const responce = await axios.get('https://dcf36ff6cadf8adb.mokky.dev/done')
    done.value = responce.data
    console.log(done.value)
  }catch (err) {
    console.log(err)
  }
})

onMounted(async () => {
  try {
    const responce = await axios.get('https://dcf36ff6cadf8adb.mokky.dev/doing')
    doing.value = responce.data
    console.log(doing.value)
  }catch (err) {
    console.log(err)
  }
})

const sendData = async() => {
  try {
    const responce = await axios.post('https://dcf36ff6cadf8adb.mokky.dev/item', {
      title: title.value,
      time: time.value,
      desc: desc.value
    })
    console.log(responce)
  }catch (err){
    console.log(err)
  }
}
</script>

<style scoped>
.icon {
  font-size: 25px;
}
.my-card{
  width: 100%;
  max-width: 250px;
  margin-bottom: 15px;
}
.title-todo {
  font-size: 35px;
}
.todo-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 250px;
}
.main-container {
  display: flex;
  justify-content: space-between;
}
.q-pt-none {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
