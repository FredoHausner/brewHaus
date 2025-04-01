<script setup lang="ts">
import type {BreweryItem} from "../types";
import {useRouter} from "vue-router";
const router = useRouter();
const props = defineProps<{
  brewery: BreweryItem;
}>();

const clickListItem = () => {
  router.push({name: "BreweryDetails", params: {id: props.brewery.id}});
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
