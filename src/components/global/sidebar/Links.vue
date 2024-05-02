<script setup lang="ts"></script>

<template>
  <div class="sidebar__menu">
    <ul>
      <li><NuxtLink class="sidebar__menu--item" to="/cv">CV</NuxtLink></li>
      <li>
        <NuxtLink class="sidebar__menu--item" to="/about-me">About me</NuxtLink>
      </li>
      <li>
        <NuxtLink class="sidebar__menu--item" to="/web-apps">Web apps</NuxtLink>
      </li>
      <li>
        <NuxtLink class="sidebar__menu--item" to="/figma">Figma</NuxtLink>
      </li>
      <li>
        <NuxtLink class="sidebar__menu--item" to="/css-drawings"
          >CSS drawings</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="sidebar__menu--item special" to="/prints"
          >Prints</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
