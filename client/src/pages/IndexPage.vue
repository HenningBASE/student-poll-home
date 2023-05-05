<template>
  <q-page class="page-padding">
    <q-card>
      <div style="max-height:300px;" class="relative-position overflow-hidden">
        <q-img src="~assets/BASESchool.jpg" alt="" width="100%"/>
        <q-img src="~assets/BASE-Candogram-partnership.jpg" style="width:300px; position: absolute; bottom: 10px; right: 10px;"/>
      </div>
    </q-card>
    <h3 class="text-center q-ma-none q-my-lg">NYC Student Job Interest Poll, SY 2022/2023</h3>
    <div class="row justify-between">
      <div class="col-md-7">
        <p>
          High school students are approaching the job market. As part of career connected learning we aim to: 
        </p>
        <ul>
            <li>Help students learn about jobs in demand in New York City</li>
            <li>Learn what job interest students have</li>
        </ul>

        <h6 class="q-ma-none q-mb-sm text-italic border-bottom">Jobs In Demand in New York City</h6>
        <p>
            We continously analyze 1,000,000 job postings of 2,000 employers in New York City spanning the past 12 months.
            For this poll we produce a list of 123 job titles which are in demand from the analysis. 
        </p>

        <h6 class="q-ma-none q-mb-sm text-italic border-bottom">Student Job Interest</h6>
        <p>
          Students vote <span class="text-bold">anonymously</span> for their favorite job. This can help orient education according to students' job preferences. 
        </p>

        <h6 class="q-ma-none q-mb-sm text-italic border-bottom">Results</h6>

        <ResultsPage />

      </div>
      <div class="col-md-4">
        <q-banner rounded class="bg-grey-3 q-pa-lg">
          <h6 class="q-ma-none">Show your job interest. Take the poll!</h6>
          <p style="font-size: 18px;">
            Below is a list of <i class="fab fa-aws"></i> application servers BASE students have built to enable peers to vote for their favorite job.
          </p>
          <p style="font-size: 18px;">
            Students built their application servers in the AWS cloud on EC2 instances using using a client-server architecture (aka full-stack) with Vue.js/Quasar, Node.js and MySQL.
          </p>
          <p class="q-mb-none" style="font-size: 18px;">
          Click on the name of a student to start the poll.
          </p>
        </q-banner>
        <q-list separator bordered>
          <q-item to="http://aissaiyah.bennett.bronxsoftware.com" href="http://aissaiyah.bennett.bronxsoftware.com" target="_blank">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-truck-monster" />
            </q-item-section>
            <q-item-section>
              Aissaiyah Bennett
            </q-item-section>
          </q-item>

          <q-item to="http://daisy.campos.bronxsoftware.com" href="http://daisy.campos.bronxsoftware.com" target="_blank">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-umbrella-beach" />
            </q-item-section>
            <q-item-section>
              Daisy Campos
            </q-item-section>
          </q-item>

          <q-item to="http://genaro.agustin.bronxsoftware.com" href="http://genaro.agustin.bronxsoftware.com" target="_blank">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-trophy" />
            </q-item-section>
            <q-item-section>
              Genaro Agustin
            </q-item-section>
          </q-item>

          <q-item to="http://yosniel.rosa.bronxsoftware.com" href="http://yosniel.rosa.bronxsoftware.com" target="_blank">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-rocket" />
            </q-item-section>
            <q-item-section>
              Yosniel Rosa
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>
<script>
import ResultsPage from 'pages/ResultsPage.vue'
export default {
  components: {
    ResultsPage
  }
}
</script>

<style>
.border-bottom {
  border-bottom: 1px solid #0e0
}
.page-padding {
  padding: 24px 64px;
}
</style>

