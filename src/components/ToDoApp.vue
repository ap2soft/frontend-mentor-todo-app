<script setup>
import { computed, ref } from "vue";
import {
  initTodoList,
  getItems,
  addItem,
  toggleComplete,
  deleteItem,
  clearCompleted,
} from "../todoListManager";
import DarkModeSwitch from "./DarkModeSwitch.vue";
import NewTodo from "./NewTodo.vue";
import TodoList from "./TodoList.vue";
import Filters from "./Filters.vue";

initTodoList();

const currentFilter = ref("all");

const items = ref(getItems());

const filteredItems = computed(() => {
  if (currentFilter.value === "all") {
    return items.value;
  }

  return items.value.filter(
    ({ complete }) =>
      (currentFilter.value === "active" && !complete) ||
      (currentFilter.value === "completed" && complete)
  );
});

const handleAddNew = (newTodo) => {
  addItem({
    id: Date.now(),
    name: newTodo,
    complete: false,
  });

  items.value = getItems();
};

const handleToggleComplete = (itemId, complete) => {
  toggleComplete(itemId, complete);
  items.value = getItems();
};

const handleDelete = (itemId) => {
  deleteItem(itemId);
  items.value = getItems();
};

const handleClearCompleted = () => {
  clearCompleted();
  items.value = getItems();
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
      <NewTodo class="mt-10" @submit="handleAddNew" />
    </div>
  </header>
  <main class="mx-auto -mt-8 px-6 tablet:max-w-md tablet:px-0">
    <TodoList
      :items="filteredItems"
      @toggle="handleToggleComplete"
      @delete="handleDelete"
      @clear-completed="handleClearCompleted"
    />
  </main>
  <aside class="mt-4 px-6 tablet:px-6">
    <Filters :current-filter="currentFilter" @filter="currentFilter = $event" />
  </aside>
</template>
