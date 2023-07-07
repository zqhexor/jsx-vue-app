<script lang="jsx">
export default {
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    visible: {
      type: Boolean,
      default: false
    },
  },
  emits:['update:modelValue', 'update:visible'],
  setup(props, {emit}) {
    return () => {
      return  <div>
        <span>counter：{props.modelValue}</span>
        <button onClick={()=>{emit('update:modelValue',props.modelValue+1)}}>增加</button>
        <span>visible：{String(props.visible)}</span>
        <button onClick={()=>{emit('update:visible',!props.visible)}}>切换</button>
      </div>
    }
  }
}
</script>