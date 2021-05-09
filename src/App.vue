 <template class="has-navbar-fixed-top">
  <div id="app" class="hero is-dark is-fullheight">
    <!-- Navigation bar -->
    <div class="hero-head">
      <nav class="navbar is-transparent is-fixed-top has-background-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand" v-if="$route.meta.home">
          <router-link to="/" class="navbar-item">
            <span id="nav-name">
              <!-- {{ $route.meta.home }} -->
              <img src="https://i.imgur.com/vbjv2rz.png" alt="Home">
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
            <router-link to="/resume" class="navbar-item">Resume</router-link>
            <router-link to="/contact" class="navbar-item">Contact</router-link>
            <!-- CV button -->
<!--             <span class="navbar-item">
              <a href="https://resume.io/r/OyuPrB8QU" class="button is-success" target="_blank" download>
                <span class="icon"> -->
<!--                   <font-awesome-icon :icon="['fas', 'cloud-download-alt']" /> -->
<!--                   <i class="fas fa-cloud-download-alt"></i>
                </span>
                <span>CV</span>
              </a>
            </span> -->
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
<!--   <br> -->
  <!-- Footer navigation -->
<!--   <br> -->
    <div class="hero-foot" v-once>
      <footer class="footer has-background-dark">
        <nav class="tabs is-boxed is-medium is-fullwidth">
          <div class="container">
            <ul>
              <li class="footer-li">
                <a href="https://github.com/alexanderbenerink" target="_blank">
<!--                   <font-awesome-icon :icon="['fab', 'github']" /> -->
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li class="footer-li">
                <a href="https://www.linkedin.com/in/alexander-benerink/" target="_blank">
<!--                   <font-awesome-icon :icon="['fab', 'linkedin']" /> -->
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li class="footer-li">
                <a>
<!--                   <font-awesome-icon :icon="['fab', 'twitter']" /> -->
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="footer-li">
                <a>
<!--                   <font-awesome-icon :icon="['fab', 'instagram']" /> -->
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
          <p class="content has-text-centered">
            Copyright © {{ new Date().getFullYear() }}
          </p>
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
// disable right mouse click
// window.addEventListener('contextmenu', function (e) {
//   e.preventDefault()
// }, false)
</script>

<!-- Styles -->

<style type="scss">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 190px; /* height of footer */
  font-family: "Times New Roman" !important;
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

.url:hover {
  color: greenyellow !important;
  background-color: black !important;
}

.navbar-item:hover, .footer-li:hover {
  color: greenyellow !important;
}
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>
