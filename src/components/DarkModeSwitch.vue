<script setup>
const toggleMode = () => {
  if (localStorage.theme === "light") {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
};
</script>

<template>
  <button @click="toggleMode">
    <img
      src="/src/assets/images/icon-moon.svg"
      alt="Dark Mode"
      class="dark:hidden"
    />
    <img
      src="/src/assets/images/icon-sun.svg"
      alt="Light Mode"
      class="hidden dark:block"
    />
  </button>
</template>
