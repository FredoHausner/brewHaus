<script setup lang="ts">
import {useRouter} from "vue-router";
import type {BreweryItem} from "../types";
const router = useRouter();
const props = defineProps<{
  brewery: BreweryItem;
}>();

const clickListItem = () => {
  console.log({...props.brewery});
  router.push({name: "BreweryDetails", params: {id: props.brewery.id}});
};
</script>

<template>
  <div class="breweryListItemWrapper" @click="clickListItem">
    <div class="breweryInfo">
      <h2>{{ brewery.name }}</h2>
      <p class="breweryType">{{ brewery.brewery_type }}</p>
      <p>{{ brewery.city }}, {{ brewery.state }}</p>
      <p>{{ brewery.street || brewery.address_1 }}</p>
    </div>
    <div class="breweryActions">
      <a
        :href="brewery.website_url ?? undefined"
        target="_blank"
        class="visitButton"
        >Visit Website</a
      >
      <a :href="'tel:' + brewery.phone" class="callButton">Call</a>
    </div>
  </div>
</template>

<style scoped>
.breweryListItemWrapper {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: white;
  border-radius: 10px;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.breweryListItemWrapper:hover {
  border: 2px solid #ffd700;
  cursor: pointer;
  transform: scale(1.03);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.breweryInfo h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.breweryInfo p {
  margin: 0.2rem 0;
  color: #666;
  text-transform: capitalize;
}

.breweryActions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 50px;
  margin-top: 0.5rem;
}

.visitButton,
.callButton {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #ffd700;
  background-color: white;
  color: #333;
  transition: background-color 0.2s, color 0.2s;
}

.visitButton:hover,
.callButton:hover {
  background-color: #ffd700;
  color: white;
}
</style>
