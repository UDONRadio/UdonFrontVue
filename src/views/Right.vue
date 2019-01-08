<template>
    <v-container fill-height  id="Right">
        <v-layout fluid column>
            <v-flex xs4>

            </v-flex>
            <v-flex xs2>
                <v-layout row fill-height >
                    <v-flex xs8 offset-xs2 id="Replays">
                        replays
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs5>

            </v-flex>
            <v-flex xs2>
                <v-layout row  fill-height >
                    <v-flex xs4 offset-xs4 id="Recre">
                        Cloche pour déclencher la récré  
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs1>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Right',
    components: {
        //
    },
    data () {
        return {
        //
        }
    } 
}
</script>

<style lang="less" scoped>
#Right{
    #Recre{
        background-color: chocolate;
    }
    #Replays{
        background-color: brown;
    }
}
</style>