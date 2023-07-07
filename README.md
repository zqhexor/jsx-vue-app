## 一、环境搭建
1. 安装插件 ：[@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)

```bash
pnpm add @vitejs/plugin-vue-jsx -D
```

2. 在 `vite.config.js`中配置

``` vue
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx()],
})
```

3. 使用.jsx结尾的文件 或者 在vue文件的script标签中加上lang="jsx"
