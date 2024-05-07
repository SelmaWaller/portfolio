<script setup lang="ts">
const props = defineProps(["color"]);
import Arrow from "~/src/components/svg/Arrow.vue";
</script>

<template>
  <div class="sidebar__menu">
    <ul>
      <li>
        <NuxtLink class="sidebar__menu--item" to="/cv"
          ><span><Arrow :color="color" /></span>CV</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="sidebar__menu--item" to="/web-apps"
          ><span><Arrow :color="color" /></span>Web apps</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="sidebar__menu--item" to="/figma"
          ><span><Arrow :color="color" /></span>Figma</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="sidebar__menu--item" to="/css-drawings"
          ><span><Arrow :color="color" /></span>CSS drawings</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="sidebar__menu--item special" to="/prints"
          ><span><Arrow :color="color" /></span>Prints</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
