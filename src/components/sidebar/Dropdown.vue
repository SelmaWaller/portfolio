<script setup lang="ts">
import { ref } from "vue";
import items from "~/data/menu-items.json";
import Arrow from "../svg/Arrow.vue";

const isOpen = ref(false);
const selectedOption = ref<string | null>(null);
const isSpecial = ref<boolean>(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectOption(option: string, special: boolean) {
  selectedOption.value = option;
  isSpecial.value = special;
  isOpen.value = false;
}
</script>

<template>
  <div class="menu__mq-md" @click="toggleDropdown">
    <div style="max-width: fit-content" :class="{ active: isOpen }">
      <div class="menu__item">
        <span><Arrow /></span>{{ selectedOption || "Home" }}
      </div>
    </div>
    <div v-if="isOpen" class="dropdown__content" @click="toggleDropdown">
      <ul>
        <li
          v-for="item in items.items"
          :key="item.path"
          @click="selectOption(item.name, item.special)"
        >
          <NuxtLink
            class="menu__item menu__item--dropdown"
            :class="{ special: item.special }"
            :to="item.path"
            ><span><Arrow /></span>{{ item.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
