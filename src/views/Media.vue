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
              <!-- <div class="column is-one-quarter" v-for="poster in posters" v-bind:key="poster"> Movie card
                <post-card v-bind="poster"><Poster /></post-card>
              </div> -->
              <div class="column is-one-quarter"><!-- American Psycho -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/americanpsycho.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0144084/" target="_blank">
                            <p>American Psycho</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"> <!-- Blade Runner -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/bladerunner.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0083658/" target="_blank">
                            <p>Blade Runner</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"><!-- Blade Runner 2049 -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/bladerunner2049.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt1856101/" target="_blank">
                            <p>Blade Runner 2049</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"> <!-- Django Unchained -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/djangounchained.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt1853728/" target="_blank">
                            <p>Django Unchained</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"><!-- Drive -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/drive.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0780504/" target="_blank">
                            <p>Drive</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"> <!-- Fight Club -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/fightclub.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0137523/" target="_blank">
                            <p>Fight Club</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"><!-- Inglourious Basterds -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/inglouriousbasterds.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0361748/" target="_blank">
                            <p>Inglourious Basterds</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"> <!-- Kill Bill: Vol 1 -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/killbillvol1.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0266697/" target="_blank">
                            <p>Kill Bill: Vol. 1</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"><!-- Kill Bill: Vol 2 -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/killbillvol2.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0378194/" target="_blank">
                            <p>Kill Bill: Vol. 2</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"> <!-- Leon -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/leon.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0110413/" target="_blank">
                            <p>Leon</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"><!-- Nightcrawler -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/nightcrawler.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt2872718/" target="_blank">
                            <p>Nightcrawler</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter"> <!-- No Country For Old Men -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project" v-once>
                      <div class="card-image">
                        <figure class="image is-mobile">
                          <img src="@/assets/movieposters/nocountryforoldmen.jpg" alt="Loading image" width="250" height="368">
                        </figure>
                      </div>
                      <div class="card-header">
                        <div class="card-header-title is-centered has-text-light">
                          <a href="https://www.imdb.com/title/tt0477348/" target="_blank">
                            <p>No Country For Old Men</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
// import PostersService from '@/services/PostersService'
// import Poster from '@/components/Poster.vue'
export default {
  name: 'media'
  // components: {
  //   Poster
  // },
  // data () {
  //   return {
  //     airtableResponse: []
  //   }
  // },
  // mounted: function () {
  //   let self = this
  //   async function getPosters () {
  //     try {
  //       const response = await PostersService.getPosters()
  //       console.log(response)
  //       self.airtableResponse = response.data.records
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getPosters()
  // },
  // computed: {
  //   posters () {
  //     let self = this
  //     let posterList = []
  //     for (var i = 0; i < self.airtableResponse.length; i++) {
  //       if (self.airtableResponse[i].fields.Published) {
  //         let poster = {
  //           image: self.airtableResponse[i].fields.Image[0].url,
  //           link: self.airtableResponse[i].fields.Link,
  //           title: self.airtableResponse[i].fields.Title
  //         }
  //         posterList.push(poster)
  //       }
  //     }
  //     return posterList
  //   }
  // }
}
</script>
