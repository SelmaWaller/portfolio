<script setup lang="ts">
import data from "~/data/cv.json";
import CVBodySection from "../cv/Section.vue";

const { head, body } = data.cv;
const { details, links, skills, languages, interests } = body.sidebar;
const { profile, employmentHistory, education, references } = body.content;
</script>

<template>
  <div class="cv">
    <div class="cv__head">
      <h2>
        {{ head.firstName }}<span>{{ head.lastName }}</span>
      </h2>
      <p>{{ head.jobTitle }}</p>
    </div>
    <div class="cv__body">
      <div class="cv__body--sidebar">
        <div class="divider"></div>
        <CVBodySection title="Details">
          <div>
            <h5>Address</h5>
            <p>{{ details.address }}</p>
            <h5>Phone</h5>
            <p>{{ details.phone }}</p>
            <h5>Date of birth</h5>
            <p>{{ details.dob }}</p>
          </div>
        </CVBodySection>

        <CVBodySection title="Links">
          <div v-for="(link, index) in links" :key="index">
            <a class="link" :href="link.url" target="_blank">{{ link.name }}</a>
          </div>
        </CVBodySection>

        <CVBodySection title="Skills">
          <div v-for="(skill, index) in skills" :key="index">
            <p>{{ skill.name }}</p>
            <div class="section__content--progress">
              <span :style="{ width: skill.level + '%' }"></span>
            </div>
          </div>
        </CVBodySection>

        <CVBodySection title="Languages">
          <div v-for="(language, index) in languages" :key="index">
            <p>{{ language.name }}</p>
            <div class="section__content--progress">
              <span
                class="section__content--progress-bar"
                :style="{ width: language.level + '%' }"
              ></span>
            </div>
          </div>
        </CVBodySection>

        <CVBodySection title="Interests">
          <ul v-for="(interest, index) in interests" :key="index">
            <li>- {{ interest }}</li>
          </ul>
        </CVBodySection>
      </div>

      <div class="cv__body--content">
        <CVBodySection :bodyContent="true" title="Profile">
          <p>{{ profile.text }}</p>
        </CVBodySection>

        <CVBodySection :bodyContent="true" title="Employment History">
          <div class="section__content--flex">
            <p>{{ employmentHistory.role }}, {{ employmentHistory.company }}</p>
            <p class="location">{{ employmentHistory.location }}</p>
          </div>
          <p>
            {{ employmentHistory.startDate }} &mdash;
            {{ employmentHistory.endDate }}
          </p>
          <p>{{ employmentHistory.description }}</p>
          <div class="section__content--projects">
            <p>
              {{ employmentHistory.projectHistoryTitle }}
            </p>
            <ul>
              <li
                v-for="(project, index) in employmentHistory.projectHistoryList"
                :key="index"
              >
                - {{ project }}
              </li>
            </ul>
            <p>
              {{ employmentHistory.projectHistoryDescription }}
            </p>
            <ul>
              <li
                v-for="(tool, index) in employmentHistory.projectHistoryTools"
                :key="index"
              >
                -
                {{ tool }}
              </li>
            </ul>
          </div>
        </CVBodySection>

        <CVBodySection :bodyContent="true" title="Education">
          <div class="section__content--flex">
            <p>{{ education.degree }}, {{ education.institution }}</p>
            <p class="location">{{ education.location }}</p>
          </div>
          <p>
            {{ education.startDate }} &mdash;
            {{ education.endDate }}
          </p>
          <p>{{ education.description }}</p>
          <p>Some of the skills acquired at this institution:</p>
          <ul v-for="(skill, index) in education.skills" :key="index">
            <li>- {{ skill }}</li>
          </ul>
        </CVBodySection>

        <CVBodySection :bodyContent="true" title="References">
          <p>{{ references.text }}</p>
        </CVBodySection>
      </div>
    </div>
  </div>
</template>
