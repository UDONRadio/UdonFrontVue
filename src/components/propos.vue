<template>
  <div ma=-0 pa-0>
    <v-img :src="require('../assets/propos.svg')" contain aspect-ratio="1" @click.stop="dialog = !dialog"/>
    <v-dialog
      v-model="dialog"
      max-width="450"
    >
      <v-card>
        <v-card-title title>
          Bonjour
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus blandit sem id convallis. Quisque sem leo, luctus a tincidunt eget, pretium sed sapien. Integer lacinia finibus risus a congue. Donec bibendum ex ut eros eleifend imperdiet. Nulla facilisi. Praesent convallis turpis a orci ullamcorper lacinia. Sed luctus ligula in metus ornare aliquam. Integer laoreet in ante eget pulvinar. Quisque finibus neque eros, ultrices luctus nisi lobortis eget. Vestibulum nec tortor elementum, commodo turpis sed, maximus lectus. Quisque venenatis magna at mi condimentum, vitae convallis ex congue. Nunc elementum, nulla et sagittis aliquet, risus enim varius est, sed tristique sapien purus id sem. Suspendisse sem magna, porttitor consequat rutrum id, placerat a ante. Sed non risus ut urna convallis ultricies. Nam mauris ipsum, tempus in neque in, dignissim vulputate risus.

          Donec at auctor lectus. Morbi vitae orci lobortis, mattis nulla id, vulputate eros. Nunc malesuada nulla faucibus, tincidunt elit hendrerit, posuere lectus. Pellentesque consectetur arcu eget augue malesuada molestie. Fusce ac elit id justo porttitor faucibus vitae aliquam magna. Ut convallis diam metus, eu lobortis sem efficitur vel. Nam ante nunc, accumsan et sodales eget, iaculis non erat. Praesent tempus ligula id orci iaculis, in ultricies tortor consequat. Fusce interdum nec risus vel pellentesque. Fusce congue dui ac fringilla gravida. Aliquam molestie massa non rhoncus tincidunt. Nullam tincidunt vitae nibh non iaculis.

          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id lobortis ex, quis congue libero. Nunc placerat fermentum luctus. Nunc tristique lobortis quam, eu scelerisque massa sagittis ut. Nam sem tortor, porta non malesuada elementum, tincidunt eget mi. Fusce ultricies metus non consectetur volutpat. Vivamus congue lectus in justo lacinia, a volutpat tellus scelerisque. Ut bibendum tempor pellentesque. Praesent turpis tellus, elementum rutrum diam id, feugiat posuere odio. Vestibulum ut viverra sem. Suspendisse dictum ipsum sit amet eleifend gravida. Quisque dictum sodales ultrices. Curabitur et nunc id tortor tincidunt feugiat vulputate a augue. Duis a nisi leo. Phasellus euismod arcu id urna pretium, vel sodales metus finibus.
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'calendar',
    props: ['dialogue'],
    data () {
      return {
        dialog: this.dialogue
      }
    },
    mounted: function () {
      this.dialog = this.dialogue
    }
  }
</script>

<style scoped>

</style>
