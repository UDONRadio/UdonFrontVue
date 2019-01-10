<template>
    <v-container fill-height id="navbar">
        <v-layout row fluid>
            <v-flex xs4 id="logo">
                <v-card flat tile>
                    <img src="@/assets/udon.jpg"/>
                    <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                    apect-ratio="1">
                       <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs2 id="player">
                Play/Pause
            </v-flex>
            <v-flex xs6>
                <v-layout column fluid fill-height id="player_info">
                    <v-flex xs6 style="border-bottom: 1px solid black;">
                        Métadonnées
                    </v-flex>
                    <v-flex xs6>
                        <v-layout row fluid fill-height>
                            <v-flex xs6 style="border-right: 1px solid black;">
                                Volume
                            </v-flex>
                            <v-flex xs6>
                                Type
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
//import udon from './assets/udon.jpg'
    export default {
        data: () => {
            return {
                udon:udon
            }
        }
    }
</script>

<style lang="less" scoped>
#navbar{
    img{
        max-height: 10em;
    }
    #player{
        border-right: 1px solid black;
    }
    margin-bottom: 1em;
    .flex{
        background-color: white;
    }
    #player_info{
        .flex{
            padding: 5px;
        }
    }
    #logo{
        margin-right: 5px;
        text-align: center;
    }
}
</style>