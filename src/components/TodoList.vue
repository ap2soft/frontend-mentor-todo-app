<script setup>
import { computed } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoListFooter from "./TodoListFooter.vue";

const props = defineProps({
  items: Array,
});

const incompleteItemsCount = computed(
  () => props.items.filter(({ complete }) => !complete).length
);

const emit = defineEmits(["toggle", "delete", "clearCompleted"]);
</script>

<template>
  <div
    class="divide-y rounded-md bg-white text-gray-600 shadow-lg dark:divide-gray-600 dark:bg-gray-800"
  >
    <TodoItem
      v-for="item in props.items"
      :key="item.id"
      :item="item"
      @toggle="(value) => emit('toggle', item.id, value)"
      @delete="emit('delete', item.id)"
    />

    <TodoListFooter
      :incomplete-items-count="incompleteItemsCount"
      @clear-completed="emit('clearCompleted')"
    />
  </div>
</template>
