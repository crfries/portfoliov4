<template>
  <footer class="w-full h-full flex flex-row bottom-0">
    <div class="w-[50%] h-20 bg-lightgray">
      <ul class="h-full flex flew-row justify-evenly font-secondary uppercase">
        <a
          href="https://github.com/crfries"
          class="
            w-[100%]
            h-[100%]
            self-center
            grid
            place-content-center
            footer-icon
            fancy-6
          "
          target="_blank"
        >
          <Icon icon="fa-brands:github-alt" class="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/corey-fries-32755720a/"
          class="
            w-[100%]
            h-[100%]
            self-center
            text-center
            grid
            place-content-center
            footer-icon
            fancy-6
          "
          target="_blank"
        >
          <Icon icon="fa-brands:linkedin" class="icon" />
        </a>
        <a
          href="mailto:coreyrfries@gmail.com"
          class="
            w-[100%]
            h-[100%]
            self-center
            text-center
            grid
            place-content-center
            footer-icon
            fancy-6
          "
        >
          <Icon icon="entypo:email" class="icon" />
        </a>
      </ul>
    </div>
    <div class="w-[50%] h-20 bg-lightgray">
      <div class="h-full">
        <Icon icon="akar-icons:html-fill" />
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
</style>