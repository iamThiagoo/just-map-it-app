<template>
  <header class="border-b border-zinc-600 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <div class="flex items-center gap-2">
        <div class="bg-sky-600/30 text-sky-700 p-0.5 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
          <v-icon name="la-brain-solid" class="size-6" />
        </div>
        <h1 class="text-xl -mt-1 font-semibold tracking-tight hover:text-sky-600 duration-200 ease-in">
          <RouterLink to="/">Just Map It</RouterLink>
        </h1>
      </div>
      <nav>
        <ul class="flex items-center gap-6">
          <li><NavLink to="/" label="Home" /></li>
          <li><NavLink to="/examples" label="Examples" /></li>
          <li><NavLink to="/examples" label="Help" /></li>
          <li><NavLink :externalLink="repoUrl" label="Github" /></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavLink from '../navbar/NavLink.vue';

const repoUrl = ref(import.meta.env.VITE_REPO_URL);
</script>