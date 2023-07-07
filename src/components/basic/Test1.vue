<script lang="jsx">
import { ref } from 'vue'

export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const name = ref('组件1(Vue)')

    return () => {
      return <div>{name.value}：{props.msg}</div>
    }
  }
}
</script>
