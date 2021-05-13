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
  name: 'App1',
  data () {
    return {
      carousels: [
        {
          "id": "1006",
          "author": "Vladimir Kudinov",
          "url": "https://unsplash.com/photos/-wWRHIUklxM",
          "download_url": "https://picsum.photos/id/1006/2621/1600"
        },
        {
          "id": "101",
          "author": "Christian Bardenhorst",
          "url": "https://unsplash.com/photos/8lMhzUjD1Wk",
          "download_url": "https://picsum.photos/id/101/2621/1600"
        },
        {
          "id": "10",
          "author": "Paul Jarvis",
          "url": "https://unsplash.com/photos/6J--NXulQCs",
          "download_url": "https://picsum.photos/id/10/2621/1600"
        },
        {
          "id": "100",
          "author": "Tina Rataj",
          "url": "https://unsplash.com/photos/pwaaqfoMibI",
          "download_url": "https://picsum.photos/id/100/2621/1600"
        },
        {
          "id": "1000",
          "author": "Lukas Budimaier",
          "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
          "download_url": "https://picsum.photos/id/1000/2621/1600"
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
