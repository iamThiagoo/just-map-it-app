<template>
  <div class="custom-node">
    <div class="w-72">
      <div>
        <h2 class="text-base cursor-pointer font-bold text-center pb-2">
          {{ data.label }}
        </h2>
      </div>

      <div>
        <p class="text-sm cursor-pointer text-gray-800">
          {{ data.description }}
        </p>
      </div>
    </div>
    <Handle type="target" />
  </div>
</template>

<script lang="ts" setup>
import { Handle } from '@vue-flow/core';
import { reactive, ref } from 'vue';

const props = defineProps<{
  data: {
    id: string;
    label: string;
    description: string;
  };
}>();

const inputTitle = ref(props.data.label || '');
const inputDescription = ref(props.data.description || '');

const state = reactive({
  isTitleEditing: false,
  isDescriptionEditing: false,
});
</script>

<style lang="css">
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
  position: relative;
}
</style>
