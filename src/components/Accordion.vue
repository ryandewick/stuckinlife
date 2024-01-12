<template>
  <div class="accordion">
    <div
      v-for="(question, index) in faqData"
      :key="index"
      class="accordion-item"
    >
      <div class="accordion-item__wrapper">
        <div
          @click="toggleAccordion(index)"
          class="accordion-item__question"
          :class="{ 'accordion-item__question--active': question.open }"
        >
          <p class="question-text">{{ question.question }}</p>
          <span
            :class="[
              'accordion-item__arrow',
              {
                'accordion-item__arrow--up': question.open,
                'accordion-item__arrow--down': !question.open,
              },
            ]"
          ></span>
        </div>
        <div v-if="question.open" class="accordion-item__content">
          {{ question.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqData: [
        {
          question: "1. What is a career portfolio or professional portfolio?",
          answer:
            "A career portfolio, also known as a professional portfolio, is essentially a collection of your best work and important documents connected to your job or career. Think of it as a kind of showcase or folder where you put together evidence to demonstrate your skills and achievements. It's a bit like creating a scrapbook or a folder with items that showcase how good you are at what you do. People use it to impress potential employers, clients, or educational institutions because it helps them see how talented and capable you are in your field. So, it's a bit like your CV, but with real examples and evidence of your skills and accomplishments.",
          open: true, // Set the first item to open
        },
        {
          question:
            "2. How do I create a career portfolio or make a professional portfolio?",
          answer: "Answer 2",
          open: false,
        },
        {
          question: "3. How often should I update my professional portfolio?",
          answer:
            "We can deliver any item that is smaller than 25ft x 8ft x 8ft. This can be achieved by using our 26 foot box trucks with lift gates for all of your courier and delivery needs.",
          open: false,
        },
        {
          question:
            "4. Is a cover letter necessary with my professional portfolio?",
          answer: "lorem50",
          open: false,
        },
        {
          question: "5. How often should I update my professional portfolio?",
          answer: "Answer 5",
          open: false,
        },
      ],
      openIndex: 0, // Index of the currently open question, 0 for the first item
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.openIndex === index) {
        this.faqData[index].open = !this.faqData[index].open;
      } else {
        // Close the previously open question
        if (this.openIndex !== -1) {
          this.faqData[this.openIndex].open = false;
        }
        // Open the clicked question
        this.faqData[index].open = true;
        this.openIndex = index;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.accordion {
  max-width: 1200px;
  width: 100%;

  @include tabletAndDesktop {
    padding: 0 16px;
    margin: 0 auto;
  }

  &-item {
    padding-inline: 20px;
    background-color: #f2f6f8;

    &:first-child {
      padding-top: 50px;

      @include tabletAndDesktop {
        padding-top: 72px;
      }
    }

    &:last-child {
      padding-bottom: 50px;

      @include tabletAndDesktop {
        padding-bottom: 72px;
      }
    }

    @include tabletAndDesktop {
      padding-inline: 80px;
    }

    &__wrapper {
      padding-top: 25px;
      padding-bottom: 25px;
      border-bottom: #c8c8c8 1px solid;

      @include tabletAndDesktop {
        padding-top: 36px;
        padding-bottom: 36px;
      }
    }

    &__question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      .question-text {
        color: $grey-color;
        font-size: 1.8rem;

        @include tabletAndDesktop {
          font-size: 2rem;
        }
      }

      &--active {
        .question-text {
          color: $secondary-color;
        }
      }
    }

    &__arrow {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      background-image: url("@/assets/down-arrow.svg");
      background-repeat: no-repeat;
      background-size: contain;
      transition: transform 0.2s;

      &--up {
        transform: rotate(180deg);
      }

      &--down {
        transform: rotate(0deg);
      }
    }

    &__content {
      color: $grey-color;
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 160%;
      padding-top: 20px;

      @include tabletAndDesktop {
        padding-top: 40px;
        font-size: 1.6rem;
      }
    }
  }
}
</style>
