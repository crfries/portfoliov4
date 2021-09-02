<template>
  <div class="flex items-center justify-center w-full h-screen bg-blue">
    <div class="w-[50%] font-main">
      <h4 class="text-[1.5rem] text-lightgray">Hi, My name is</h4>
      <h3 class="text-white text-[4rem]">Corey Fries</h3>
      <h3 class="text-white text-[4rem]">I build things for the Web.</h3>
      <h5 class="text-lightgray text-[1.5rem] font-secondary">
        I am a Phoenix-based software engineer who specializes in designing and
        building exceptional digital experiences. I am currently a full stack
        developer for
        <a
          href="https://www.zippertubing.com"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold"
        >
          Zippertubing Company</a
        >
        .
      </h5>
      <router-link to="/contact" class="text-xl text-lightgray">
        <button
          class="
            border-2
            w-[fit-content]
            h-12
            mt-5
            px-10
            flex
            text-white
            items-center
            justify-center
            fancy-6
          "
        >
          Let's Talk
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fancy-6 {
  background: linear-gradient(45deg, #fff 50%, transparent 0) right / 250% 100%
      no-repeat,
    linear-gradient(45deg, transparent 50%, #fff 0) left / 250% 100% no-repeat;
  transition: 0.5s;
}
.fancy-6:hover {
  background-position: center;
  color: #275dadff;
}
</style>