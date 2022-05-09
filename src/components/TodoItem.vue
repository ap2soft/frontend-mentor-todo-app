<script setup>
import { ref, watch } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const props = defineProps({ item: Object });
const emit = defineEmits(["toggle", "delete"]);
const complete = ref(props.item.complete);

watch(complete, (value) => emit("toggle", value));
</script>

<template>
  <div
    class="group relative flex items-center justify-between py-4 pr-10 pl-4 text-sm"
  >
    <SwitchGroup class="flex items-center" as="div">
      <Switch
        v-model="complete"
        @input="emit('toggle', complete)"
        :class="{ 'bg-gradient-to-br from-blue-300 to-purple-400': complete }"
        class="inline-grid h-5 w-5 shrink-0 place-content-center rounded-full border border-gray-300 transition hover:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500/40"
      >
        <img
          v-show="complete"
          src="/src/assets/images/icon-check.svg"
          alt=""
          class="h-2 w-2"
        />
      </Switch>
      <SwitchLabel
        class="ml-4 transition"
        :class="{ 'text-gray-300 line-through': complete }"
        v-text="props.item.name"
      />
    </SwitchGroup>
    <button
      class="hidden- absolute right-4 top-[50%] -mt-2 h-5 w-5 p-1 group-hover:block"
      @click="emit('delete')"
    >
      <img src="/src/assets/images/icon-cross.svg" alt="Delete Item" />
    </button>
  </div>
</template>
