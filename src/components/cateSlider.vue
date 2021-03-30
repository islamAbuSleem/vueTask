<template>
  <div class="category">
    <swiper
      :slides-per-view="15"
      :space-between="15"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide :class="[{active:cate.isActive},'game-cate']" @click="cate.isActive = !cate.isActive; addActiveGroup(cate)" v-for="(cate,index) in category" :key="index">{{cate.title}}</swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      isActGroup:[],
      category:[
        {title:"Arcade",
        isActive:false},
        {title:"Action",
        isActive:false},
        {title:"Survival",
        isActive:false},
        {title:"Racing",
        isActive:false},
        {title:"Competitive",
        isActive:false},
        {title:"Strategy",
        isActive:false},
        {title:"Advanture",
        isActive:false},
        {title:"Fighting",
        isActive:false},
        {title:"Arcade",
        isActive:false},
        {title:"Action",
        isActive:false},
        {title:"Survival",
        isActive:false},
        {title:"Racing",
        isActive:false},
        {title:"Competitive",
        isActive:false},
        {title:"Strategy",
        isActive:false},
        {title:"Advanture",
        isActive:false},
        {title:"Fighting",
        isActive:false},
        {title:"Arcade",
        isActive:false},
        {title:"Action",
        isActive:false},
        {title:"Survival",
        isActive:false},
        {title:"Racing",
        isActive:false},
        {title:"Competitive",
        isActive:false},
        {title:"Strategy",
        isActive:false},
        {title:"Advanture",
        isActive:false},
        {title:"Fighting",
        isActive:false},
        {title:"Arcade",
        isActive:false},
        {title:"Action",
        isActive:false},
        {title:"Survival",
        isActive:false},
        {title:"Racing",
        isActive:false},
        {title:"Competitive",
        isActive:false},
        {title:"Strategy",
        isActive:false},
        {title:"Advanture",
        isActive:false},
        {title:"Fighting",
        isActive:false},
      ]
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },addActiveGroup(cate){
      if(cate.isActive){
      this.isActGroup.push(cate)
      }else{
        this.isActGroup = this.isActGroup.filter(el => el.isActive)
      }
     this.$emit("choose",this.isActGroup)
    }
  },
};
</script>
<style lang="scss" scoped>
.category {
  height: 60px;
  box-shadow: #ccc 1px -3px 7px;
  background-color: #fff;
  .game-cate{
    border: 1px solid #ccc;
    border-radius: 9999em;
    &.active{
      background-color: #572589;
      color: #fff;
      &::after{
         content: "\2713";
         display:inline-block;
          vertical-align: top;
          line-height: 1.6em;
          width: 1em;
          height:1em;
          margin-left: 0.3em;
          text-align: center;
          color: #fff;
      }
    }
    cursor: pointer;
    width: 115px !important;
    padding: 2px 0;
    margin-top: 15px;
  }
}
</style>
