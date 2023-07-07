<script lang="jsx">
import { ref, reactive, defineComponent } from 'vue'
import Counter from '../counter.vue'
import AutoCounter from '../auto-counter.vue'

export default defineComponent({
  components: {
    Counter,
    AutoCounter
  },
  setup() {
    const counter = ref(2)
    const autoCounter = ref(0)
    const menuShow = ref(false)
    const item = reactive({
      c: 3,
      d: 4
    })

    return () => {
      return (<div>
        <h4>标签属性绑定，使用单大括号包裹</h4>
        <h4>对象常量绑定</h4>
        <h4>批量绑定标签属性，使用对象结构语法</h4>
        <Counter value={counter.value} back={{a:3,b:4}} {...item} onAdd={()=>{ counter.value+=1}}></Counter>
        <h4>事件绑定，事件名前面要加上on前缀</h4>
        <div>如果要带参数，需要使用箭头函数进行包裹</div>
        <h4>v-model 双向绑定，自定义绑定</h4>
        <AutoCounter v-model={autoCounter.value} v-model={[menuShow.value, 'visible']}></AutoCounter>
      </div>)
    }
  }
})
</script>