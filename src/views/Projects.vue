<template>
  <!-- Section with my projects in containers -->
  <div class="hero is-cover is-relative is-fullheight-with-navbar is-dark">
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="columns is-multiline is-vcentered">
          <div class="column is-one-quarter"> <!-- Page description -->
            <div class="hero-body">
                <div class="container">
                  <div class="has-text-light">
                    <h1 class="title is-2 has-text-weight-medium">Portfolio</h1>
                    <p>Ranges from school assignments to professional work. 👨‍💻</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="column is-one-quarter"> <!-- Project 1 card -->
            <div class="post-card">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title card-1 is-centered"><p>School assignment</p></div>
                </div>
                <div class="card-image">
                  <figure class="image is-square is-mobile">
                    <img src="../assets/projectimages/voyager-thumb.jpg">
                  </figure>
                </div>
                <div class="card-content has-background-grey-dark">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Coral Yachts Backend Framework</p> <!-- Title -->
                    </div>
                  </div>
                  <div class="content">
                    <p class="subtitle is-6">A backend CMS/Admin panel in Laravel + Voyager.</p>
                    <button class="button is-fullwidth has-background-grey-dark modal-button" v-on:click="isShowModal = true">
                      <p class="subtitle is-6">View project details</p>
                    </button>
                  </div>
                </div>
                <!-- Project specific Modal -->
                <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
                  <div class="modal-background" v-on:click="isShowModal = false"></div>
                  <div class="modal-card">
                    <header class="modal-card-head has-background-grey-light">
                      <p class="modal-card-title">Information</p>
                      <button class="delete" aria-label="close" v-on:click="isShowModal = false"></button>
                    </header>
                    <section class="modal-card-body has-background-grey-lighter">
                      <div class="content">
                        <div class="columns">
                          <div class="column is-half">
                            <h3>About</h3>
                            <p>In my final year of my education we were given the assignment of creating an online backend/admin panel in our own framework of choice. So, I chose Laravel, a PHP framework of which I already had some experience with.
                            To assist with creating an admin panel, I have chosen to use <a href="https://voyager.devdojo.com/" target="_blank">Voyager</a>, an admin package for Laravel which utilises it's own version of CRUD, called BREAD (Browse, Read, Edit, Add, Delete). The end result: an operable admin panel which allows you to book yachts.</p>
                            <h3>Learning goals</h3>
                            <p>With this project my goals were to learn how to create an admin backend for websites inside Laravel, to sharpen my skills in database fundamentals and to learn BREAD (and by extension, reinforce my existing knowledge of CRUD).</p>
                            <a href="https://github.com/alexanderbenerink/CoralYachtsFramework" target="_blank"><p>See on Github</p></a>
                          </div>
                          <div class="column is-half">
                            <figure class="image is-multiline">
                              <img class="zoom-img" src="../assets/projectimages/voyager1.jpg" v-on:click="isShowImgVoyager1 = true">
                              <img class="zoom-img" src="../assets/projectimages/voyager2.jpg" v-on:click="isShowImgVoyager2 = true">
                              <img class="zoom-img" src="../assets/projectimages/voyager3.jpg" v-on:click="isShowImgVoyager3 = true">
                            </figure>
                          </div>
                        </div>
                        <!-- Image 1 modal -->
                        <div class="modal" v-bind:class="{ 'is-active': isShowImgVoyager1 }">
                          <div class="modal-background" v-on:click="isShowImgVoyager1 = false"></div>
                          <div class="modal-content">
                            <p class="image">
                              <img src="../assets/projectimages/voyager1.jpg">
                            </p>
                          </div>
                          <button class="modal-close is-large" aria-label="close"></button>
                        </div>
                        <!-- Image 2 modal -->
                        <div class="modal" v-bind:class="{ 'is-active': isShowImgVoyager2 }">
                          <div class="modal-background" v-on:click="isShowImgVoyager2 = false"></div>
                          <div class="modal-content">
                            <p class="image">
                              <img src="../assets/projectimages/voyager2.jpg">
                            </p>
                          </div>
                          <button class="modal-close is-large" aria-label="close"></button>
                        </div>
                        <!-- Image 3 modal -->
                        <div class="modal" v-bind:class="{ 'is-active': isShowImgVoyager3 }">
                          <div class="modal-background" v-on:click="isShowImgVoyager3 = false"></div>
                          <div class="modal-content">
                            <p class="image">
                              <img src="../assets/projectimages/voyager3.jpg">
                            </p>
                          </div>
                          <button class="modal-close is-large" aria-label="close"></button>
                        </div>
                      </div>
                    </section>
                    <footer class="modal-card-foot has-background-grey-light">
                      <button class="button" v-on:click="isShowModal = false">Cancel</button>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter"> <!-- Project 2 card -->
            <div class="post-card">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title card-2 is-centered"><p>Internship assignment</p></div>
                </div>
                <div class="card-image">
                  <figure class="image is-square">
                    <img src="../assets/projectimages/avnctel-thumb.jpg">
                  </figure>
                </div>
                <div class="card-content has-background-grey-dark">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">AVNC Laravel CRUD Application</p> <!-- Title -->
                    </div>
                  </div>
                  <div class="content">
                    <p class="subtitle is-6">A Laravel CRUD application to reinforce my skills.</p>
                    <button class="button is-fullwidth has-background-grey-dark modal-button" v-on:click="isShowModal2 = true">
                      <p class="subtitle is-6">View project details</p>
                    </button>
                  </div>
                </div>
                <!-- Project specific Modal -->
                <div class="modal" v-bind:class="{ 'is-active': isShowModal2 }">
                  <div class="modal-background" v-on:click="isShowModal2 = false"></div>
                  <div class="modal-card">
                    <header class="modal-card-head has-background-grey-light">
                      <p class="modal-card-title">Information</p>
                      <button class="delete" aria-label="close" v-on:click="isShowModal2 = false"></button>
                    </header>
                    <section class="modal-card-body has-background-grey-lighter">
                      <div class="content">
                        <div class="columns">
                          <div class="column is-half">
                            <h3>About</h3>
                            <p>On februari 2020, I have made a phone book as an example to show my skills in Laravel for the company I interned for, during the last year of my education in Application development.</p>
                            <h3>Learning goals</h3>
                            <p>My goals were to show the company 'what I got', to create a full fledged CRUD application and to learn how 'search' and 'data sorting' functions work inside Laravel.</p>
                            <a href="https://github.com/alexanderbenerink/avnctelefoonboek" target="_blank"><p>See on Github</p></a>
                          </div>
                          <div class="column is-half">
                            <figure class="image is-multiline">
                              <img class="zoom-img" src="../assets/projectimages/avnctel1.jpg" v-on:click="isShowImgAvnctel1 = true">
                              <img class="zoom-img" src="../assets/projectimages/avnctel2.jpg" v-on:click="isShowImgAvnctel2 = true">
                            </figure>
                          </div>
                        </div>
                        <!-- Image 1 modal -->
                        <div class="modal" v-bind:class="{ 'is-active': isShowImgAvnctel1 }">
                          <div class="modal-background" v-on:click="isShowImgAvnctel1 = false"></div>
                          <div class="modal-content">
                            <p class="image">
                              <img src="../assets/projectimages/avnctel1.jpg">
                            </p>
                          </div>
                          <button class="modal-close is-large" aria-label="close"></button>
                        </div>
                        <!-- Image 2 modal -->
                        <div class="modal" v-bind:class="{ 'is-active': isShowImgAvnctel2 }">
                          <div class="modal-background" v-on:click="isShowImgAvnctel2 = false"></div>
                          <div class="modal-content">
                            <p class="image">
                              <img src="../assets/projectimages/avnctel2.jpg">
                            </p>
                          </div>
                          <button class="modal-close is-large" aria-label="close"></button>
                        </div>
                      </div>
                    </section>
                    <footer class="modal-card-foot has-background-grey-light">
                      <button class="button" v-on:click="isShowModal2 = false">Cancel</button>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter"> <!-- Project 3 card -->
            <div class="post-card">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title card-3 is-centered"><p>School assignment</p></div>
                </div>
                <div class="card-image">
                  <figure class="image is-square">
                    <img src="../assets/projectimages/phpchat-thumb.jpg">
                  </figure>
                </div>
                <div class="card-content has-background-grey-dark">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">IRC-Style PHP Chat Application</p> <!-- Title -->
                    </div>
                  </div>
                  <div class="content">
                    <p class="subtitle is-6">First year Application Development PHP chat app.</p>
                    <button class="button is-fullwidth has-background-grey-dark modal-button" v-on:click="isShowModal3 = true">
                      <p class="subtitle is-6">View project details</p>
                    </button>
                  </div>
                </div>
                <!-- Project specific Modal -->
                <div class="modal" v-bind:class="{ 'is-active': isShowModal3 }">
                  <div class="modal-background" v-on:click="isShowModal3 = false"></div>
                  <div class="modal-card">
                    <header class="modal-card-head has-background-grey-light">
                      <p class="modal-card-title">Information</p>
                      <button class="delete" aria-label="close" v-on:click="isShowModal3 = false"></button>
                    </header>
                    <section class="modal-card-body has-background-grey-lighter">
                      <div class="content">
                        <div class="columns">
                          <div class="column is-half">
                            <h3>About</h3>
                            <p>During my first year of my education in Application development, I was tasked with creating a basic PHP chatroom using no frameworks. In this app you can make an account and use it to chat with people. While it is, incredibly basic, I scored positively on this assignment and moved on. I'm still pretty proud of this crude little app.</p>
                            <h3>Learning goals</h3>
                            <p>My learning goals were how to create a chat application purely in PHP, using MySQLi to connect to the database and perform CRUD operations, and how to create a login and registration system (while I was at it).</p>
                            <!-- <a href="https://github.com/alexanderbenerink/PHPChatAppFirstYear" target="_blank"><p>See on Github</p></a> -->
                          </div>
                          <div class="column is-half">
                            <figure class="image is-multiline">
                              <img class="zoom-img" src="../assets/projectimages/phpchat1.jpg" v-on:click="isShowImgPhpchat1 = true">
                              <img class="zoom-img" src="../assets/projectimages/phpchat2.jpg" v-on:click="isShowImgPhpchat2 = true">
                              <img class="zoom-img" src="../assets/projectimages/phpchat3.jpg" v-on:click="isShowImgPhpchat3 = true">
                            </figure>
                          </div>
                        </div>
                        <!-- Image 1 modal -->
                        <div class="modal" v-bind:class="{ 'is-active': isShowImgPhpchat1 }">
                          <div class="modal-background" v-on:click="isShowImgPhpchat1 = false"></div>
                          <div class="modal-content">
                            <p class="image">
                              <img src="../assets/projectimages/phpchat1.jpg">
                            </p>
                          </div>
                          <button class="modal-close is-large" aria-label="close"></button>
                        </div>
                        <!-- Image 2 modal -->
                        <div class="modal" v-bind:class="{ 'is-active': isShowImgPhpchat2 }">
                          <div class="modal-background" v-on:click="isShowImgPhpchat2 = false"></div>
                          <div class="modal-content">
                            <p class="image">
                              <img src="../assets/projectimages/phpchat2.jpg">
                            </p>
                          </div>
                          <button class="modal-close is-large" aria-label="close"></button>
                        </div>
                        <!-- Image 3 modal -->
                        <div class="modal" v-bind:class="{ 'is-active': isShowImgPhpchat3 }">
                          <div class="modal-background" v-on:click="isShowImgPhpchat3 = false"></div>
                          <div class="modal-content">
                            <p class="image">
                              <img src="../assets/projectimages/phpchat3.jpg">
                            </p>
                          </div>
                          <button class="modal-close is-large" aria-label="close"></button>
                        </div>
                      </div>
                    </section>
                    <footer class="modal-card-foot has-background-grey-light">
                      <button class="button" v-on:click="isShowModal3 = false">Cancel</button>
                    </footer>
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
export default {
  name: 'projects',
  data: function () {
    return {
      isShowModal: false,
      isShowModal2: false,
      isShowModal3: false,
      isShowImgVoyager1: false,
      isShowImgVoyager2: false,
      isShowImgVoyager3: false,
      isShowImgAvnctel1: false,
      isShowImgAvnctel2: false,
      isShowImgPhpchat1: false,
      isShowImgPhpchat2: false,
      isShowImgPhpchat3: false
    }
  },
  watch: {
    isShowModal: function () {
      if (this.isShowModal) {
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    },
    isShowModal2: function () {
      if (this.isShowModal2) {
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    },
    isShowModal3: function () {
      if (this.isShowModal3) {
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>

<style type="text/css">
  .media-content {
    overflow: hidden !important;
  }

  .card-1, .card-3 {
    background-color: powderblue; /* #B0E0E6 */
  }

  .card-2 {
    background-color: palegreen; /* #98FB98 */
  }

  .zoom-img {
    transition: transform .2s;
  }

  .zoom-img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
</style>
