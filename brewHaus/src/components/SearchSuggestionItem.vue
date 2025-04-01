<script setup lang="ts">
import type {BreweryItem} from "../types";

const props = defineProps<{
  brewery: BreweryItem;
}>();

const clickListItem = () => {
  console.log({...props.brewery});
};
</script>

<template>
  <div class="borderDiv"></div>
  <div class="breweryListItemWrapper" @click="clickListItem">
    {{ brewery.name }}, {{ brewery.city }}, {{ brewery.state }}
  </div>
</template>

<style scoped>
.breweryListItemWrapper {
  width: 100%;
  height: 50px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: black;
}
.breweryListItemWrapper:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
.borderDiv {
  width: 100%;
  height: 1px;
  border-bottom: 0.5px solid lightgrey;
}
</style>
