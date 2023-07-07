<template>
<h4>Template使用</h4>
<TestSlot>
  <template #extra="{id}">22+{{id}}</template>
</TestSlot>

</template>

<script>
import TestSlot from '../test-slot.vue'
import { ref, defineComponent } from 'vue'

export default {
  components: {
    TestSlot
  }
}
</script>