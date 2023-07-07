<script lang="jsx">
import TestSlot from '../test-slot.vue'
import { ref, defineComponent } from 'vue'

export default {
  components: {
    TestSlot
  },
  setup() {
    return () => {
      return <div>
      <h4>JSX使用</h4>
      <TestSlot>
      {{
        extra:({id})=>22+id
      }}
      </TestSlot>
       <TestSlot v-slots={{
        default:()=>111,
        extra:({id})=>222+String(id)
       }}></TestSlot>
      </div>
    }
  }
}
</script>