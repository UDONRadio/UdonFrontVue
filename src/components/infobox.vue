<template>
  <v-layout fill-height id="infobox">
    <v-flex pa-3 md12 id="textbox">
      <h1>Infobox</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscinnon magna. Donec eget lacus sapien. Nunc ultricies sed mauris eget scelerisque. Vestibulum ut purus sed mauris viverra lobortis. Vestibulum in sem non elit sodales luctus at vel sem. Duis quis cursus nulla. Sed sagittis nunc scelerisque augue finibus venenatis. Quisque ultricies mattis turpis. Sed mattis felis erat, quis convallis metus porttitor sed. Nam eu tincidunt est. In viverra volutpat ipsum ut gravida. Donec maximus, mauris ut varius aliquet, erat lectus pulvinar ipsum, iaculis interdum odio nisi sed arcu.
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'infobox'
}
</script>

<style scoped lang="less">
#infobox {
  background-color: white;
  border: cadetblue 2px solid;
  border-radius: 2%;
  #textbox{
    max-height: 55vh;
    overflow-y:auto;
  }
}
</style>
