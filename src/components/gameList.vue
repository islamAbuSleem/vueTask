<template>
  <div class="container">
    <div class="gameList bg-white mt-3 p-3 w-100">
      <h4 class="text-capitalize text-start">{{ games.id }}</h4>
      <span class="see-all text-uppercase"
        >see all
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right h-100 mb-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </span>
      </span>

      <div class="row list-of-games">
        <div
          class="col-12 col-sm-6 col-md mt-4 position-relative"
          v-for="game in games.games"
          :key="game.title"
        >
          <img :src="game.img" :alt="game.title" class="w-100" @click="openDetails(game)" />
          <span class="rate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              /></svg
            >{{ game.rate }}</span
          >
          <p class="title mt-2 ms-2 text-truncate text-center" style="width: 150px" @click="openDetails(game)">
            {{ game.title }}
          </p>
          <div class="d-grid col">
            <button class="btn text-uppercase text-white d-block" @click="openDetails(game)">More Info</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["games"],
  methods:{
    openDetails(game){
      let gameinfo = JSON.stringify(game)
      this.$router.push({name:'details', params:{title:game.title,games:gameinfo }})
    }
  }
};
</script>

<style lang="scss" scoped>
.gameList {
  border-radius: 7px;
  position: relative;
  .see-all {
    position: absolute;
    top: 19px;
    right: 25px;
    color: #572589;
    cursor: pointer;
  }
  .list-of-games {
    img {
      cursor: pointer;
    }
    .rate {
      position: absolute;
      top: 15px;
      left: 30px;
      background-color: #fff;
      padding: 1px 10px;
      border-radius: 7px;
      font-size: 14px;
      svg{
        width: 12px;
        margin: 3px;
        color: #572589;
      }
    }
    .title {
      font-size: 14px;
      cursor: pointer;
    }
    button.btn {
      background-color: #572589;
    }
  }
}
</style>
