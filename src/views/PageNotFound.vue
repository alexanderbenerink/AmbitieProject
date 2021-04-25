<template>
  <div>
    <div class="hero is-cover is-relative is-fullheight-with-navbar is-dark">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-vcentered">
            <div class="column is-two-thirds">
              <h1 class="title is-2">Page not found.</h1>
              <h2 class="subtitle is-4">The page you are trying to get to doesn't exist, or has migrated.</h2>
              <br />
              <h2 class="subtitle is-6">
                (Try going back to home page and repeating your action, or check the URL for typos. Otherwise, contact me for support.)
              </h2>
            </div>
            <div class="column is-one-quarter">
              <div class="post-card">
                <!-- Card content -->
                <div class="card-content has-background-dark">
                  <div class="media">
                    <div class="media-content has-text-centered">
                      <figure class="image is-256x256 is-inline-block">
                        <p v-if="selectedGraphic"><img style="width:100%" :src="selectedGraphic"></p>
                      </figure>
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

<script>
import monkey1 from '../assets/404/monkey1.gif'
// import monkey2 from '../assets/404/monkey2.gif'
// import monkey3 from '../assets/404/monkey3.gif'
import monkey4 from '../assets/404/monkey4.gif'
import monkey5 from '../assets/404/monkey5.gif'
import monkey6 from '../assets/404/monkey6.gif'
import monkey7 from '../assets/404/monkey7.gif'

export default {
  name: 'notfound',
  components: {

  },
  /* array that randomly picks 404 graphic */
  data: function () {
    return {
      monkeys: [
        monkey1,
        // monkey2,
        // monkey3,
        monkey4,
        monkey5,
        monkey6,
        monkey7
      ],
      selectedGraphic: null
    }
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random() * items.length)]
    }
  },
  created () {
    this.selectedGraphic = this.randomItem(this.monkeys)
  }
}
</script>
