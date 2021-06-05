<template>
  <div class="hero is-cover is-relative is-fullheight-with-navbar is-dark">
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-two-fifths left"> <!-- Left side of page -->
            <div class="columns">
              <div class="column">
                <div class="hero-body">
                  <div class="container">
                    <div class="content has-text-light">
                      <h1 class="title is-2 has-text-weight-medium">Books and Movies</h1>
                        <p>
                          In this page you'll see a bunch of my favorite media that I would recommend you consume.
                        </p>
                        <p>
                          Clicking the titles will lead you to their respective Goodreads/IMDB page.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column"> <!-- Right side of the page -->
            <div class="column"></div>
            <div class="columns is-multiline is-centered is-vcentered">
              <div class="column is-one-quarter" v-for="poster in posters" v-bind:key="poster.id"> <!-- Movie card -->
                <Poster v-bind="poster"></Poster>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
  .card, .card-image, .post-card, .zoom-project {
    transition: transform .2s;
    background-color: #363636;
  }
  .zoom-project:hover {
    transform: scale(1.02);
  }
</style>

<script>
import PostersService from '@/services/PostersService'
import Poster from '@/components/Poster'
export default {
  name: 'media',
  components: {
    Poster
  },
  data () {
    return {
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getPosters () {
      try {
        const response = await PostersService.getPosters()
        console.log(response)
        self.airtableResponse = response.data.records
      } catch (err) {
        console.log(err)
      }
    }
    getPosters()
  },
  computed: {
    posters () {
      const self = this
      const posterList = []
      for (var i = 0; i < self.airtableResponse.length; i++) {
        if (self.airtableResponse[i].fields.Published) {
          const poster = {
            image: self.airtableResponse[i].fields.Image[0].url,
            link: self.airtableResponse[i].fields.Link,
            title: self.airtableResponse[i].fields.Title
          }
          posterList.push(poster)
        }
      }
      return posterList
    }
  }
}
</script>
