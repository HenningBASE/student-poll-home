<template>
  <q-page class="page-padding">
    <q-card>
      <div style="max-height:300px;" class="relative-position overflow-hidden">
        <q-img src="~assets/BASESchool.jpg" alt="" width="100%"/>
        <q-img src="~assets/BASELogo.jpg" style="width:100px; position: absolute; bottom: 10px; right: 10px;"/>
      </div>
    </q-card>
    <h4 class="text-center q-ma-none q-my-lg">Student Job Interest Survey, SY 2022/2023</h4>
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
            For this survey we analyzed the job postings of 2,000 employers in New York City.
            From the analysis we produced a list of about 120 job titles which have a significant number of open openings. 
            From the list students learn about jobs they may not familiar with giving them new employment options while aligning with employer needs.
        </p>

        <h6 class="q-ma-none q-mb-sm text-italic border-bottom">Student Job Interest</h6>
        <p>
          We survey the interest of students in specific jobs. This allows for a conversation about allocating school budgets for Career and Technical Education (CTE) according student job preferences. 
        </p>

        <h6 class="q-ma-none q-mb-sm text-italic border-bottom">Results</h6>

        <ResultsPage />

      </div>
      <div class="col-md-4">
        <q-banner rounded class="bg-grey-3 q-pa-lg">
          <h6 class="q-ma-none">Application Servers <i class="fab fa-aws"></i></h6>
          <p style="font-size: 18px;">
            Below is a list of application servers BASE students have built to enable peers to vote for their favorite job.
          </p>
          <p style="font-size: 18px;">
            Students built their application servers in the AWS cloud using EC2 instances.
          </p>
          <p class="q-mb-none" style="font-size: 18px;">
          Click on the name of a student to start the survey
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

