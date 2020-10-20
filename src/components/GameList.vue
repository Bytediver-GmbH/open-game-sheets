<template>
  <div>
    Spiele: ...
    <div v-for="item in games" v-bind:key="item.key">
      <router-link :to="'/game/'+item.key"> {{ item.metaData.name }}</router-link>

    </div>
  </div>
</template>

<script>
const gameList = [
  'https://raw.githack.com/Nano1237/open-game-sheets-quixx/main'
];
export default {
  name: 'GameList',
  data() {
    return {games: []};
  },
  created() {
    gameList.forEach((game) => {
      fetch(game + '/ogs.json').then(async (res) => {
        this.games.push({
          metaData: await res.json(),
          url: game,
          key: btoa(game)
        });
      });
    });
  }
}
</script>
