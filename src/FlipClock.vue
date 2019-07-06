<template>
  <div class="clock-container">
    <flip-item :total="total" :current="current"/>
    <flip-item :total="total" :current="current"/>
    <flip-item :total="total" :current="current"/>
    <flip-item :total="total" :current="current"/>
    <flip-item :total="total" :current="current"/>
  </div>
</template>

<script>
import FlipItem from './FlipItem.vue'
import { getTimeArr } from './utils'

export default {
  components: {
    FlipItem
  },
  data() {
    return {
      timeArr: getTimeArr()
    }
  },
  mounted() {
    console.log(getTimeArr())
    this.startTimer()
  },
  beforeDestroy() {
    this.stopTimer()
  },
  methods: {
    startTimer() {
      this.timer = setTimeout(() => {
        this.stopTimer()
        const { current, total } = this
        this.current = current > total - 1 ? 0 : current + 1
        this.startTimer()
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style lang='scss' scoped>
.clock-container {
  display: flex;
  align-items: center;
}
</style>
