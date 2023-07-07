<script setup>
import Test1 from './components/basic/Test1.vue'
import Test2 from './components/basic/Test2.jsx'
import Test3 from './components/basic/Test3.vue'
import Test4 from './components/use/Test4.vue'
import Test5 from './components/use/Test5.vue'
import Test6 from './components/use/Test6.vue'
import Test7 from './components/use/Test7.vue'
import Test8 from './components/use/Test8.vue'
</script>

<template>
<div>
  <section>
    <h2>基本使用方式</h2>
    <Test1 msg="Hello" />
    <Test2 msg="Hello" />
    <Test3 msg="Vite + Vue" />
  </section>

  <section>
    <h2>基本使语法</h2>
    <Test4/>
    <Test5/>
    <Test6/>
    <Test7/>
    <Test8/>
  </section>
</div>
</template>
