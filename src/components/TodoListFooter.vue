<script setup>
const props = defineProps({
  incompleteItemsCount: Number,
});

const emit = defineEmits(["clearCompleted"]);
</script>

<template>
  <div class="flex justify-between px-4 py-4">
    <span class="text-xs text-gray-400">
      {{ incompleteItemsCount }} items left
    </span>
    <button
      class="text-xs text-gray-400 transition hover:text-gray-600"
      @click="emit('clearCompleted')"
    >
      Clear Completed
    </button>
  </div>
</template>
