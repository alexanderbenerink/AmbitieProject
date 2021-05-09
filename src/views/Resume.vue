<template>
  <section class="hero is-cover is-relative is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline is-centered">
<!--           <div class="column">
            <div class="has-text-light">
              <h1 class="title is-2 has-text-weight-medium">CV</h1>
              <p>If you have any questions, you can contact me using one of the following links. 😃</p>
            </div>
          </div> -->
          <div class="column is-half">
            <div class="box has-background-dark has-text-light">
              <main class="content">
                <section v-for="resume in resumes" v-bind:key="resume.id">
                  <ResumeComponent v-bind="resume"></ResumeComponent>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ResumeService from '@/services/ResumeService'
import ResumeComponent from '@/components/ResumeComponent'
export default {
  name: 'resume',
  components: {
    ResumeComponent
  },
  data () {
    return {
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getResume () {
      try {
        const response = await ResumeService.getResume()
        console.log(response)
        self.airtableResponse = response.data.records
      } catch (err) {
        console.log(err)
      }
    }
    getResume()
  },
  computed: {
    resumes () {
      const self = this
      const resumeList = []
      for (var i = 0; i < self.airtableResponse.length; i++) {
        if (self.airtableResponse[i].fields.Published) {
          const resume = {
            header: self.airtableResponse[i].fields.Header,
            description: self.airtableResponse[i].fields.Description,
            content: self.airtableResponse[i].fields.Content
          }
          resumeList.push(resume)
        }
      }
      return resumeList
    }
  }
}
</script>
