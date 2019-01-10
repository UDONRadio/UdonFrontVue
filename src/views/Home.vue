<template>
    <v-container fill-height id="home">
        <v-layout column fluid>
            <v-flex md12 id="Corp">
                <v-layout row fluid fill-height>
                    <v-flex xs7 id="InfoBox">
                        Infobox
                    </v-flex>
                    <v-flex xs5>
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
    background-color: antiquewhite;
    #Corp{
        padding: 1em;
        .flex{
            background-color: white;
            
        }
        #InfoBox{
            margin-right: 5px;
            text-align: center;
        }
    }

}
</style>