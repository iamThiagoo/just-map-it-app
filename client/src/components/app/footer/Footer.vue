<template>
  <footer class="border-t border-zinc-600 bg-background">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <p class="text-sm text-muted-foreground ml-8">© {{ new Date().getFullYear() }} Just Map It</p>
      <ul class="flex items-center gap-4">
        <li><NavLink to="/privacy" label="Privacy" /></li>
        <li><NavLink to="/terms" label="Terms" /></li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import NavLink from '../navbar/NavLink.vue';
</script>