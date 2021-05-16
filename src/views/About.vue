<template>
  <div class="hero is-cover is-relative is-fullheight-with-navbar is-dark">
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="columns is-multiline is-vcentered">
          <div class="column is-one-quarter">
            <div class="columns">
              <div class="column is-full"> <!-- Page description -->
                <div class="hero-body">
                    <div class="container">
                      <div class="content has-text-light">
                        <h1 class="title is-2 has-text-weight-medium">Bio</h1>
                          <p>
                            I am a programmer from The Netherlands who is aspiring to one day become a full stack developer in the field of software engineering. In the following section you'll see the technologies I've worked with till so far.
                          </p>
                          <p>
                            I like tinkering with computers, software, websites and game engines. As a career choice I'm interested in working as a software engineer, which includes aspects of software- and webdevelopment from the design phase to post-production.
                          </p>
                          <p>
                           Some hobbies of mine include excercising, hanging with friends, learning how to program, read books and listening to music. My peers experience me as friendly, enthusiastic and eager-to-learn. I find that learning something new through a hands-on approach works the best for me (learning by doing). Every day I'm trying to do something new or productive to push my boundaries and improve.
                          </p>
                          <p>
                            Check out <router-link to="/media" class="url">this page to see my favorite books and movies</router-link>.
                          </p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-three-quarters">
            <div class="columns is-centered is-vcentered">
              <div class="column is-two-fifths"> <!-- Skill 1 card -->
                <div class="box has-background-grey-dark has-text-light">
                  <h3 class="title is-4 has-text-weight-medium">Software & Web Development</h3>
                  <div class="content">
                    <p>Some technologies I've worked with include:</p>
                    <ul>
                      <li>HTML5, PHP, JS, SQL, ASP.NET</li>
                      <li>PHP Frameworks such as Laravel and CakePHP</li>
                      <li>Jamstack projects using Vue.JS and Netlify</li>
                      <li>Bulma, Bootstrap, CSS3, Sass</li>
                      <li>Knowledge of WordPress, Joomla, Drupal and WooCommerce</li>
                      <li>Java (including Java FX and Swing), C#, Python</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="column is-two-fifths"> <!-- Skill 2 card -->
                <div class="box has-background-grey-dark has-text-light">
                  <h3 class="title is-4 has-text-weight-medium">Game Development/Spare time</h3>
                  <div class="content">
                    <p>
                      In my spare time I'd like to tinker on projects inside Unreal Engine 4. This also includes using Blender and modeling in UE4 itself, blueprinting, and messing with C++. 😁
                    </p>
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
  name: 'about'
}
</script>
