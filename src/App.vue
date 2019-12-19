 <template class="has-navbar-fixed-top">
  <div id="app" class="hero is-dark is-fullheight">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Navigation bar -->
    <div class="hero-head">
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand" v-if="$route.meta.home">
          <router-link to="/" class="navbar-item">
            <span id="nav-name">
              <!-- <img src="" width="112" height="28"> -->
              {{ $route.meta.home }}
            </span>
          </router-link>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-start">
          </div>
          <div class="navbar-end">
            <router-link to="/about" class="navbar-item">About me</router-link>
            <router-link to="/projects" class="navbar-item">Projects</router-link>
            <router-link to="/contact" class="navbar-item">Contact</router-link>
            <span class="navbar-item">
              <a href="" class="button is-success" target="_blank">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'cloud-download-alt']" />
                </span>
                <span>CV</span>
              </a>
            </span>
         </div>
       </div>
     </nav>
    </div>

  <!-- Body -->
  <main class="App__main">
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view/>
    </transition>
  </main>
  <!-- Footer navigation -->
    <div class="hero-foot">
      <footer class="footer has-background-dark">
        <nav class="tabs is-boxed is-medium is-fullwidth">
          <div class="container">
            <ul>
              <li><a><font-awesome-icon :icon="['fab', 'github']" /></a></li>
              <li><a><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
              <li><a><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
              <li><a><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
              <li><a><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
            </ul>
          </div>
        </nav>
        <div class="content has-text-centered">
          <p>
          © Copyright 2019 - Alexander Benerink <!-- Not dynamic yet -->
          </p>
        </div>
      </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showNav: false,
      prevHeight: 0
    }
  },
  methods: {
    beforeLeave (element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter (element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter (element) {
      element.style.height = 'auto'
    }
  },
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title || 'Home'
    }
  }
}
</script>

<!-- Styles -->

<style type="scss">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 190px; /* height of footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
 color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>
