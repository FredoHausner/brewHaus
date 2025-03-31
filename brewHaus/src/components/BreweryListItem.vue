<script setup lang="ts">
console.log("breweryListItem");
</script>

<template>
  <div class="breweryListItemWrapper">brewery list Item</div>
</template>

<style scoped>
.breweryListItemWrapper {
  width: 90%;
  height: 50px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  background-color: #f5f5f5;
  border-radius: 10px;
}
.breweryListItemWrapper:hover {
  background-color: white;
  cursor: pointer;
}
</style>
