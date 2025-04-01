<script setup lang="ts">
import BreweryListItem from "./BreweryListItem.vue";
import type {BreweryItem} from "../types.ts";
import {onMounted, onUnmounted} from "vue";

const props = defineProps<{
  breweries: BreweryItem[];
}>();

const emit = defineEmits(["paginateBreweries"]);

const handleScroll = (event: Event) => {
  const target = event.target as HTMLElement;
  const bottomReached =
    target.scrollHeight - target.scrollTop <= target.clientHeight + 200;

  if (bottomReached) {
    emit("paginateBreweries");
  }
};

onMounted(() => {
  const wrapper = document.querySelector(
    ".breweryListMainWrapper"
  ) as HTMLElement;
  wrapper.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  const wrapper = document.querySelector(
    ".breweryListMainWrapper"
  ) as HTMLElement;
  if (wrapper) {
    wrapper.removeEventListener("scroll", handleScroll);
  }
});
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
