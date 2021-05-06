<template>
  <!-- Section with my projects in containers -->
  <div class="hero is-cover is-relative is-fullheight-with-navbar is-dark">
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="columns"> <!-- Overarching column -->
          <div class="column is-one-quarter left"> <!-- First nested column dividing the page -->
            <div class="columns is-multiline is-centered"> <!-- Preparation column for nesting the column that occupies the left side of the page -->
              <div class="column is-full"> <!-- Page description column -->
                <div class="hero-body">
                    <div class="container">
                      <div class="has-text-light">
                        <h1 class="title is-2 has-text-weight-medium">Portfolio</h1>
                        <p>Ranges from school assignments to professional work. 👨‍💻</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column"> <!-- Second nested column dividing the page -->
            <div class="columns is-multiline is-centered"> <!-- Preparation column for nesting the columns that occupy the right side of the page -->
              <div class="column is-one-third"> <!-- Project 1 card -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project">
                      <div class="card-header">
                        <div class="card-header-title card-1 is-centered"><p>School assignment</p></div>
                      </div>
                      <div class="card-image">
                        <figure class="image is-square is-mobile">
                          <img src="../assets/projectimages/portfolio/portfolio-thumb.jpg">
                        </figure>
                      </div>
                      <div class="card-content has-background-grey-dark">
                        <div class="media">
                          <div class="media-content">
                            <p class="title is-4">JS Framework portfolio website</p> <!-- Title -->
                          </div>
                        </div>
                        <div class="content">
                          <p class="subtitle is-6">Portfolio website created using the Vue.JS framework.</p>
                          <button class="button is-fullwidth has-background-grey-dark modal-button" v-on:click="isShowModal = true">
                            <p class="subtitle is-6">View project details</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- Project specific Modal -->
                    <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
                      <div class="modal-background" v-on:click="isShowModal = false"></div>
                      <div class="modal-card">
                        <header class="modal-card-head has-background-dark">
                          <p class="modal-card-title has-text-light">JS Framework portfolio website</p>
                          <button class="delete" aria-label="close" v-on:click="isShowModal = false"></button>
                        </header>
                        <section class="modal-card-body has-background-grey-dark has-text-light">
                          <div class="content">
                            <div class="columns">
                              <div class="column is-half">
                                <h3 class="has-text-light">About</h3>
                                <p>In my final year of my education we were given the assignment of creating a (web) application that would be beneficial to you in any way. So, I chose to create a portfolio website, something which I hadn't done yet. To challenge myself, I chose to develop it inside a JavaScript framework (Vue.JS) coupled with a bootstrap alternative (Bulma CSS).
                                <br />To assist with troubleshooting, I have chosen to take example of <a class="url" href="https://hellomark.dev/" target="_blank">Mark Johnson</a>'s helpful tutorial!</p>
                                <h3 class="has-text-light">Learning goals</h3>
                                <p>
                                Within this project the main goals I've set were as follows:
                                </p>
                                <ul>
                                  <li>Reinforce my knowledge of MVC</li>
                                  <li>Learn a JS framework</li>
                                  <li>Learn how Single Page Applications work</li>
                                  <li>Create a online space for personal expression and career marketing</li>
                                </ul>
                              </div>
                              <div class="column is-half">
                                <figure class="image is-multiline">
                                  <img class="zoom-img" src="../assets/projectimages/portfolio/portfolio1.jpg" v-on:click="isShowImgPortfolio1 = true">
                                  <img class="zoom-img" src="../assets/projectimages/portfolio/portfolio2.jpg" v-on:click="isShowImgPortfolio2 = true">
                                  <img class="zoom-img" src="../assets/projectimages/portfolio/portfolio3.jpg" v-on:click="isShowImgPortfolio3 = true">
                                </figure>
                              </div>
                            </div>
                            <!-- Image 1 modal -->
                            <div class="modal" v-bind:class="{ 'is-active': isShowImgPortfolio1 }">
                              <div class="modal-background" v-on:click="isShowImgPortfolio1 = false">
                                <button class="modal-close is-large" aria-label="close"></button>
                              </div>
                              <div class="modal-content zoom-img2">
                                <p class="image">
                                  <img src="../assets/projectimages/portfolio/portfolio1.jpg">
                                </p>
                              </div>
                            </div>
                            <!-- Image 2 modal -->
                            <div class="modal" v-bind:class="{ 'is-active': isShowImgPortfolio2 }">
                              <div class="modal-background" v-on:click="isShowImgPortfolio2 = false">
                                <button class="modal-close is-large" aria-label="close"></button>
                              </div>
                              <div class="modal-content zoom-img2">
                                <p class="image">
                                  <img src="../assets/projectimages/portfolio/portfolio2.jpg">
                                </p>
                              </div>
                            </div>
                            <!-- Image 3 modal -->
                            <div class="modal" v-bind:class="{ 'is-active': isShowImgPortfolio3 }">
                              <div class="modal-background" v-on:click="isShowImgPortfolio3 = false">
                                <button class="modal-close is-large" aria-label="close"></button>
                              </div>
                              <div class="modal-content zoom-img2">
                                <p class="image">
                                  <img src="../assets/projectimages/portfolio/portfolio3.jpg">
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>
                        <footer class="modal-card-foot has-background-dark">
                          <p>Feel free to <a class="url" href="https://github.com/alexanderbenerink/AmbitieProject" target="_blank">fork this site and see how it works!</a></p>
                          <!-- <button class="button has-background-grey-light" v-on:click="isShowModal = false">Close</button> -->
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-third"> <!-- Project 2 card -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project">
                      <div class="card-header">
                        <div class="card-header-title card-2 is-centered"><p>Internship assignment</p></div>
                      </div>
                      <div class="card-image">
                        <figure class="image is-square">
                          <img src="../assets/projectimages/avnctel/avnctel-thumb.jpg">
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
                    </div>
                    <!-- Project specific Modal -->
                    <div class="modal" v-bind:class="{ 'is-active': isShowModal2 }">
                      <div class="modal-background" v-on:click="isShowModal2 = false"></div>
                      <div class="modal-card">
                        <header class="modal-card-head has-background-dark">
                          <p class="modal-card-title has-text-light">AVNC Laravel CRUD Application</p>
                          <button class="delete" aria-label="close" v-on:click="isShowModal2 = false"></button>
                        </header>
                        <section class="modal-card-body has-background-grey-dark has-text-light">
                          <div class="content">
                            <div class="columns">
                              <div class="column is-half">
                                <h3 class="has-text-light">About</h3>
                                <p>
                                For my second internship, during the final year of my education, I was tasked with creating a phonebook inside the Laravel framework. This was not only to kind of gauge my skills but to also prove the company I had the necessary critical thinking skills and mental competence usually desired from a developer.
                                </p>
                                <h3 class="has-text-light">Learning goals</h3>
                                <p>
                                My learning goals for this project were:
                                </p>
                                <ul>
                                  <li>When and how to ask questions if I was stuck</li>
                                  <li>To learn how search and data sorting functions work inside Laravel</li>
                                  <li>How to perform CRUD (Create, Read, Update, Destroy) operations inside Laravel</li>
                                </ul>
                              </div>
                              <div class="column is-half">
                                <figure class="image is-multiline">
                                  <img class="zoom-img" src="../assets/projectimages/avnctel/avnctel1.jpg" v-on:click="isShowImgAvnctel1 = true">
                                  <img class="zoom-img" src="../assets/projectimages/avnctel/avnctel2.jpg" v-on:click="isShowImgAvnctel2 = true">
                                </figure>
                              </div>
                            </div>
                            <!-- Image 1 modal -->
                            <div class="modal" v-bind:class="{ 'is-active': isShowImgAvnctel1 }">
                              <div class="modal-background" v-on:click="isShowImgAvnctel1 = false">
                                <button class="modal-close is-large" aria-label="close"></button>
                              </div>
                              <div class="modal-content zoom-img2">
                                <p class="image">
                                  <img src="../assets/projectimages/avnctel/avnctel1.jpg">
                                </p>
                              </div>
                            </div>
                            <!-- Image 2 modal -->
                            <div class="modal" v-bind:class="{ 'is-active': isShowImgAvnctel2 }">
                              <div class="modal-background" v-on:click="isShowImgAvnctel2 = false">
                                <button class="modal-close is-large" aria-label="close"></button>
                              </div>
                              <div class="modal-content zoom-img2">
                                <p class="image">
                                  <img src="../assets/projectimages/avnctel/avnctel2.jpg">
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>
                        <footer class="modal-card-foot has-background-dark">
                          <a class="url" href="https://github.com/alexanderbenerink/avnctelefoonboek" target="_blank">See on Github</a>
                          <!-- <button class="button has-background-grey-light" v-on:click="isShowModal2 = false">Close</button> -->
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-one-third"> <!-- Project 3 card -->
                <div class="post-card">
                  <div class="card">
                    <div class="zoom-project">
                      <div class="card-header">
                        <div class="card-header-title card-3 is-centered"><p>School assignment</p></div>
                      </div>
                      <div class="card-image">
                        <figure class="image is-square">
                          <img src="../assets/projectimages/phpchat/phpchat-thumb.jpg">
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
                    </div>
                    <!-- Project specific Modal -->
                    <div class="modal" v-bind:class="{ 'is-active': isShowModal3 }">
                      <div class="modal-background" v-on:click="isShowModal3 = false"></div>
                      <div class="modal-card">
                        <header class="modal-card-head has-background-dark">
                          <p class="modal-card-title has-text-light">IRC-Style PHP Chat Application</p>
                          <button class="delete" aria-label="close" v-on:click="isShowModal3 = false"></button>
                        </header>
                        <section class="modal-card-body has-text-light has-background-grey-dark">
                          <div class="content">
                            <div class="columns">
                              <div class="column is-half">
                                <h3 class="has-text-light">About</h3>
                                <p>During my first year of my education in Application development, I was tasked with creating a chatroom using only PHP and a SQL database. In this project, you are able to create an account and use it to chat with other people. While it is incredibly basic, I got to learn how a rudimentary chat system could be implemented in a website using a few basic tools.</p>
                                <h3 class="has-text-light">Learning goals</h3>
                                <p>
                                My learning goals for this project were:
                                </p>
                                <ul>
                                  <li>How to create an online chat application in PHP</li>
                                  <li>How to perform CRUD (Create, Read, Update, Destroy) queries/operations using MySQLi</li>
                                  <li>How to create a login and registration system and hash passwords</li>
                                  <li>How to utilize cookies and sessions for the first time</li>
                                </ul>
                                <!-- <a class="url" href="https://github.com/alexanderbenerink/PHPChatAppFirstYear" target="_blank"><p>See on Github</p></a> -->
                              </div>
                              <div class="column is-half">
                                <figure class="image is-multiline">
                                  <img class="zoom-img" src="../assets/projectimages/phpchat/phpchat1.jpg" v-on:click="isShowImgPhpchat1 = true">
                                  <img class="zoom-img" src="../assets/projectimages/phpchat/phpchat2.jpg" v-on:click="isShowImgPhpchat2 = true">
                                  <img class="zoom-img" src="../assets/projectimages/phpchat/phpchat3.jpg" v-on:click="isShowImgPhpchat3 = true">
                                </figure>
                              </div>
                            </div>
                            <!-- Image 1 modal -->
                            <div class="modal" v-bind:class="{ 'is-active': isShowImgPhpchat1 }">
                              <div class="modal-background" v-on:click="isShowImgPhpchat1 = false">
                                <button class="modal-close is-large" aria-label="close"></button>
                              </div>
                              <div class="modal-content zoom-img2">
                                <p class="image">
                                  <img src="../assets/projectimages/phpchat/phpchat1.jpg">
                                </p>
                              </div>
                            </div>
                            <!-- Image 2 modal -->
                            <div class="modal" v-bind:class="{ 'is-active': isShowImgPhpchat2 }">
                              <div class="modal-background" v-on:click="isShowImgPhpchat2 = false">
                                <button class="modal-close is-large" aria-label="close"></button>
                              </div>
                              <div class="modal-content zoom-img2">
                                <p class="image">
                                  <img src="../assets/projectimages/phpchat/phpchat2.jpg">
                                </p>
                              </div>
                            </div>
                            <!-- Image 3 modal -->
                            <div class="modal" v-bind:class="{ 'is-active': isShowImgPhpchat3 }">
                              <div class="modal-background" v-on:click="isShowImgPhpchat3 = false">
                                <button class="modal-close is-large" aria-label="close"></button>
                              </div>
                              <div class="modal-content zoom-img2">
                                <p class="image">
                                  <img src="../assets/projectimages/phpchat/phpchat3.jpg">
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>
                        <footer class="modal-card-foot has-background-dark">
                          <!-- <button class="button has-background-grey-light" v-on:click="isShowModal3 = false">Close</button> -->
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
      isShowImgPortfolio1: false,
      isShowImgPortfolio2: false,
      isShowImgPortfolio3: false,
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

  .modal-card-head, .modal-card-foot{
    border-style: none;
  }

  .zoom-project, .zoom-img, .zoom-img2 {
    transition: transform .2s;
  }

  zoom-project {
    background-color: #363636;
  }

  .zoom-project:hover {
    transform: scale(1.02);
  }

  .zoom-img:hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }

  .zoom-img2:hover {
    transform: scale(2);
    cursor: zoom-in;
  }
</style>
