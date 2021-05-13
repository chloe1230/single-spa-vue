<template>
  <b-carousel
    :interval="5000"
    :indicator-inside="false"
  >
    <b-carousel-item v-for="carousel in carousels" :key="carousel.id">
      <section>
        <img :src="carousel.download_url" :alt="carousel.author">
      </section>
    </b-carousel-item>
    <template #indicators="props">
        <b-image class="al image" :src="getImg(props.i)" :title="getImg(props.i)"></b-image>
    </template>
  </b-carousel>
</template>

<script>

export default {
  name: 'App2',
  data () {
    return {
      carousels: [
        {
          "id": "1021",
          "author": "Frances Gunn",
          "url": "https://unsplash.com/photos/8BmNurlVR6M",
          "download_url": "https://picsum.photos/id/1021/2621/1600"
        },
        {
          "id": "1019",
          "author": "Patrick Fore",
          "url": "https://unsplash.com/photos/V6s1cmE39XM",
          "download_url": "https://picsum.photos/id/1019/2621/1600"
        },
        {
          "id": "204",
          "author": "Tiago Gerken",
          "url": "https://unsplash.com/photos/vCqmY3bfqfo",
          "download_url": "https://picsum.photos/id/204/2621/1600"
        },
        {
          "id": "1018",
          "author": "Andrew Ridley",
          "url": "https://unsplash.com/photos/Kt5hRENuotI",
          "download_url": "https://picsum.photos/id/1018/2621/1600"
        },
        {
          "id": "1015",
          "author": "Alexey Topolyanskiy",
          "url": "https://unsplash.com/photos/-oWyJoSqBRM",
          "download_url": "https://picsum.photos/id/1015/2621/1600"
        }
      ]
    }
  },
  methods: {
    getImg (i) {
      const img = this.carousels.find((item, index) => index == i)
      return img.download_url
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
