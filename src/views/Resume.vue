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
<!--           <div class="column is-half">
            <div class="box has-background-dark has-text-light">
              <main class="content">
                <section v-for="resume in resumes" v-bind:key="resume.id">
                  <ResumeComponent v-bind="resume"></ResumeComponent>
                </section>
              </main>
            </div>
          </div> -->
          <div class="column is-half">
            <div class="box has-background-grey-dark has-text-light">
              <main class="content">
                <section>
                  <h1 class="title has-text-weight-medium">
                    <blockquote class="has-background-grey">
                      Resume Alexander Benerink
                    </blockquote>
                  </h1>
                  <summary>Programmer</summary>
                  <p>Focused on software and webdevelopment</p>
                </section>
                  <br />
                <section>
                  <h1 class="title is-5 has-text-weight-medium">
                    <blockquote class="has-background-grey">
                      Personalia
                    </blockquote>
                  </h1>
                  <summary>The Netherlands</summary>
                  <p>alexander@benerink.online</p>
                </section>
                  <br />
                <section>
                  <h1 class="title is-5 has-text-weight-medium">
                    <blockquote class="has-background-grey">
                      Education
                    </blockquote>
                  </h1>
                  <section>
                    <summary>Application- and mediadevelopment, graduated at ROC Aventus, Apeldoorn</summary>
                    <p>July 2020 - August 2017</p>
                  </section>
                </section>
                  <br />
                <section>
                  <h1 class="title is-5 has-text-weight-medium">
                    <blockquote class="has-background-grey">
                      Work Experience
                    </blockquote>
                  </h1>
                  <section>
                    <summary>Internship at Avancé Communicatie as webdeveloper (Front & Backend)</summary>
                    <p>June 2020 - February 2020</p>
                    <p>Keywords: Laravel/PHP, Bootstrap, Mantis, HTML5/CSS3, System Administration</p>
                  </section>
                    <br />
                  <section>
                    <summary>Internship at Ludejo B.V. as webdeveloper (Front & Backend)</summary>
                    <p>February 2019 - September 2018</p>
                    <p>Keywords: WordPress/PHP, PostgreSQL, System Administration</p>
                  </section>
                </section>
                  <br />
                <section>
                  <h1 class="title is-5 has-text-weight-medium">
                    <blockquote class="has-background-grey">
                      Courses/Skills/Languages
                    </blockquote>
                  </h1>
                  <section>
                    <summary>Programming languages</summary>
                    <p>Most comfortable: HTML5 and PHP. Knowledge of Java, C#, JavaScript, Laravel and VueJS. Basic C++ and Axios</p>
                  </section>
                    <br />
                  <section>
                    <summary>Languages</summary>
                    <p>Native Dutch. Fluent in written and spoken English</p>
                  </section>
                    <br />
                  <section>
                    <summary>Applications/tools</summary>
                    <p>Airtable and it's API, Claris FileMaker, Mantis Bug Tracker, Homestead/Vagrant, HeidiSQL, PHPMyAdmin, Cisco Packet Tracer, Unreal Engine 4</p>
                  </section>
                    <br />
                  <section>
                    <summary>MTA Certified in:</summary>
                    <ul>
                      <li>98-364: Database Administration Fundamentals</li>
                      <li>98-361: Software Development Fundamentals</li>
                      <li>98-375: HTML5 Application Development Fundamentals</li>
                      <li>98-367: Security Fundamentals</li>
                    </ul>
                  </section>
                </section>
                  <br />
                <section>
                  <h1 class="title is-5 has-text-weight-medium">
                    <blockquote class="has-background-grey">
                      Interests
                    </blockquote>
                  </h1>
                  <section>
                    <table>
                      <tr>
                        <td>Weight lifting</td>
                        <td>Reading</td>
                      </tr>
                      <tr>
                        <td>Jogging</td>
                        <td>Personal projects</td>
                      </tr>
                      <tr>
                        <td>Video games</td>
                        <td>Watching movies</td>
                      </tr>
                    </table>
                  </section>
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
// import ResumeService from '@/services/ResumeService'
// import ResumeComponent from '@/components/ResumeComponent'
export default {
  name: 'resume'
  // components: {
  //   ResumeComponent
  // },
  // data () {
  //   return {
  //     airtableResponse: []
  //   }
  // },
  // mounted: function () {
  //   let self = this
  //   async function getResume () {
  //     try {
  //       const response = await ResumeService.getResume()
  //       console.log(response)
  //       self.airtableResponse = response.data.records
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getResume()
  // },
  // computed: {
  //   resumes () {
  //     const self = this
  //     const resumeList = []
  //     for (var i = 0; i < self.airtableResponse.length; i++) {
  //       if (self.airtableResponse[i].fields.Published) {
  //         const resume = {
  //           header: self.airtableResponse[i].fields.Header,
  //           description: self.airtableResponse[i].fields.Description,
  //           content: self.airtableResponse[i].fields.Content
  //         }
  //         resumeList.push(resume)
  //       }
  //     }
  //     return resumeList
  //   }
  // }
}
</script>
