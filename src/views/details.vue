<template>
    <div class="container">
        <div class="details">
        <img :src="JSON.parse(games).src" :alt="JSON.parse(games).title" class="mt-4 w-100">
        <div class="game-details mt-3 bg-white text-start mx-3 p-3">
            <h3 class="title">{{JSON.parse(games).title}}</h3>
           <p class="subtitle" v-if="JSON.parse(games).subtitle">{{JSON.parse(games).subtitle}}</p>
           <p class="downloads text-muted" v-if="JSON.parse(games).downloads">{{JSON.parse(games).downloads}}</p>
           <p class="desc">{{JSON.parse(games).desc}}</p>

            <p class="desc2" v-if="JSON.parse(games).desc2">{{JSON.parse(games).desc2}}</p>
            <ul class="list-unstyled" v-if="JSON.parse(games).features">
                <li v-for="item in JSON.parse(games).features" :key="item">{{item}}</li>
            </ul>
            <p v-for="join in JSON.parse(games).join" :key="join">{{join}}</p>
        </div>
        <gameList v-for="Section in sections" :key="Section.id" :games="Section"></gameList>
</div>
    </div>
</template>

<script>
import gameList from '../components/gameList.vue'

export default {
    props:["games"],
    components:{gameList},
    data(){
        return{
            sections:[{
                id:"most recommedation",
                games:[
                    {
                        title:"Asphalt 9: Legends - Epic Car Action…",
                        img:require("../assets/asphalt.png"),
                        src: require("../assets/asphaltBanner.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9"
                    },
                    {
                        title:"Zooba: Free-for-all G6Games",
                        img:require("../assets/zooba.png"),
                        src:require("../assets/Banner_Zooba.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9"
                    },
                    {
                        title:"METAL MADNESS PvP: Car Shooter & Twisted Action GDCompany",
                        img:require("../assets/metal.png"),
                        src: require("../assets/metal.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9"
                    },
                    {
                        title:"Call of Duty®: MobileActivision Publishing, In",
                        img:require("../assets/cod.png"),
                        src:require("../assets/cod.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9"
                    },
                    {
                        title:"Cover Fire: Shooting Games Free Genera Games",
                        img:require("../assets/cover.png"),
                        src:require("../assets/cover.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9"
                    }
                    ]
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
.details{
    padding-bottom: 3%;
    img{
        border-radius: 7px;
    }
    .game-details{
        border-radius: 7px;
        .title{
            font-size: 21px;
        }
        .desc{
            font-size: 17px;
        }
        .downloads{
            margin-top: -18px;
            font-size: 14px;
        }
    }
}
</style>