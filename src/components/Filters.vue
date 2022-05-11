<script setup>
import { ref } from "@vue/reactivity";

const filters = [
  { id: "all", name: "All" },
  { id: "active", name: "Active" },
  { id: "completed", name: "Completed" },
];

const props = defineProps({
  currentFilter: String,
});

const emit = defineEmits(["filter"]);
</script>

<template>
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
      @click="emit('filter', filter.id)"
    >
      {{ filter.name }}
    </button>
  </div>
</template>
