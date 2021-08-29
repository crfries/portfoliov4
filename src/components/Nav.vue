<template>
  <nav class="w-full h-auto font-main z-10 sticky top-0">
    <div class="w-[50%] h-[100px] bg-lightgray float-left">
      <div class="w-25 h-full grid float-left p-[25px]">
        <h1 class="text-5xl text-blue"><a href="/">CF</a></h1>
      </div>
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
          <li>
            <router-link to="/projects"><span>01 | Projects</span></router-link>
          </li>
          <li>
            <router-link to="/contact"><span>02 | Contact</span></router-link>
          </li>
          <li>
            <a href="/">03 |<span>Resume</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>