<template>
    <div class="home">
        <cateSlider @choose="filteredGames"></cateSlider>
        
        <template v-if="!filtered.size">
            <featuredGame></featuredGame>
            <gameList v-for="Section in sections" :key="Section.id" :games="Section"></gameList>
        </template>
        <filterGames v-else :filtered="filtered"></filterGames>
    </div>
</template>

<script>
import cateSlider from '../components/cateSlider.vue'
import featuredGame from '../components/featuredGame.vue'
import gameList from '../components/gameList.vue'
import filterGames from '../components/filterGames.vue'
export default {
    components:{
        cateSlider,
        featuredGame,
        gameList,
        filterGames
    },
    data(){
        return{
            filtered: new Set(),
            sections:[{
                id:"most recommedation",
                games:[
                    {
                        title:"Asphalt 9: Legends - Epic Car Action…",
                        img: require("../assets/asphalt.png"),
                        src: require("../assets/asphaltBanner.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Racing","Competitive"]
                    },
                    {
                        title:"Zooba: Free-for-all G6Games",
                        img:require("../assets/zooba.png"),
                        src:require("../assets/Banner_Zooba.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Competitive","Action","Survival"]
                    },
                    {
                        title:"METAL MADNESS PvP: Car Shooter & Twisted Action GDCompany",
                        img:require("../assets/metal.png"),
                        src: require("../assets/metal.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Competitive","Action","Survival","Strategy"]
                    },
                    {
                        title:"Call of Duty®: MobileActivision Publishing, In",
                        img:require("../assets/cod.png"),
                        src:require("../assets/cod.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Competitive","Action","Survival","Strategy","Arcade"]
                    },
                    {
                        title:"Cover Fire: Shooting Games Free Genera Games",
                        img:require("../assets/cover.png"),
                        src:require("../assets/cover.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Competitive","Action","Survival","Strategy","Arcade"]
                    }
                    ]
            },{
                id: "most popular",
                games:[
                    {
                        title:"Eternity Legends Premium…",
                        img:require("../assets/legends.png"),
                        src:require("../assets/Legends.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Action","Survival","Strategy"]
                    },
                    {
                        title:"Boris and the Dark Survival…",
                        img:require("../assets/boris.png"),
                        src:require("../assets/boris2.png"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Competitive","Survival","Strategy"]
                    },
                    {
                        title:"Mad Skills BMX 2Turborilla",
                        img:require("../assets/mad.png"),
                        src:require("../assets/mad2.png"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Racing","Strategy"]
                    },
                    {
                        title:"The House of Da Vinci 2 Blue Brain Games s.r.o.",
                        img:require("../assets/hous.png"),
                        src:require("../assets/house.jpg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Competitive","Strategy"]
                    },
                    {
                        title:"Cars Racing Online Jahaa",
                        img:require("../assets/cars.png"),
                        src:require("../assets/cars.jpeg"),
                        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        rate: "4.9",
                        tags:["Competitive","Strategy"]
                    }
                    ]
            }]
                
           
        }
    },
    methods:{
        filteredGames(data){
            let set = new Set();
           let arr2 = Array.from(data);
           arr2.forEach(el =>{
           set.add(el.title)
        //    console.log(set)
           })
this.filtered.clear()
            this.sections.forEach(el => {
            //     console.log(el.games)
                el.games.forEach(game =>{
             game.tags.forEach(tag =>{
                 if(set.has(tag)){
                     this.filtered.add(game)
                 }
             })
             })
            })
            console.log(this.filtered)
        }
    }
}
</script>

<style lang="scss" scoped>
.home{
    padding-bottom: 3%;
}
</style>