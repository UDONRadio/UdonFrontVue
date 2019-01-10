<template>
    <v-container fill-height id="replays">
        <v-layout column fluid>
            <v-flex xs1>
                Search Bar
            </v-flex>
            <v-flex xs11  >
                <v-layout row wrap id="scroll">
                    <v-flex v-for="item, i in items" :key="i" xs6>
                        <v-card class="card" hover="true" elevation="5">
                            <v-card-title>
                                <h2>{{item.text}}</h2>
                                <p>Description: {{item.description}}</p>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { text: 'Jules truc', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Adele et pep', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Du metal pour elie', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Proutophonie', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Adele et pep', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Du metal pour elie', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Proutophonie', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Adele et pep', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Du metal pour elie', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Proutophonie', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Adele et pep', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Du metal pour elie', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Proutophonie', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' },
                { text: 'Extra large (24px)', description: 'lorem ipsum et tout je sais plus trop la suite mais bon on va dire cest ca de toute facon cest du latin personne ne connait met personne ne connais ' }
            ]
        })
    }
</script>

<style lang="less" scoped>
#replays{
    background-color: azure;
    #scroll{
        max-height: 35em;
        overflow-y: scroll;
    }
    .flex{
        background-color: beige;
        padding:1em;
    }

}
</style>