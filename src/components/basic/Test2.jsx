import { defineComponent } from 'vue' 

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => {
      return  <div>组件2(JSX)：{props.msg}</div>
    }
  }
})