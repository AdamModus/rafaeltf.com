<template>
  <main>
    <section class="self-center flex flex-col flex-1 justify-center">
      <div class="relative border-b pb-8">
        <div class="flex align-top justify-between">
          <div>
            <h1 class="text-xl lg:text-6xl font-bold leading-tight">👋 Hi there! My name is</h1>
            <h1 class="font-bold text-2xl lg:text-8xl w-fit mb-2 leading-none">
              Rafael <br />
              Fernandes
            </h1>
          </div>
          <avatar class="md:mb-5 flex-shrink-0" />
        </div>
        <div>
          <div class="font-bold md:text-xl mb-3 flex items-center">
            <img width="24" height="24" class="h-6 mr-5" src="/svg/location.svg" alt="location" />
            <span> Arnhem, Netherlands </span>
          </div>
          <p class="my-8 md:text-xl">
            My full name is actually Rafael Teixeira Fernandes, but everybody calls me Rafa. <br />
            Personally, I feel like a person! 👽 <br />
            I'm into travelling, javascript and javascripty things! I also dabble into frontend stuff sometimes. <br />
            This is my website, where my brain might dump things, if it feels like it.
          </p>
          <div class="mt-4 flex items-center">
            <social label="Github" img-src="/img/logo-github.png" href="https://github.com/AdamModus" />
            <social label="Twitter" img-src="/img/logo-twitter.png" href="https://twitter.com/AdamModus" />
            <social label="Linkedin" img-src="/img/logo-linkedin.jpg" href="https://www.linkedin.com/in/adammode" />
          </div>
        </div>
      </div>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main>
</template>
