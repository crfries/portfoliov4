<template>
  <nav class="nav-container">
    <div class="logo">
      <a href="/">
        <div class="logo-container">
          <h1 class="logo-text" :class="{ 'thick-3': !isMobile }">CF</h1>
        </div>
      </a>
    </div>
    <div class="link-container">
      <div class="w-full">
        <ul class="link-list">
          <router-link to="/projects" class="link">
            <li :class="{ 'sliding-8': !isMobile }">
              <span>01 | Projects</span>
            </li>
          </router-link>
          <router-link to="/contact" class="link">
            <li :class="{ 'sliding-8': !isMobile }">
              <span>02 | Contact</span>
            </li>
          </router-link>
          <a
            href="https://drive.google.com/file/d/1WyM27t6Yq-CYIR-VQNPgeEqnu2h61_je/view?usp=sharing"
            target="_blank"
            class="link"
          >
            <li :class="{ 'sliding-8': !isMobile }">
              03 | <span>Resume</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobile: null,
      Resume: "../assets/Resume.pdf",
    };
  },
  methods: {
    checkMobile() {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    openWindow() {
      window.open(this.Resume, "_blank");
    },
  },
  mounted() {
    this.checkMobile();
  },
};
</script>


<style lang="scss" scoped>
.link {
  @apply grid place-content-center text-center;
}
.link-container {
  @apply w-[50%] h-[100px] float-right bg-lightgray flex items-center justify-center;
  @media screen and (max-width: 768px) {
    @apply w-full float-none;
  }
  @media screen and (max-width: 400px) {
    @apply h-auto;
  }
}
.link-list {
  @apply flex w-full text-xl text-blue justify-evenly;
  @media screen and (max-width: 768px) {
    @apply text-lg;
  }
  @media screen and (max-width: 400px) {
    @apply flex-col;
  }
}
.logo {
  @apply w-[50%] h-[100px] bg-lightgray float-left;
  @media screen and (max-width: 768px) {
    @apply w-full h-auto pt-3;
  }
}
.logo-container {
  @apply w-[150px] h-full text-center;
  @media screen and (max-width: 768px) {
    @apply w-full;
  }
}
.logo-text {
  @apply text-5xl text-blue h-full w-full grid place-content-center;

  @media screen and (max-width: 768px) {
  }
}
.nav-container {
  @apply h-full flex flex-row justify-between place-items-center;
  @media screen and (max-width: 768px) {
    @apply flex-col;
  }
}

.sliding-8 {
  width: 130px;
  height: 60px;
  text-shadow: -11ch 0 #fff;
  text-indent: var(--t, -1rem);
  background: linear-gradient(#275dadff 0 0) left/var(--d, 0) 100% no-repeat;
  transition: 0.5s linear;
}

.sliding-8:hover {
  --d: 100%;
  --t: -0.5ch;
  color: #fff;
}
li[class] {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  padding: 15px;
}

.thick-3 {
  background: linear-gradient(#275dadff 0 0) 0% calc(-3px - 100%) / var(--d, 0%)
    200% no-repeat;
  transition: 0.3s, background-size 0.3s 0.3s;
}
.thick-3:hover {
  --d: 100%;
  background-position: 50% 0%;
  color: #fcf7f8ff;
  transition: 0.3s, background-position 0.3s 0.3s, color 0.3s 0.3s;
}
</style>