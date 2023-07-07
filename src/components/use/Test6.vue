<script lang="jsx">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const disabled = ref(true)
    const width = '100px'

    return () => {
      return (<div>
        <h4>class绑定</h4>
        <div className={`title ${ disabled ? 'disabled' : '' } text-red`}>className 模版字符串</div>
        <div class={['title', disabled && 'disabled', 'text-red']}>class 数组</div>
        <h4>style绑定，需要使用双大括号</h4>
        <div style={{ width, background: 'red' }}>aa</div>
      </div>)
    }
  }
})
</script>