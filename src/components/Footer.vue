<template>
  <footer class="footer">
    <div class="container">
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
</template>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.footer {
  background-color: rgba(0, 26, 36, 0.9);
  &-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    filter: brightness(1000%);
    padding-top: 180px;
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
