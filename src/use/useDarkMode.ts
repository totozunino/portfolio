import { ref, onBeforeMount } from "vue";

export const useDarkMode = () => {
  const isDarkMode = ref(localStorage.theme === "dark");

  onBeforeMount(() => addThemeClass());

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    addThemeClass();
  };

  const addThemeClass = () => {
    const html = window.document.documentElement;
    const prev = isDarkMode.value ? "light" : "dark";
    html.classList.remove(prev);
    const next = isDarkMode.value ? "dark" : "light";
    html.classList.add(next);
    localStorage.setItem("theme", next);
  };

  return {
    toggleDarkMode,
    isDarkMode,
  };
};
