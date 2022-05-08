<script setup>
import DarkModeSwitch from "./DarkModeSwitch.vue";
import NewTodo from "./NewTodo.vue";

const addNew = (newToDO) => {
  console.log(newToDO);
};
</script>

<template>
  <header
    class="
      h-48
      bg-red-200 bg-center bg-header
      dark:bg-header-dark
      tablet:bg-header-desktop
      dark:tablet:bg-header-desktop-dark
      bg-cover
      px-6
      py-10
    "
  >
    <div class="flex justify-between items-center">
      <h1 class="text-white font-bold text-2xl tracking-[0.3rem]">TODO</h1>
      <DarkModeSwitch />
    </div>

    <NewTodo class="mt-10" @submit="addNew" />
  </header>
</template>
