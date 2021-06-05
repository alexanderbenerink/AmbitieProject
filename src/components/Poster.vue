<template>
<!--   <div class="column is-one-quarter"> -->
    <div class="post-card"> <!-- Movie card -->
      <div class="card">
        <div class="zoom-project" v-once>
          <div class="card-image">
            <figure class="image is-mobile">
              <img :src="image" alt="Loading image.." width="250" height="368">
            </figure>
          </div>
          <div class="card-header">
            <div class="card-header-title is-centered has-text-light">
              <a :href="link" target="_blank">
                <p>{{title}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--   </div> -->
</template>

<script>
export default {
  name: 'Poster',
  props: {
    image: String,
    link: String,
    title: String
  }
}
</script>
