<script setup lang="ts">
import {breweryAutoFill} from "../Services/breweryServices";
import {ref, onMounted, onUnmounted} from "vue";
import {debounce} from "../utils";
import SearchSuggestionItem from "./SearchSuggestionItem.vue";

const searchInputRef = ref<HTMLInputElement | null>(null);
const searchSuggestedBreweries = ref([]);
const showSearchSuggestions = ref(false);

const focusInput = () => {
  if (searchInputRef.value) {
    searchInputRef.value.focus();
  }
};

const onInputChange = debounce(async (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.value) {
    try {
      const res = await breweryAutoFill(target.value);
      searchSuggestedBreweries.value = res.data;
      showSearchSuggestions.value = res.data.length;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    searchSuggestedBreweries.value = [];
    showSearchSuggestions.value = false;
  }
}, 150);

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const isClickInsideInput = searchInputRef.value?.contains(target);
  const isClickInsideDropdown = document
    .querySelector(".inputSearchRecommendation")
    ?.contains(target);

  if (!isClickInsideInput && !isClickInsideDropdown) {
    if (searchInputRef.value) {
      searchInputRef.value.value = "";
      searchSuggestedBreweries.value = [];
      showSearchSuggestions.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// const randomBreweryButton = () => {
//   console.log("get random brewery");
// };
</script>

<template>
  <div class="headerContent">
    <div class="videoWrapper">
      <video autoplay loop muted playsinline class="backgroundVideo">
        <source src="../assets/beer-loop.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="headerWrapper">
      <div class="headerLeft">
        <img src="../assets/brewHausLogo.svg" class="brewHausLogo" />
        <span class="brewHausHeaderTitle">BrewHaus</span>
      </div>
      <div class="headerMiddle">
        <div class="headerInputWrapper" @click="focusInput">
          <img src="../assets/icons/search.svg" class="searchLogo" />
          <input
            ref="searchInputRef"
            class="headerInput"
            placeholder="Search..."
            @input="onInputChange"
          />
        </div>
        <div class="inputSearchRecommendation" v-show="showSearchSuggestions">
          <SearchSuggestionItem
            v-for="(brewery, index) in searchSuggestedBreweries"
            :key="index"
            :brewery="brewery"
          />
        </div>
      </div>
      <div class="headerRight">
        <!-- <div class="headerRightButtonWrapper" @click="randomBreweryButton">
        <div class="randomBreweryButtonWrapper">
          <img src="../assets/icons/dice.svg" class="diceLogo" />
        </div>
        <span>Random Brewery</span>
      </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerWrapper {
  width: 100%;
  height: 5vh;
  padding: 1rem 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: white;
  position: relative;
}
.videoWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.backgroundVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  opacity: 0.6;
}
.headerContent {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}
.headerLeft {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 25%;
}
.headerRight {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: calc(25% - 2%);
  padding-right: 2%;
}
.headerRightButtonWrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: grey;
  font-size: 1.1rem;
  font-weight: 500;
}
.headerRightButtonWrapper:hover {
  color: black;
  cursor: pointer;
}
.brewHausLogo {
  width: 2rem;
  margin: 1rem 0;
  margin-left: 2rem;
}
.searchLogo {
  width: 1.2rem;
}
.randomBreweryButtonWrapper {
  border: 2px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.diceLogo {
  width: 2rem;
}
.brewHausHeaderTitle {
  margin-left: 0.5rem;
  font-size: 2rem;
  font-weight: 500;
}
.headerMiddle {
  position: relative;
  width: 50%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.headerInputWrapper {
  width: calc(100% - 2rem);
  padding: 0 1rem;
  height: 45px;
  border: 1.5px solid white;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  background-color: white;
}
.headerInputWrapper:hover {
  cursor: text;
  border-color: #ffd700;
}
.headerInput {
  width: 90%;
  height: 90%;
  margin-left: 5%;
  border-radius: 5rem;
  outline: none;
  border: none;
  font-size: 1.2rem;
}
.inputSearchRecommendation {
  width: 99.5%;
  min-height: 50px;
  max-height: 500px;
  position: absolute;
  top: 75px;
  background-color: white;
  border: 1.5px solid lightgrey;
  border-radius: 10px;
  overflow-y: auto;
  z-index: 5;
}
</style>
