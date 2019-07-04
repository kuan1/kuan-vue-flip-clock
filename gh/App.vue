<template>
  <div class="test-clock-container">
    <flip-clock/>
  </div>
</template>

<script>
import FlipClock from '../src'
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
  color: #888;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  background: radial-gradient(
    ellipse at center,
    rgba(150, 150, 150, 1) 0%,
    rgba(89, 89, 89, 1) 100%
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
