<template>
  <div class="main-container">
    <div class="home-container">
      <h3 class="title-h3">Hi, My name is</h3>
      <h4 class="title-h4">Corey Fries</h4>
      <h4 class="title-h4">I build things for the Web.</h4>
      <h5 class="title-h5">
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
      <router-link to="/contact" class="home-button-link">
        <button class="home-button fancy-6">Let's Talk</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-button {
  @apply border-2 h-12 mt-5 px-10 flex text-white items-center justify-center;
}
.home-button-link {
  @apply text-xl text-lightgray;
}
.home-container {
  @apply w-[50%] font-main;
  @media screen and (max-width: 768px) {
    @apply w-[100%] px-4;
  }
}
.main-container {
  @apply flex items-center justify-center w-full h-screen bg-blue relative;
}
.title-h3 {
  @apply text-[1.5rem] text-lightgray;
}
.title-h4 {
  @apply text-white text-[4rem];
  @media screen and (max-width: 768px) {
    @apply text-5xl;
  }
}
.title-h5 {
  @apply text-lightgray text-[1.5rem] font-secondary;
}

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