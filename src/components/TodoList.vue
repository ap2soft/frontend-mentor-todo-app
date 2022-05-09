<script setup>
import { onMounted } from "@vue/runtime-core";
import TodoItem from "./TodoItem.vue";

const props = defineProps({
  items: Array,
});

const incomplete = (item) => !item.complete;

const incompleteItemsCount = props.items.filter(incomplete).length;

const clearCompleted = () => {
  console.log("Clear complete");
};

const onToggle = (itemId, complete) => {
  console.log("Toggle complete", itemId, complete);
};

const onDelete = (itemId) => {
  console.log("Deleting", itemId);
};
</script>

<template>
  <div
    class="divide-y rounded-md bg-white text-gray-600 shadow-lg dark:divide-gray-600 dark:bg-gray-800"
  >
    <TodoItem
      v-for="item in props.items"
      :key="item.id"
      :item="item"
      @toggle="(value) => onToggle(item.id, value)"
      @delete="onDelete(item.id)"
    />
    <div class="flex justify-between px-4 py-4">
      <span class="text-xs text-gray-400">
        {{ incompleteItemsCount }} items left
      </span>
      <button
        class="text-xs text-gray-400 transition hover:text-gray-600"
        @click="clearCompleted"
      >
        Clear Completed
      </button>
    </div>
  </div>
</template>
