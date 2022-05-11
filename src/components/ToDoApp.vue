<script setup>
import { ref } from "vue";
import { initTodoList } from "../todoListManager";
import DarkModeSwitch from "./DarkModeSwitch.vue";
import NewTodo from "./NewTodo.vue";
import TodoList from "./TodoList.vue";

initTodoList();

const items = ref(JSON.parse(localStorage.TodoList || "[]"));

const filters = [
  { id: "all", name: "All" },
  { id: "active", name: "Active" },
  { id: "completed", name: "Completed" },
];

const currentFilter = ref("all");

const addNew = (newTodo) => {
  console.log(newTodo);
  console.log(items);
  items.value.push({
    id: Date.now(),
    name: newTodo,
    complete: false,
  });
  // Store in localStorage
};
</script>

<template>
  <header
    class="h-52 bg-opacity-50 bg-header bg-cover bg-center py-10 dark:bg-header-dark tablet:bg-header-desktop dark:tablet:bg-header-desktop-dark"
  >
    <div
      class="mx-auto flex items-center justify-between px-6 tablet:max-w-md tablet:px-0"
    >
      <h1
        class="text-2xl font-bold tracking-[0.4rem] text-white tablet:text-3xl"
      >
        TODO
      </h1>
      <DarkModeSwitch />
    </div>

    <div class="mx-auto px-6 tablet:max-w-md tablet:px-0">
      <NewTodo class="mt-10" @submit="addNew" />
    </div>
  </header>
  <main class="mx-auto -mt-8 px-6 tablet:max-w-md tablet:px-0">
    <TodoList :items="items" />
  </main>
  <aside class="mt-4 px-6 tablet:px-6">
    <div
      class="mx-auto flex items-center justify-center space-x-4 rounded-md bg-white py-4 dark:bg-gray-800 tablet:max-w-md"
    >
      <button
        v-for="filter in filters"
        :key="filter.id"
        class="text-sm font-bold"
        :class="
          currentFilter === filter.id
            ? 'text-blue-500'
            : 'text-gray-400 hover:text-gray-600'
        "
        @click="currentFilter = filter.id"
      >
        {{ filter.name }}
      </button>
    </div>
  </aside>
</template>
