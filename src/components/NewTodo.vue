<script setup>
import { ref } from "vue";

const newTodo = ref("");

const emit = defineEmits(["submit"]);
</script>

<template>
  <div class="relative">
    <form @submit.prevent="emit('submit', newTodo)">
      <input
        type="text"
        class="
          py-3
          pl-11
          pr-4
          text-sm
          w-full
          rounded-md
          focus:outline-none
          leading-tight
        "
        placeholder="Create new todo..."
        v-model="newTodo"
      />
    </form>
    <div
      class="rounded-full w-4 h-4 border border-gray-300 absolute left-4 top-3"
    ></div>
  </div>
</template>
