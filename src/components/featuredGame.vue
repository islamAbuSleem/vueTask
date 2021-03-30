<template>  
    <div class="container">
        <div class="featured-game bg-white d-flex mt-4">
            <div class="row">
                <div class="col-12 col-md-9">
                    <img :src="game.src" alt="Subway" class="w-100 h-100" @click="openDetails(game)">
                </div>
                <div class="col-12 col-md-3 p-4 ">            
                    <h3 class="title mt-3" @click="openDetails(game)">{{game.title}}</h3>
                    <h3 class="sub-title" @click="openDetails(game)">{{game.subtitle}}</h3>
                    <p class="mt-4" @click="openDetails(game)">{{game.desc}}</p>
                    <span class="text-muted downloads" @click="openDetails(game)">{{game.downloads}}</span>
                    <div class="d-grid col-11 ">
                    <button class="btn text-uppercase text-white d-block mt-3 " @click="openDetails(game)">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
                game:{
                title:"Subway Surfers",
                src:require('../assets/Group 7@2x.png'),
                subtitle:"SYBO Games",
                desc1:"SURF the urban wave! DODGE the oncoming trains!…",
                desc2:"Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.",
                downloads:"300k Downloads",
                features:[ "★ Grind trains with your cool crew!",
                            "★ Colorful and vivid HD graphics!",
                            "★ Hoverboard Surfing!",
                            "★ Paint powered jetpack!",
                            "★ Lightning fast swipe acrobatics!",
                            "★ Challenge and help your friends!"],
                join:["Join the most daring chase!",
"A Universal App with HD optimized graphics.",
"By Kiloo and Sybo."]
            }
        }
    },
    methods:{
        openDetails(game){
              let gameinfo = JSON.stringify(game)
      this.$router.push({name:'details', params:{title:game.title,games:gameinfo }})
        }
    }
}
</script>


<style lang="scss" scoped>
.featured-game{
    // height: 209px;
    border-radius: 7px;
    text-align: left;
   .title{
       font-size: 19px;
   }
   .sub-title{
       font-size: 14px;
   }
   .downloads{
       font-size: 14px;
   }
   button.btn{
       background-color: #572589;
   }
}
</style>