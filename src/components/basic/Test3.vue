<script lang="jsx">
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  render(props) {
    return <div>组件3(render函数)：{props.msg} </div>
  }
}
</script>
