<template>
<!--   <div class="column is-one-quarter"> -->
    <div class="post-card"> <!-- Movie card -->
      <div class="card">
        <div class="zoom-project" v-once>
          <div class="card-image">
            <figure class="image is-mobile">
              <img :src="image" alt="Image unavailable">
            </figure>
          </div>
          <div class="card-header">
            <div class="card-header-title is-centered has-text-light">
              <a :href="link">
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
    title: String,
    image: String,
    link: String
  }
}
</script>
