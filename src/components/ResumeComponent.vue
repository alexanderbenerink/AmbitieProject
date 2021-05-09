<template>
<!--   <section> -->
  <div>
    <h1 class="title is-5 has-text-weight-medium">
      <blockquote class="has-background-dark">
        {{header}}
      </blockquote>
    </h1>
    <summary>{{description}}</summary>
    <content>
      <p>{{content}}</p>
    </content>
    <br />
  </div>
<!--   </section> -->
</template>

<script>
export default {
  name: 'ResumeComponent',
  props: {
    header: String,
    description: String,
    content: String
  }
}
</script>
