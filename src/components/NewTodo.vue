<script setup>
import { ref } from "vue";

const newTodo = ref("");

const emit = defineEmits(["submit"]);
const handleSubmit = () => {
  emit("submit", newTodo.value);
  newTodo.value = "";
};
</script>

<template>
  <div class="relative">
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        class="w-full rounded-md bg-white py-3 pl-[3.25rem] pr-4 text-sm leading-6 focus:outline-none dark:bg-gray-800 dark:text-white"
        placeholder="Create new todo..."
        v-model="newTodo"
      />
    </form>
    <div
      class="absolute left-4 top-3 h-5 w-5 rounded-full border border-gray-300"
    ></div>
  </div>
</template>
