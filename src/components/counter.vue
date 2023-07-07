<script lang="jsx">
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    back: {
      type: Object,
      default: () => ({
        a: 1,
        b: 2
      })
    },
    c: {
      type: Number,
      default: 1
    },
    d: {
      type: Number,
      default: 1
    },
  },
  emits:['add'],
  setup(props, {emit}) {
    return () => {
      return  <div>
        <div>对象back: a-{props.back.a}， b-{props.back.b}</div>
        <div>批量绑定c-{props.c}， d-{props.d}</div>
        <span>counter: {props.value}</span>
        <button onClick={()=>{emit('add')}}>增加</button>
      </div>
    }
  }
}
</script>