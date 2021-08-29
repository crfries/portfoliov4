<template>
  <div class="w-full h-full bg-blue grid place-content-center pt-10">
    <div v-for="(project, idx) in projects" v-bind:key="idx">
      <ul>
        <li>
          <div class="w-[75vw] h-60 m-5 border border-darkgray">
            <div class="w-[50%] h-[100%] bg-cover" :class="`${project.title}`">
              <div class="w-full h-full bg-[rgba(0,0,0,.6)]">
                <h4
                  class="font-secondary text-4xl p-5 text-lightgray float-right"
                >
                  {{ project.title }} :
                </h4>
              </div>
            </div>
          </div>
        </li>
      </ul>
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
          image: "../assets/Mazeraa.jpg",
          link: "https://wwww.zippertubing.com",
          github: "Private",
          tech: "HTML | CSS | Vue | PHP | VueEx | MSql",
        },
        {
          title: "Mazeraa",
          description:
            "Working with Authentication and Authorization (JWT). Implementing pagination system for products and reviews to reduce loading time. Integrated PayPal API for payment processing. Admin page to administed CRUD operations for products and customers. Creating API for server handled by Express. Global state management through Redux. Responsive first design and mobile formatting. ",
          image: "../assets/Mazeraa.jpg",
          link: "https://www.mazeraa.com/",
          github: "https://github.com/crfries/Mazeraa",
          tech: "HTML | CSS | React | Redux | Express | MongoDB",
        },
        {
          title: "Phoenix Agency",
          description:
            "Website I created for a mock agency client. Utilizing React with Framer-Motion allows seamless transitions and animations.",
          image: "../assets/phoenixagency.jpg",
          link: "https://phoenix-agency.netlify.app",
          github: "https://github.com/crfries/Phoenix-agency",
          tech: "HTML | CSS | React | Framer-Motion | Styled-Components",
        },
        {
          title: "WhatsUpp",
          description:
            "Clone of the popular Whatsapp messaging service. Using Next.JS framework creates a blazing fast one-to-one communication using Google auth. Firebase handles all backend operations.",
          image: "../assets/Whatsupp.jpg",
          link: "https://whatsupp.vercel.app/",
          github: "https://github.com/crfries/whatsupp",
          tech: "HTML | CSS | Next.Js | Firebase | Styled-Components",
        },

        {
          title: "Expense",
          description:
            "Expense tracker utilizing local storage to store user data. Uses speechly api to allow adding and removing expenses. Chart.JS handles organizing data in a readable manner. Material-UI is used for styling and creating a responsive first design and mobile formatting.",
          image: "../assets/Expense.jpg",
          link: "https://cf-exp-tracker.netlify.app/",
          github: "https://github.com/crfries/expense-tracker",
          tech: "HTML | CSS | React | Material-UI | Speechly",
        },
        {
          title: "Music",
          description: "SPA that streams free to use music. Hosted on Netlify.",
          image: "../assets/Music.jpg",
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
</style>