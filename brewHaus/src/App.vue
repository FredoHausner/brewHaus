<script setup lang="ts">
import BreweryHeader from "./components/BreweryHeader.vue";
import BreweryList from "./components/BreweryList.vue";
import {getInitialBreweries} from "./Services/breweryServices.ts";

import {ref, onMounted} from "vue";

const breweries = ref([]);
const page = ref(1);
const initialLoad = ref(false);
const paginationLoading = ref(false);
const hasMore = ref(false);

onMounted(() => {
  getInitialBreweries().then((res) => {
    breweries.value = res.data;
  });
});
</script>

<template>
  <div class="AppWrapperMain">
    <div class="video-wrapper">
      <video autoplay loop muted playsinline class="background-video">
        <source src="./assets/beer-loop.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="content-wrapper">
      <BreweryHeader />
      <BreweryList :breweries="breweries" />
    </div>
  </div>
</template>

<style scoped>
.AppWrapperMain {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* backdrop-filter: blur(1px); */
}
</style>
