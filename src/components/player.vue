<template>
  <v-layout row fill-height id="player">
    <v-flex md3 mt-3>
      test
    </v-flex>
    <v-flex md9>
      <v-layout d-flex fill-height column id="meta">
        <v-flex md6 mb-2 ml-2 >
          artist-titre  album
        </v-flex>
        <v-flex md6>
          <v-layout row fill-height>
            <v-flex md6>
              volume
            </v-flex>
            <v-flex md6>
              live1
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
  border: solid back 1px;
}
</style>
