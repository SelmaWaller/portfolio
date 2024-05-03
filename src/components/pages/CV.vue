<script setup lang="ts">
import data from "~/data/cv.json";
const head = data.cv.head;
const details = data.cv.body.sidebar.details;
const links = data.cv.body.sidebar.links;
const skills = data.cv.body.sidebar.skills;
const languages = data.cv.body.sidebar.languages;
const interests = data.cv.body.sidebar.interests;
const profile = data.cv.body.content.profile;
const employmentHistory = data.cv.body.content.employmentHistory;
const education = data.cv.body.content.education;
const references = data.cv.body.content.references;
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
        <div class="section">
          <h3>Details</h3>
          <div class="heading-element"></div>
          <div class="section__content">
            <h5>Address</h5>
            <p>{{ details.address }}</p>
            <h5>Phone</h5>
            <p>{{ details.phone }}</p>
            <h5>Email</h5>
            <p>{{ details.email }}</p>
            <h5>Date of birth</h5>
            <p>{{ details.dob }}</p>
          </div>
        </div>

        <div class="section">
          <h3>Links</h3>
          <div class="heading-element"></div>
          <div
            class="section__content"
            v-for="(link, index) in links"
            :key="index"
          >
            <a class="link" :href="link.url" target="_blank">{{ link.name }}</a>
          </div>
        </div>

        <div class="section">
          <h3>Skills</h3>
          <div class="heading-element"></div>
          <div
            class="section__content"
            v-for="(skill, index) in skills"
            :key="index"
          >
            <p>{{ skill.name }}</p>
            <div class="section__content--progress">
              <span :style="{ width: skill.level }"></span>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>Languages</h3>
          <div class="heading-element"></div>
          <div
            class="section__content"
            v-for="(language, index) in languages"
            :key="index"
          >
            <p>{{ language.name }}</p>
            <div class="section__content--progress">
              <span
                class="section__content--progress-bar"
                :style="{ width: language.level }"
              ></span>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>Interests</h3>
          <div class="heading-element"></div>
          <ul
            class="section__content"
            v-for="(interest, index) in interests"
            :key="index"
          >
            <li>- {{ interest }}</li>
          </ul>
        </div>
      </div>

      <div class="cv__body--content">
        <div class="section">
          <h3>Profile</h3>
          <div class="heading-element"></div>
          <p>{{ profile.text }}</p>
        </div>

        <div class="section">
          <div class="section__divider"></div>
          <h3>Employment History</h3>
          <div class="heading-element"></div>
          <div class="section__content--flex">
            <p>{{ employmentHistory.role }}, {{ employmentHistory.company }}</p>
            <p>{{ employmentHistory.location }}</p>
          </div>
          <p>
            {{ employmentHistory.startDate }} &mdash;
            {{ employmentHistory.endDate }}
          </p>
          <p>{{ employmentHistory.description }}</p>
        </div>

        <div class="section">
          <div class="section__divider"></div>
          <h3>Education</h3>
          <div class="heading-element"></div>
          <div class="section__content--flex">
            <p>{{ education.degree }}, {{ education.institution }}</p>
            <p>{{ education.location }}</p>
          </div>
          <p>
            {{ education.startDate }} &mdash;
            {{ education.endDate }}
          </p>
          <p>{{ education.description }}</p>
          <p>Some of the skills aquired at this institution:</p>
          <ul v-for="(skill, index) in education.skills" :key="index">
            <li>- {{ skill }}</li>
          </ul>
        </div>

        <div class="section">
          <div class="section__divider"></div>
          <h3>References</h3>
          <div class="heading-element"></div>
          <p>{{ references.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
