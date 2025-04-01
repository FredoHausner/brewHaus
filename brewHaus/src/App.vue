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
    <BreweryHeader />
    <BreweryList :breweries="breweries" />
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
  background-color: rgba(211, 211, 211, 0.7);
}
</style>
