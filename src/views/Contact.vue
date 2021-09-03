<template>
  <div class="contact-container">
    <div class="secondary-contact-container">
      <form class="contact-form" @submit.prevent="sendEmail">
        <h3 class="header">
          Feel free to send me a message with any questions
        </h3>
        <label class="label">Name</label>
        <input type="text" name="user_name" class="input" required />
        <label class="label">Email</label>
        <input type="email" name="user_email" class="input" required />
        <label class="label">Message</label>
        <textarea name="message" rows="5" class="" required></textarea>
        <button type="submit" value="Send" class="button fancy-6">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "Coreys Portfolio",
          "Portfolio Template ID",
          e.target,
          "user_GI45yO7PYflbxSk8AXhxl"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply font-secondary text-xl text-white mt-5 py-2 w-[50%] self-center border-2;
}
.header {
  @apply text-2xl font-secondary text-center text-lightgray;
}
.input {
  @apply font-secondary text-xl p-3;
}
.label {
  @apply font-secondary text-2xl text-lightgray mb-2;
}
.contact-form {
  @apply flex flex-col m-auto w-[25%] h-[100%] justify-center;
}
.secondary-contact-container {
  @apply flex w-[100%] h-screen bg-blue;
}
.contact-container {
  @apply flex w-full h-full bg-blue;

  input,
  textarea {
    &:focus {
      outline: none;
    }
  }
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