<script setup lang="ts">
import BreweryListItem from "./BreweryListItem.vue";
import type {BreweryItem} from "../types.ts";

const props = defineProps<{
  breweries: BreweryItem[];
}>();
</script>

<template>
  <div class="breweryListMainWrapper">
    <div class="breweryListItems">
      <BreweryListItem
        v-for="(brewery, index) in breweries"
        :key="brewery.id"
        :brewery="brewery"
      />
    </div>
  </div>
</template>

<style scoped>
.breweryListMainWrapper {
  width: 100%;
  height: calc(95vh - 8%);
  padding: 2%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.breweryListItems {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
