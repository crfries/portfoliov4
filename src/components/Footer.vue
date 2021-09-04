<template>
  <footer class="footer-container">
    <div class="links-container">
      <ul class="links-list">
        <a
          href="https://github.com/crfries"
          class="footer-icon fancy-6"
          target="_blank"
        >
          <Icon icon="fa-brands:github-alt" class="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/corey-fries-32755720a/"
          class="footer-icon fancy-6"
          target="_blank"
        >
          <Icon icon="fa-brands:linkedin" class="icon" />
        </a>
        <router-link to="/contact" class="footer-icon fancy-6">
          <Icon icon="entypo:email" class="icon" />
        </router-link>
      </ul>
    </div>
    <div class="tech-container">
      <div class="tech-secondary-container">
        <Icon icon="akar-icons:html-fill" class="tech" />
        <Icon icon="akar-icons:css-fill" class="tech" />
        <Icon icon="akar-icons:javascript-fill" class="tech" />
        <Icon icon="akar-icons:vue-fill" class="tech" />
        <Icon icon="akar-icons:react-fill" class="tech" />
        <Icon icon="akar-icons:php-fill" class="tech" />
        <Icon icon="cib:laravel" class="tech" />
        <Icon icon="cib:mysql" class="tech" />
        <Icon icon="simple-icons:microsoftsqlserver" class="tech" />
        <Icon icon="whh:nosql" class="tech" />
      </div>
    </div>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "Footer",
  components: { Icon },
};
</script>

<style lang="scss" scoped>
// *Tailwind CSS classes
.footer-container {
  @apply w-full h-full flex flex-row bottom-0;
}
.links-container {
  @apply w-[50%] h-20 bg-lightgray;
}
.links-list {
  @apply h-full flex flex-row justify-evenly font-secondary uppercase;
}
.tech-container {
  @apply w-[50%] h-20 bg-lightgray;
}
.tech-secondary-container {
  @apply h-full flex flex-row justify-between place-items-center;
}

// !Custom CSS classes
.fancy-6 {
  background: linear-gradient(45deg, #fff 50%, transparent 0) right / 250% 100%
      no-repeat,
    linear-gradient(45deg, transparent 50%, #fff 0) left / 250% 100% no-repeat;
}
.fancy-6:hover {
  background-position: center;
  transition: 0.5s;
}
.footer-icon {
  @apply w-[100%] h-[100%] self-center grid place-content-center;

  transition: all 0.3s ease;

  .icon {
    transition: all 0.3s ease;

    height: 35px;
    width: 35px;
    color: black;
  }

  &:hover {
    .icon {
      color: #275dadff;
      transform: scale(1.3);
    }
  }
}

.tech {
  height: 20px;
  width: 20px;
  transition: all 0.3s ease;
  margin: 0 25px;
  &:hover {
    color: #275dadff;
    transform: scale(2);
  }
}
</style>