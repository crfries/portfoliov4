<template>
  <nav class="w-full h-auto font-main z-10 sticky top-0">
    <div class="w-[50%] h-[100px] bg-lightgray float-left">
      <a href="/">
        <div class="w-[150px] h-full text-center">
          <h1
            class="
              text-5xl text-blue
              thick-3
              h-full
              w-full
              grid
              place-content-center
            "
          >
            CF
          </h1>
        </div>
      </a>
    </div>
    <div
      class="
        w-[50%]
        h-[100px]
        float-right
        bg-lightgray
        flex
        items-center
        justify-center
      "
    >
      <div class="w-full">
        <ul class="flex w-full text-xl text-blue justify-evenly">
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
.sliding-8 {
  width: 150px;
  height: 60px;
  text-shadow: -11ch 0 #fff;
  text-indent: var(--t, 0);
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