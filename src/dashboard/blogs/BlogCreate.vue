<template>
  <form @submit.prevent="submitForm" class="blog-form">
    <div class="blog-form__group">
      <s-input
        type="text"
        v-model="formData.title"
        id="title"
        class="blog-form__input"
        placeholder="Title"
        required
      />
    </div>
    <div class="blog-form__group">
      <s-input
        type="text"
        v-model="formData.metaDescription"
        id="metaDescription"
        class="blog-form__textarea"
        placeholder="Meta Description"
        required
      ></s-input>
    </div>
    <div class="blog-form__group">
      <quill-editor
        v-model="formData.content"
        @update:content="textChange"
        :options="editorOptions"
        ref="quillEditor"
      />
    </div>
    <div class="blog-form__group">
      <label for="featuredImage" class="blog-form__label">Featured Image</label>
      <input
        type="file"
        @change="onFileChange"
        id="featuredImage"
        class="blog-form__input"
        accept="image/*"
        ref="fileInput"
      />
    </div>
    <s-button variant="primary" type="submit" class="blog-form__submit-btn">
      Publish
    </s-button>
  </form>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useBlogsStore } from "@/stores/blogs";
import { QuillEditor } from "@vueup/vue-quill";
import sInput from "@/components/Input.vue";
import sButton from "@/components/Button.vue";

export default {
  components: {
    QuillEditor,
    sInput,
    sButton,
  },
  data() {
    return {
      formData: {
        title: "",
        image: null,
        metaDescription: "",
        content: "",
      },
      editorOptions: {
        placeholder: "Write your blog content here...",
        toolbar: "essential",
      },
    };
  },
  computed: {
    ...mapState(useBlogsStore, ["blogs"]),
  },
  methods: {
    ...mapActions(useBlogsStore, {
      addBlog: "addBlog",
    }),
    async submitForm() {
      const postData = {
        id: JSON.stringify(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
        title: this.formData.title,
        slug: this.formData.title.toLowerCase().replace(/ /g, "-"),
        metaDescription: this.formData.metaDescription,
        image: this.formData.image,
        content: this.formData.content,
      };

      try {
        await this.addBlog(postData);
        this.$router.push(`/blogs/${postData.slug}`);
      } catch (error) {
        console.error("Error creating blog post:", error);
      }
    },
    async onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.formData.image = reader.result;
      };
      reader.readAsDataURL(file);
    },
    textChange() {
      this.formData.content = this.$refs.quillEditor.getHTML();
    },
  },
};
</script>
