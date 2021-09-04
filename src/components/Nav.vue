<template>
  <nav class="nav-container">
    <div class="logo">
      <a href="/">
        <div class="logo-container">
          <h1 class="logo-text thick-3">CF</h1>
        </div>
      </a>
    </div>
    <div class="link-container">
      <div class="w-full">
        <ul class="link-list">
          <router-link to="/projects">
            <li class="sliding-8">
              <span>01 | Projects</span>
            </li>
          </router-link>
          <router-link to="/contact">
            <li class="sliding-8">
              <span>02 | Contact</span>
            </li>
          </router-link>
          <a href="/">
            <li class="sliding-8">03 |<span>Resume</span></li>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.link-container {
  @apply w-[50%] h-[100px] float-right bg-lightgray flex items-center justify-center;
  @media screen and (max-width: 768px) {
    @apply w-full;
  }
}
.link-list {
  @apply flex w-full text-xl text-blue justify-evenly;
  @media screen and (max-width: 768px) {
    @apply text-lg;
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