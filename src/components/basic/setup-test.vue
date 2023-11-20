<template>
  <Render />
</template>

<script setup lang="jsx">
import { ref } from 'vue'

const count = ref(1)
const  add = () => count.value++

const Render = () =>{
  return <button onClick={add}>{count.value}</button>
}
</script>
