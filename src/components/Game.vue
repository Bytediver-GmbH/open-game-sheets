<template>
  <div>
    <div id="game-wrapper"></div>
  </div>

</template>

<script>
import Vue from "vue";

export default {
  name: 'Game',
  async created() {
    const gameUrl = atob(this.$route.params.key);
    const response = await fetch(gameUrl + '/ogs.json');
    const json = await response.json();
    console.log(json);

    const url = gameUrl + '/' + json.main;
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
    script.onload = function () {
      new Vue(window.quixx).$mount('#game-wrapper')
    }
  }
}
</script>
