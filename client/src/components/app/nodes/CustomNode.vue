<template>
  <div class="custom-node">
    <Handle type="target" :position="Position.Top" />
    <button>Increment</button>
  </div>
</template>

<script lang="ts" setup>
import { Handle, Position } from '@vue-flow/core'

</script>

<style lang="css" scoped>
.custom-node {
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
}
</style>
