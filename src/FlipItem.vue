<template>
  <div :class="{play: isPlay}">
    <ul class="flip">
      <li
        class="item"
        v-for="(item, key) in total + 1"
        :class="{active: current === key, before: (key === current - 1)}"
        :key="item"
      >
        <div class="up">
          <div class="inn">{{key}}</div>
        </div>
        <div class="down">
          <div class="inn">{{key}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      current: 0,
      isPlay: false
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.stopTimer()
  },
  methods: {
    startTimer() {
      this.timer = setTimeout(() => {
        this.stopTimer()
        this.isPlay = false
        this.$nextTick(() => {
          const { current, total } = this
          this.isPlay = true
          this.current = current > total - 1 ? 0 : current + 1
          this.startTimer()
        })
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
.flip {
  position: relative;
  margin: 5px;
  width: 60px;
  height: 90px;
  font-size: 80px;
  font-weight: bold;
  line-height: 86px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  .item {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    perspective: 200px;
    &:first-child {
      z-index: 2;
    }
    .up,
    .down {
      z-index: 1;
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      overflow: hidden;
    }
    .up {
      transform-origin: 50% 100%;
      top: 0;
      &:after {
        content: '';
        position: absolute;
        top: 44px;
        left: 0;
        z-index: 5;
        width: 100%;
        height: 4px;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
    .down {
      transform-origin: 50% 0%;
      bottom: 0;
    }
    .inn {
      position: absolute;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 200%;
      color: #ccc;
      text-shadow: 0 1px 2px #000;
      text-align: center;
      background-color: #333;
      border-radius: 6px;
    }
    .up .inn {
      top: 0;
    }
    .down .inn {
      bottom: 0;
    }
  }
}

/* PLAY */
.play {
  .item {
    &.before {
      z-index: 3;
    }
    &.active {
      animation: asd 0.5s 0.5s linear both;
      z-index: 2;
    }
    &.active .down {
      z-index: 2;
      animation: turn 0.5s 0.5s linear both;
    }
    &.before .up {
      z-index: 2;
      animation: turn2 0.5s linear both;
    }
  }
}

@keyframes asd {
  0% {
    z-index: 2;
  }
  5% {
    z-index: 4;
  }
  100% {
    z-index: 4;
  }
}

@keyframes turn {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes turn2 {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes asd {
  0% {
    z-index: 2;
  }
  5% {
    z-index: 4;
  }
  100% {
    z-index: 4;
  }
}

@keyframes turn {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes turn2 {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}

/*DOWN*/

@keyframes show-clock {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hide-clock {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
