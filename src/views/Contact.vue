<template>
  <div class="flex w-full h-full bg-blue contact-container">
    <div class="flex w-full h-screen">
      <form
        class="
          contact-form
          flex flex-col
          m-auto
          w-[25%]
          h-[100%]
          justify-center
        "
        @submit.prevent="sendEmail"
      >
        <h3 class="text-2xl font-secondary text-center text-lightgray">
          Feel free to send me a message with any questions
        </h3>
        <label class="font-secondary text-2xl text-lightgray mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          class="p-3 font-secondary text-xl"
          required
        />
        <label class="font-secondary text-2xl text-lightgray mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          class="p-3 font-secondary text-xl"
          required
        />
        <label class="font-secondary text-2xl text-lightgray mb-2"
          >Message</label
        >
        <textarea
          name="message"
          rows="5"
          class="font-secondary text-xl p-3"
          required
        ></textarea>
        <input
          type="submit"
          value="Send"
          class="
            font-secondary
            text-2xl text-blue
            bg-white
            mt-5
            w-[50%]
            self-center
          "
        />
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
.contact-container {
  input,
  textarea {
    &:focus {
      outline: none;
    }
  }
}
</style>