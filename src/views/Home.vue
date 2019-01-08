<template>
    <v-container fill-height id="home">
        <v-layout column fluid>
            <v-flex md2 id="navbar">
                <v-layout row fluid fill-height>
                    <v-flex xs4 id="logo">
                        Logo
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
            </v-flex>
            <v-flex md10 id="Corp">
                <v-layout row fluid fill-height>
                    <v-flex xs6 id="InfoBox">
                        Infobox
                    </v-flex>
                    <v-flex xs6>
                        Chat
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
#home{
    #navbar{
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
            margin-right: 1em;
            text-align: center;
        }
    }
    #Corp{
        .flex{
            background-color: white;
        }
        #InfoBox{
            margin-right: 1em;
            text-align: center;
        }
    }

}
</style>