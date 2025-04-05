<template>
  <div class="custom-node">
    <Handle type="target" />

    <div class="w-72">
      <div>
        <h2
          v-if="!state.isTitleEditing"
          @click="() => state.isTitleEditing = !state.isTitleEditing" 
          class="text-base cursor-pointer font-bold text-center pb-2"
        >
          {{ data.label }}
        </h2>
        <input 
          v-else 
          type="text" 
          class="border items-center w-full flex justify-center text-base font-bold text-center border-b-1 border-gray-400 pb-2" v-model="inputTitle" />
      </div>

      <div>
        <p 
          v-if="!state.isDescriptionEditing" 
          class="text-sm cursor-pointer text-gray-800"
        >
          {{ data.description }}
        </p>
        <textarea v-else class="w-full border" v-model="inputDescription" />
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { Handle } from '@vue-flow/core'
import { reactive, ref } from 'vue';

const props = defineProps<{
  data: {
    label: string,
    description: string,
  }
}>()

const inputTitle = ref(props.data.label || '');
const inputDescription = ref(props.data.description || '');

const state = reactive({
  isTitleEditing: false,
  isDescriptionEditing: false,
})

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
