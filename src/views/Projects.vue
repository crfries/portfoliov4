<template>
  <div class="projects-container">
    <div
      v-for="(project, idx) in projects"
      :key="idx"
      class="project-outer-container"
    >
      <div class="project-container">
        <div class="project-image-container" :class="project.image">
          <div class="project-text-container fancy-6">
            <h4 class="project-text">{{ project.title }} :</h4>
          </div>
        </div>
        <div class="project-desc-container">
          <div class="mb-2">
            <p>{{ project.description }}</p>
          </div>
          <hr class="border-gray-400" />
          <div class="project-tech-container">
            <h5 class="prject-tech">Stack:</h5>
            <p class="ml-5">{{ project.tech }}</p>
          </div>
          <hr class="mb-3 border-gray-400" />
          <div class="flex flex-row">
            <h5 class="project-link">Links:</h5>
            <a :href="project.link" target="_blank" rel="no-referrer">
              <Icon
                icon="fa-brands:chrome"
                class="project-icon hvr-pulse-grow"
              />
            </a>
            <a
              :href="project.github"
              target="_blank"
              rel="no-referrer"
              v-if="project.image != 'Zippertubing'"
            >
              <Icon
                icon="fa-brands:github"
                class="project-icon hvr-pulse-grow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  data() {
    return {
      projects: [
        {
          title: "Zippertubing Co.",
          description:
            "I am currently a Web Developer for the company. I am largely responsible for the migration of the current website over to Vue. Currently it is built with Laravel using PHP and jQuery. I am also responsible for the frontend in the current version. Using VueEx to manage state across the platform and TailwindCss. Version control is handled through GitHub for all version branching. Repository is private, sorry.",
          image: "Zippertubing",
          link: "https://www.zippertubing.com",
          github: "sorry",
          tech: "HTML | CSS | Laravel | Vue | PHP | VueEx | MSql",
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
  components: {
    Icon,
  },
  
};
</script>

<style lang="scss" scoped>
.project-container {
  @apply w-[75vw] h-[30vh] m-5 border border-gray-400 flex flex-row;
  @media screen and (max-width: 1550px) {
    @apply h-[100%];
  }
  @media screen and (max-width: 1300px) {
    @apply flex-col h-[500px];
  }
  @media screen and (max-width: 678px) {
    @apply h-[auto] w-full m-0 p-0 my-5;
  }
}
.projects-container {
  @apply w-full h-full bg-blue grid place-content-center;
}
.project-desc-container {
  @apply w-[100%] h-[100%] bg-lightgray flex flex-col px-10 py-5  hover:bg-white;
}
.project-icon {
  @apply h-[30px] w-[30px] mx-3;
}
.project-image-container {
  @apply w-[100%] h-[100%] bg-cover bg-center;
  @media screen and (max-width: 1300px) {
    @apply h-[500px] w-[100%] bg-cover bg-center;
  }
}
.project-link {
  @apply font-secondary font-bold pb-5;
}
.project-tech {
  @apply font-secondary font-bold;
}
.project-tech-container {
  @apply mt-2 mb-1 flex flex-row;
}
.project-text {
  @apply font-secondary text-4xl p-5 text-lightgray float-right;
}
.project-text-container {
  @apply w-full h-full;
}
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
.Zippertubing {
  background-image: url("../assets/Zippertubing.jpg");
}

.fancy-6 {
  background: linear-gradient(45deg, transparent, transparent 0) right / 250%
      100% no-repeat,
    linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent) left / 250% 100%
      no-repeat;
  transition: 0.5s;
}
.fancy-6:hover {
  h4 {
    color: #275dadff;
  }
  background-position: center;
}
</style>