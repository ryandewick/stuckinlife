<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="container">
        <div class="footer__sign-up">
          <div class="footer__sign-up-content">
            <div>
              <h3>Subscribe to our newsletter & get more information</h3>
            </div>
            <div class="footer__sign-up-form">
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
        <div class="footer-logo">
          <img src="../assets/stuckinlife.webp" alt="logo" />
          <span>StuckIn<strong>Life</strong></span>
        </div>
        <div class="footer__content">
          <div class="footer__content-links">
            <h3>Quick Links</h3>
            <router-link to="/">Home</router-link>
            <router-link to="/">About us</router-link>
            <router-link to="/">Courses</router-link>
          </div>
          <div class="footer__content-links">
            <h3>Support</h3>
            <router-link to="/">Contact us</router-link>
            <router-link to="/">FAQ's</router-link>
            <router-link to="/">Privacy Policy</router-link>
          </div>
          <div class="footer__content-links footer__content-contact">
            <h3>Contact Us</h3>
            <p>business@stuckinlife.co.uk</p>
            <p>facebook-stuckinlife</p>
          </div>
        </div>
      </div>

      <div class="footer__copyright">
        <div class="container">
          <p>Copyright © StuckInLife 2023. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.footer {
  background-color: rgba(0, 26, 36, 0.9);

  &-wrapper {
    margin-top: 300px;
    z-index: 100;

    @include tabletAndDesktop {
      margin-top: 140px;
    }
  }

  &__sign-up {
    background-color: #0b5978;
    border-radius: 8px;
    padding: 50px 20px;
    margin-top: -300px;
    text-align: center;

    @include tablet {
      padding: 50px 40px;
    }

    @include desktop {
      padding: 50px 80px;
    }

    @include tabletAndDesktop {
      margin-top: -140px;
    }

    h3 {
      font-size: 3rem;
      font-weight: 400;
      max-width: 350px;
      margin: auto;
      color: #e3ece7;
      text-align: center;
      margin-bottom: 25px;
      line-height: 1.5;

      @include tablet {
        max-width: 500px;
      }

      @include desktop {
        max-width: 648px;
        font-size: 3.2rem;
      }

      @include tabletAndDesktop {
        text-align: left;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;

      @include tabletAndDesktop {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    &-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include tablet {
        width: 300px;
      }

      @include desktop {
        width: 432px;
      }

      input {
        width: 100%;
        height: 56px;
        border: 1px solid white;
        background-color: transparent;
        border-radius: 8px;
        padding: 0 20px;
        font-size: 1.6rem;
        font-weight: 300;
        color: #fff;
        outline: none;

        &::placeholder {
          color: #fff;
        }
      }

      button {
        width: 100%;
        padding: 16px;
        font-weight: 400;
        border: none;
        margin-top: 16px;
        border-radius: 8px;
        background-color: $accent-color;
        color: #fff;
        font-size: 1.6rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: darken($accent-color, 10%);
        }
      }
    }
  }

  &-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    filter: brightness(1000%);
    padding-top: 100px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.3);

    img {
      width: 38px;
      margin-right: 10px;
    }

    span {
      font-size: 30px;
      font-weight: 300;
      color: #fff;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: white;
    padding-top: 40px;
    padding-bottom: 50px;

    h3 {
      font-size: 1.6rem;
      margin-bottom: 32px;
    }

    a,
    p {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 16px;
    }

    &-links {
      display: flex;
      flex-direction: column;
      margin-bottom: 48px;
    }

    &-contact {
      width: 100%;

      @include tabletAndDesktop {
        width: auto;
      }
    }
  }
  &__copyright {
    text-align: center;
    color: white;
    font-weight: 300;
    background-color: rgba(0, 36, 50, 0.9);
  }
}
</style>
