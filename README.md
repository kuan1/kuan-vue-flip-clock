# vue 翻页时钟

[演示 DEMO](https://www.kuan1.top/kuan-vue-flip-clock/)

# 安装

```
yarn add kuan-vue-flip-clock
```

# 使用

```html
<template>
  <div class="test-clock-container">
    <flip-clock />
  </div>
</template>

<script>
  import FlipClock from 'kuan-vue-flip-clock'
  export default {
    components: {
      FlipClock
    }
  }
</script>

<style lang="scss">
  .test-clock-container {
    font: normal 12px 'Helvetica Neue', Helvetica, sans-serif;
    user-select: none;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    background: radial-gradient(ellipse at center, #969696 0%, #595959 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```

## 参考

[codepen ademilter](https://codepen.io/ademilter/pen/czIGo)
