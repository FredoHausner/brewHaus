<script setup lang="ts">
import BreweryHeader from "./components/BreweryHeader.vue";
import BreweryList from "./components/BreweryList.vue";
import {getInitialBreweries} from "./Services/breweryServices.ts";
import {ref, onMounted} from "vue";
import type {BreweryItem} from "./types.ts";

const breweries = ref<BreweryItem[]>([]);
const page = ref(1);
const hasMore = ref(true);
const paginationLoading = ref(false);

const getBreweries = async () => {
  if (paginationLoading.value || !hasMore.value) return;

  paginationLoading.value = true;
  try {
    const breweryResponse = (await getInitialBreweries(page.value)).data;
    if (breweryResponse.length > 0) {
      breweries.value.push(...breweryResponse);
      page.value++;
    } else {
      hasMore.value = false;
    }
  } catch (e) {
    console.log(e);
  } finally {
    paginationLoading.value = false;
  }
};

onMounted(() => {
  getBreweries();
});
</script>

<template>
  <div class="AppWrapperMain">
    <BreweryHeader />
    <BreweryList :breweries="breweries" @paginateBreweries="getBreweries" />
    <div v-if="paginationLoading" class="loadingSpinner">Loading...</div>
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
