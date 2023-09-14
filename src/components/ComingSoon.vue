<template>
  <div class="coming-soon">
    <div v-if="!formSuccess || formError">
      <figure>
        <img
          class="coming-soon__bottom-logo"
          src="../assets/bottom_of_logo.svg"
          alt="Bottom half of the StuckInLife logo"
        />
      </figure>
      <div class="coming-soon__half-circle"></div>
      <main class="container">
        <figure>
          <img
            class="coming-soon__logo"
            src="../assets/logo.svg"
            alt="StuckInLife logo with blue theme"
          />
        </figure>
        <h1>StuckInLife</h1>
        <h2>Unlock your career potential: Let's find your perfect match!</h2>
        <p>
          Feeling lost in your career journey? We're here to guide you. We
          analyze your profile to match you with careers tailored to your
          passions and strengths. Plus, get a handpicked list of courses to set
          you on the right track.
        </p>
        <p class="coming-soon__launch">Launching in 2024!</p>
        <section aria-label="Email Signup">
          <p class="coming-soon__email-msg">
            Be the first to know! Enter your email below.
          </p>
          <form class="coming-soon__email-input" @submit.prevent="onSubmit">
            <input
              v-model="emailInput"
              type="email"
              id="email"
              name="email"
              required="true"
              placeholder="Enter your email"
              aria-label="Enter your email to be notified"
            />
            <button type="submit" aria-label="Sign up to be notified">
              Sign up
            </button>
          </form>
        </section>
      </main>
    </div>
    <div class="form-state" v-if="formSuccess || formError">
      <div v-if="formSuccess" class="form-state__success">
        <h1>Thank you for signing up!</h1>
        <p>We'll be in touch soon.</p>
      </div>
      <div v-if="formError" class="form-state__error">
        <h1>Oops! Something went wrong.</h1>
        <p>Please try again.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// 1. Import the library
import Botpoison from "@botpoison/browser";
export default {
  data() {
    return {
      botpoison: null,
      emailInput: null,
      formSuccess: false,
      formError: false,
    };
  },

  methods: {
    async onSubmit() {
      try {
        const { solution } = await this.botpoison.challenge();
        await axios.post("https://submit-form.com/EmaMVCle", {
          message: this.emailInput,
          _botpoison: solution,
        });
        this.formSuccess = true;
        this.emailInput = null;
        setTimeout(() => {
          this.formSuccess = false;
        }, 3000);
      } catch (error) {
        this.formError = true;
        setTimeout(() => {
          this.formError = false;
        }, 3000);
      }
    },
  },

  created() {
    this.botpoison = new Botpoison({
      publicKey: "pk_4ac0acdc-0492-4b0d-9c56-d68c7b4f76e1",
    });
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/mixins/_variables.scss";
@import "src/assets/mixins/_breakpoints.scss";

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;

  @include tablet {
    max-width: 600px;
  }

  @include desktop {
    max-width: 800px;
  }
}

.coming-soon {
  text-align: center;
  color: $light-color;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;

  @include tablet {
    padding-bottom: 140px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 24px;

    @include tabletAndDesktop {
      font-size: 22px;
    }
  }

  &__bottom-logo {
    position: absolute;
    max-width: 100%;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    @include tabletAndDesktop {
      width: 600px;
    }
  }

  &__half-circle {
    position: absolute;
    background: rgba(29, 105, 135, 0.4);
    width: 100%;
    height: 350px;
    border-radius: 50% 50% 0 0;
    bottom: -50px;
    left: 0;
    z-index: -1;
  }

  &__logo {
    width: 140px;
    margin-bottom: 8px;
  }

  &__launch {
    margin-top: 24px;
    margin-bottom: 24px;
    background: #39778f;
    padding: 6px 12px;
  }

  &__email-msg {
    margin-bottom: 8px;
  }

  &__email-input {
    position: relative;
    width: 100%;

    input {
      padding: 10px 14px;
      background: #376f89;
      border: none;
      color: $light-color;
      width: 60%;

      @include tabletAndDesktop {
        width: 80%;
      }
    }

    input::placeholder {
      color: #9ea5ad;
    }

    input:focus {
      outline: none;
    }

    button {
      padding: 10px 14px;
      cursor: pointer;
      border: none;
      background: #9da9af;
      color: $light-color;
      width: 40%;
      @include tabletAndDesktop {
        width: 20%;
      }
    }
  }
}
</style>
