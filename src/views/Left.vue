<template>
    <v-container fill-height  id="Left">
        <v-layout fluid column>
            <v-flex xs2>

            </v-flex>
            <v-flex xs2>
                <v-layout row fill-height >
                    <v-flex xs8 offset-xs3 id="Calendar">
                        Calendrier
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs5>

            </v-flex>
            <v-flex xs2>
                <v-layout row  fill-height >
                    <v-flex xs10 offset-xs1 id="About">
                        A propos
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
        background-color: aquamarine;
    }
    #About{
        background-color: aquamarine;
    }
}
</style>