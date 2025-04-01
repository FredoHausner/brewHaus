<script setup lang="ts">
import {ref, onMounted, computed} from "vue";
import {useRoute} from "vue-router";
import type {BreweryItem} from "../types";
import {getBreweryById} from "../Services/breweryServices";

const route = useRoute();
const brewery = ref<BreweryItem | null>(null);

const formatPhoneNumber = (phone: string) => {
  const cleaned = ("" + phone).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

const formattedWebsiteUrl = computed(() => {
  if (!brewery?.value || !brewery?.value.website_url) return null;
  let url = brewery?.value.website_url;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "http://" + url;
  }
  return url;
});

onMounted(async () => {
  const breweryId = route.params.id as string;
  const res = await getBreweryById(breweryId);
  brewery.value = res.data;
});
</script>

<template>
  <div class="detailsWrapper">
    <div class="detailsCard">
      <h1>{{ brewery?.name }}</h1>
      <p class="type">{{ brewery?.brewery_type }} Brewery</p>

      <div class="infoSection">
        <h2>Location</h2>
        <p>{{ brewery?.street }}</p>
        <p>
          {{ brewery?.city }}, {{ brewery?.state }} {{ brewery?.postal_code }}
        </p>
        <p>{{ brewery?.country }}</p>
      </div>

      <div class="infoSection">
        <h2>Contact</h2>
        <p v-if="brewery?.phone">📞 {{ formatPhoneNumber(brewery?.phone) }}</p>
        <p v-if="brewery?.website_url">
          🌐 <a :href="brewery?.website_url" target="_blank">Visit Website</a>
        </p>
      </div>

      <div class="infoSection" v-if="brewery?.website_url">
        <iframe
          :src="formattedWebsiteUrl ?? undefined"
          frameborder="0"
          class="websitePreview"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detailsWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 2rem;
}

.detailsCard {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

h1 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: #333;
}

.type {
  font-size: 1.1rem;
  color: grey;
  margin-bottom: 1rem;
}

.infoSection {
  margin-top: 1.5rem;
}

.infoSection h2 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #555;
}

.websitePreview {
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 1rem;
}
</style>
