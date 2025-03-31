<script setup lang="ts">
import BreweryListItem from "./BreweryListItem.vue";
import {BreweryItem} from "../types.ts";

const props = defineProps<{
  breweries: BreweryItem[];
}>();
</script>

<template>
  <div class="breweryListMainWrapper">
    <BreweryListItem />
  </div>
</template>

<style scoped>
.breweryListMainWrapper {
  width: 100%;
  height: 95vh;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
</style>
