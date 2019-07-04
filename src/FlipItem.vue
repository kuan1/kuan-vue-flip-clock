<template>
  <ul class="flip">
    <li v-for="item in 10" :key="item">
      <a href="#">
        <div class="up">
          <div class="shadow"></div>
          <div class="inn">{{item - 1}}</div>
        </div>
        <div class="down">
          <div class="shadow"></div>
          <div class="inn">{{item - 1}}</div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>
</style>
