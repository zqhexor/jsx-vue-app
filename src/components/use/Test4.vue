<script lang="jsx">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const counter = ref(2)
    const multiple2 = (num) => num*2
    const flag = 0
    const list = [1,2]

    return () => {
      return (<div>
        <h4>文本插值用单大括号，支持表达式和函数</h4>
        <div>{counter.value} + {counter.value} = {counter.value + counter.value}</div>
        <div>{counter.value}放大2倍后为：{multiple2(counter.value)}</div>
        <h4>条件判断</h4>
        {flag ? <div>yes</div> : <span>no</span>}
        <h4>列表渲染</h4>
         <ul>{list.map(i => <li>{i}</li>)}</ul>
      </div>)
    }
  }
})
</script>