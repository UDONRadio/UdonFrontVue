<template>
  <v-layout row fill-height pl-3 pb-3 id="player" style="background-color: red">
    <v-flex md3 >
      PLAY/PAUSE
    </v-flex>
    <v-flex md9>
      <v-layout d-flex fill-height column id="meta">
        <v-flex md6 mb-3 ml-3 >
          artist-titre  album
        </v-flex>
        <v-flex md6>
          <v-layout row fill-height align-space-between justify-space-between>
            <v-flex md6>
              volume
            </v-flex>
            <v-flex md5 >
              live1
            </v-flex>
            <v-flex md1 style="background-color: #def2fd;max-width:1vw;">
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'player'
}
</script>

<style scoped lang="less">
#meta{
  background: red;
}
div.flex {
  background:white;
}
</style>
