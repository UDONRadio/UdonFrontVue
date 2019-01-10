<template>
    <v-container fill-height  id="Right">
        <v-layout fluid column>
            <v-flex xs4>

            </v-flex>
            <v-flex xs2>
                <v-layout row fill-height >
                    <v-flex xs8 offset-xs2 id="Replays">
                        <v-card href="/replays" hover elevation="23" color="blue">
                            <v-card-title>
                                Replays
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs5>

            </v-flex>
            <v-flex xs2>
                <v-layout row  fill-height >
                    <v-flex xs4 offset-xs4 id="Recre">
                        <v-card href="/replays" hover elevation="23" color="purple">
                            <v-card-title>
                               Cloche pour la recre
                            </v-card-title>
                        </v-card>
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

}
</style>