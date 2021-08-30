<template>
  <div class="w-full h-full bg-blue grid place-content-center pt-10">
    <div v-for="(project, idx) in projects" v-bind:key="idx">
      <div class="w-[75vw] h-[30vh] m-5 border border-gray-400 flex flex-row">
        <div class="w-[100%] h-[100%] bg-cover" :class="`${project.image}`">
          <div class="w-full h-full bg-[rgba(0,0,0,.6)]">
            <h4 class="font-secondary text-4xl p-5 text-lightgray float-right">
              {{ project.title }} :
            </h4>
          </div>
        </div>
        <div class="w-[100%] h-[100%] bg-lightgray flex flex-col px-10 pt-5">
          <div class="mb-2">
            <p>{{ project.description }}</p>
          </div>
          <hr class="border-gray-400" />
          <div class="mt-2 mb-1 flex flex-row">
            <h5 class="font-secondary font-bold">Stack:</h5>
            <p class="ml-5">{{ project.tech }}</p>
          </div>
          <hr class="mb-3 border-gray-400" />
          <div class="flex flex-row">
            <h5 class="font-secondary font-bold">Links:</h5>
            <a :href="`${project.link}`" target="_blank" rel="no-referrer">
              <font-awesome-icon
                icon="window-maximize"
                size="lg"
                class="ml-5"
              ></font-awesome-icon>
            </a>
            <a :href="`${project.github}`" target="_blank" rel="no-referrer">
              <font-awesome-icon
                :icon="['fab', 'github-square']"
                size="lg"
                class="ml-5"
              ></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Zippertubing Co.",
          description:
            "I am currently a Web Developer for the company. I am largely responsible for the migration of the current website over to Vue. Currently it is built with Laravel using PHP and jQuery. I am also responsible for the frontend in the current version. Using VueEx to manage state across the platform and TailwindCss. Version control is handled through GitHub for all version branching.",
          image: "Mazeraa",
          link: "https://www.zippertubing.com",
          github: "/",
          tech: "HTML | CSS | Vue | PHP | VueEx | MSql",
        },
        {
          title: "Mazeraa",
          description:
            "Working with Authentication and Authorization (JWT). Implementing pagination system for products and reviews to reduce loading time. Integrated PayPal API for payment processing. Admin page to administed CRUD operations for products and customers. Creating API for server handled by Express. Global state management through Redux. Responsive first design and mobile formatting. ",
          image: "Mazeraa",
          link: "https://www.mazeraa.com/",
          github: "https://github.com/crfries/Mazeraa",
          tech: "HTML | CSS | React | Redux | Express | MongoDB",
        },
        {
          title: "Phoenix Agency",
          description:
            "Website I created for a mock agency client. Utilizing React with Framer-Motion allows seamless transitions and animations.",
          image: "PhoenixAgency",
          link: "https://phoenix-agency.netlify.app",
          github: "https://github.com/crfries/Phoenix-agency",
          tech: "HTML | CSS | React | Framer-Motion | Styled-Components",
        },
        {
          title: "WhatsUpp",
          description:
            "Clone of the popular Whatsapp messaging service. Using Next.JS framework creates a blazing fast one-to-one communication using Google auth. Firebase handles all backend operations.",
          image: "Whatsupp",
          link: "https://whatsupp.vercel.app/",
          github: "https://github.com/crfries/whatsupp",
          tech: "HTML | CSS | Next.Js | Firebase | Styled-Components",
        },

        {
          title: "Expense",
          description:
            "Expense tracker utilizing local storage to store user data. Uses speechly api to allow adding and removing expenses. Chart.JS handles organizing data in a readable manner. Material-UI is used for styling and creating a responsive first design and mobile formatting.",
          image: "Expense",
          link: "https://cf-exp-tracker.netlify.app/",
          github: "https://github.com/crfries/expense-tracker",
          tech: "HTML | CSS | React | Material-UI | Speechly",
        },
        {
          title: "Music",
          description: "SPA that streams free to use music. Hosted on Netlify.",
          image: "Music",
          link: "https://cfries-mediaplayer.netlify.app/",
          github: "https://github.com/crfries/music-player",
          tech: "HTML | CSS | React ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Mazeraa {
  background-image: url("../assets/Mazeraa.jpg");
}
.Music {
  background-image: url("../assets/Music.jpg");
}
.Expense {
  background-image: url("../assets/Expense.jpg");
}
.Whatsupp {
  background-image: url("../assets/Whatsupp.jpg");
}
.PhoenixAgency {
  background-image: url("../assets/phoenixagency.jpg");
}
</style>