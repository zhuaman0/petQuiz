<template>
  <q-layout class="bg-grey-1">
    <q-header
      class="text-white"
      elevated
      style="background-color: #24292e"
      height-hint="61.59"
    >
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn
          color="white"
          round
          dense
          flat
          icon="person"
          size="19px"
          class="q-mr-sm"
          no-caps
        />
        <div
          class="q1-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"
        >
          <q-btn flat dense class="text-white no-caps" @click="secondPull">
            Pull Request
          </q-btn>
          <router-link to="/best" class="text-white text-body2 text-weight-bold"
            >Pull Request</router-link
          >
          <router-link
            to="/anime/123"
            class="text-white text-body2 text-weight-bold"
            >Anime Page</router-link
          >
          <q-btn flat dense class="text-white no-caps" @click="secondPull">
            Pull Request
          </q-btn>
        </div>

        <q-space />
        <div
          class="q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"
        >
          <q-btn
            v-for="item in links"
            :key="item"
            flat
            dense
            class="text-white no-caps q-px-xs q-mx-xs"
          >
            {{ item }}
          </q-btn>
        </div>

        <q-space />
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn dense flat round size="sm" icon="notifications" />

          <div class="row items-center no-wrap">
            <q-icon name="add" size="20px" />
            <q-icon
              name="arrow_drop_down"
              size="16px"
              style="margin-left: -2px"
            />
          </div>
          <q-btn flat dense no-wrap>
            <q-avatar rounded size="20px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" alt="" />
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-md">Settings</div>
                  <q-toggle v-model="mobileData" label="Use Mobile Data" />
                  <q-toggle v-model="bluetooth" label="Bluetooth" />
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                  <q-btn
                    color="primary"
                    label="Logout"
                    push
                    size="sm"
                    v-close-popup
                  />
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
        <q-btn
          @click="openDrawer"
          class="menu"
          icon="menu"
          color="white"
          flat
          dense
          no-wrap
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      side="left"
      bordered
      :width="300"
      :breakpoint="500"
      content-class="bg-grey-3"
      v-model="drawerLeft"
      overlay
    >
      baby
    </q-drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const secondPull = () => {
  router.push("/best");
};

const drawerLeft = ref(false);
const openDrawer = () => {
  drawerLeft.value = !drawerLeft.value;
};
</script>
