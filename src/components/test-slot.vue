<script lang="jsx">
export default {
  setup(props, {slots}) {
    return () => {
      return  <div>
        <div>默认插槽：{slots.default?.()??'default'}</div>
        <div>extra作用域插槽：{slots.extra?.({id:3})}</div>
      </div>
    }
  }
}
</script>
