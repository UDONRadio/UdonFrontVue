<template>
    <v-container fill-height  id="Left">
        <v-layout fluid column>
            <v-flex xs2>

            </v-flex>
            <v-flex xs2>
                <v-layout row fill-height >
                    <v-flex xs8 offset-xs3 id="Calendar">
                        <v-card href="/replays" hover elevation="23" color="green">
                            <v-card-title>
                                Calendrier
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs5>

            </v-flex>
            <v-flex xs2>
                <v-layout row  fill-height >
                    <v-flex xs10 offset-xs1 id="About">
                        <v-card href="/replays" hover elevation="23" color="red">
                            <v-card-title>
                                A propos
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
    name: 'Left',
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
#Left{
    #Calendar{
        margin-right: 1em;
        margin-top: -1em;
    }
}
</style>