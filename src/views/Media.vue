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
                      <h1 class="title is-2 has-text-weight-medium">Bio</h1>
                        <p>
                          I am a programmer from The Netherlands who is aspiring to one day become a full stack developer in the field of software engineering. In the following section you'll see the technologies I've worked with till so far.
                        </p>
                        <p>
                          I like tinkering with computers, software, websites and game engines. As a career choice I'm interested in working in the field of software engineering, which includes aspects of software- and webdevelopment (from the design phase to post-production).
                        </p>
                        <p>
                         Some hobbies of mine include excercising, hanging with friends, learning how to program, read books and listening to music. My peers experience me as friendly, enthusiastic and eager-to-learn. I find that learning something new through a hands-on approach works the best for me (learning by doing). Every day I'm trying to do something new or productive to push my boundaries and improve.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column"> <!-- Right side of the page -->
            <div class="columns is-multiline is-centered">
              <div class="column is-one-quarter" v-for="poster in media" v-bind:key="poster"> <!-- Movie card -->
                <post-card v-bind="poster"></post-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
  .card, .card-image, .image, .post-card, .zoom-project, .column {
    transition: transform .2s;
    background-color: #363636 !important;
  }
  .zoom-project:hover {
    transform: scale(1.02);
  }
</style>

<script>
import PostersService from '@/services/PostersService.js'
import Poster from '@/components/Poster.vue'
export default {
  name: 'media',
  Component: {
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
    media () {
      let self = this
      let mediaList = []
      for (var i = 0; i < self.airtableResponse.length; i++) {
        if (self.airtableResponse[i].fields.Published) {
          let poster = {
            title: self.airtableResponse[i].fields.Title,
            image: self.airtableResponse[i].fields.Image[0].url,
            link: self.airtableResponse[i].fields.Link
          }
          mediaList.push(poster)
        }
      }
      return mediaList
    }
  }
}
</script>
