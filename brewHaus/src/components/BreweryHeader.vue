<script setup lang="ts">
import {ref} from "vue";

const searchInputRef = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  if (searchInputRef.value) {
    searchInputRef.value.focus();
  }
};

const randomBreweryButton = () => {
  console.log("get random brewery");
};
</script>

<template>
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
</template>

<style scoped>
.headerWrapper {
  width: 100%;
  height: 5vh;
  padding: 1rem 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  color: #ffd700;
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
  width: 50%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.headerInputWrapper {
  width: calc(60% - 2rem);
  padding: 0 1rem;
  height: 45px;
  border: 2px solid grey;
  border-radius: 5rem;
  display: inline-flex;
  align-items: center;
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
</style>
