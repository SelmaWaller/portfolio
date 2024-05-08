<script setup lang="ts">
import Arrow from "../svg/Arrow.vue";
import items from "~/data/menu-items.json";
defineProps(["color"]);
</script>

<template>
  <ul>
    <li v-for="(item, index) in items.items" :key="index">
      <NuxtLink
        class="menu__item"
        :class="{ special: item.special }"
        :to="item.path"
        ><span><Arrow :color="color" /></span>{{ item.name }}</NuxtLink
      >
    </li>
  </ul>
</template>
