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
        <h6 class="q-ma-none q-mb-sm text-italic border-bottom">In Demand Jobs in New York City</h6>
        <p>
          We conduct a rolling analysis of the job postings from 2,000 New York City employers from which we build a list of job titles with a consistently high number of openings.
        </p>
        <p class="q-ma-none">
          The purpose of this project is:
        </p>
        <ol class="q-mt-sm">
          <li>Introduce students to job titles that are in high demand in New York City.</li>
          <li>Understand what jobs students are interested in.</li>
        </ol>
        <p>
          The result is published below in real-time. The vote is <span class="text-bold">anonymous</span>.
        </p>

        <h6 class="q-ma-none q-mb-sm text-italic border-bottom">Results</h6>
        <p>
          Select your school from the drop down box to view the polling result from your students. The default display shows the number of students who have participated by school.
        </p>
        <ResultsPage />

      </div>
      <div class="col-md-4">
        <q-banner rounded class="bg-grey-3 q-pa-lg">
          <h5 class="q-ma-none q-mb-sm text-bold">Take the poll!</h5>

          <p style="font-size: 18px;">
            Below is a list of students from the Bronx Academy of Software Engineering (BASE) who have built their NYC Student Job Interest Poll web app to enable peers to vote for their favorite job.
            The votes from all student web apps are collected in a single database. 
          </p>
          <p style="font-size: 18px;">
            As a capstone project students built their web app in the AWS cloud on EC2 instances using using a client-server architecture (aka full-stack) with Vue.js/Quasar, Node.js and MySQL.
          </p>
          <p class="q-mb-none text-bold" style="font-size: 18px;">
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
          <q-item to="http://gilbert.ortiz.jr.bronxsoftware.com" href="http://gilbert.ortiz.jr.bronxsoftware.com" target="_blank">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-plane" />
            </q-item-section>
            <q-item-section>
              Gilbert Ortiz Jr.
            </q-item-section>
          </q-item>
          <q-item to="http://brandon.nguyen.bronxsoftware.com" href="http://brandon.nguyen.bronxsoftware.com" target="_blank">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-motorcycle" />
            </q-item-section>
            <q-item-section>
              Brandon Nguyen
            </q-item-section>
          </q-item>
          <q-item to="http://kristoffer.waite.bronxsoftware.com/" href="http://kristoffer.waite.bronxsoftware.com/" target="_blank">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-basketball-ball" />
            </q-item-section>
            <q-item-section>
              Kristoffer Waite
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

