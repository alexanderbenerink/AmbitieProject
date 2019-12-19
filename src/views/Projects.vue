<template>
  <div class="projects">
    <!-- Hero header describing this page -->
    <section class="hero is-medium is-dark">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-2">
                    <P>Portfolio, skills and certifications.</P>
                </h1>
                <h2 class="subtitle is-4">
                    <p>Below are a bunch of projects I've worked on. And some information about my skills and certifications. 👨‍💻</p>
                </h2>
            </div>
        </div>
    </section>
    <!-- Section with my projects in containers -->
    <section class="section">
      <div class="container is-fluid">
        <div class="columns is-multiline is-centered">
          <div class="column is-one-quarter"> <!-- Project 1 card -->
            <div class="post-card">
              <a class=""> <!--link to specific page perhaps?-->
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-square">
                      <img src="../assets/projectimages/postcards/project-x.jpg">
                    </figure>
                  </div>
                  <div class="card-content has-background-grey-dark">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Project 1</p> <!-- Title project card -->
                      </div>
                    </div>
                    <div class="content">
                      <p class="subtitle is-6">Hardcoded title & summary, might have to implement text interpolation..</p> <!-- Summary project -->
                      <button class="button is-fullwidth has-background-grey-dark"><p class="subtitle is-6">View project</p></button> <!-- Button that will lead you to specific page -->
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="column is-one-quarter"> <!-- Project 2 card -->
            <div class="post-card">
              <a class=""> <!--link to specific page perhaps?-->
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-square">
                      <img src="../assets/projectimages/postcards/project-x.jpg">
                    </figure>
                  </div>
                  <div class="card-content has-background-grey-dark">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Project 2</p> <!-- Title project card -->
                      </div>
                    </div>
                    <div class="content">
                      <p class="subtitle is-6">Hardcoded title & summary, might have to implement text interpolation..</p> <!-- Summary project -->
                      <button class="button is-fullwidth has-background-grey-dark"><p class="subtitle is-6">View project</p></button> <!-- Button that will lead you to specific page -->
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="column is-one-quarter"> <!-- Project 3 card -->
            <div class="post-card">
              <a class=""> <!--link to specific page perhaps?-->
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-square">
                      <img src="../assets/projectimages/postcards/project-x.jpg">
                    </figure>
                  </div>
                  <div class="card-content has-background-grey-dark">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Project 3</p> <!-- Title project card -->
                      </div>
                    </div>
                    <div class="content">
                      <p class="subtitle is-6">Hardcoded title & summary, might have to implement text interpolation..</p> <!-- Summary project -->
                      <button class="button is-fullwidth has-background-grey-dark"><p class="subtitle is-6">View project</p></button> <!-- Button that will lead you to specific page -->
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section about my certifications -->
    <section class="section">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">My certifications</h2>
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box has-background-grey-dark has-text-light">
              <h3 class="title is-4 has-text-weight-medium">Certification 1</h3>
              <p>Description about certification 1</p>
            </div>
          </div>
          <div class="column">
            <div class="box has-background-grey-dark has-text-light">
              <h3 class="title is-4 has-text-weight-medium">Certification 2</h3>
              <p>Description about certification 2</p>
            </div>
          </div>
          <div class="column">
            <div class="box has-background-grey-dark has-text-light">
              <h3 class="title is-4 has-text-weight-medium">Certification 3</h3>
              <p>Description about certification 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'projects'
}
</script>
