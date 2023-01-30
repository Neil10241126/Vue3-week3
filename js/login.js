import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js";

const site = 'https://vue3-course-api.hexschool.io/';

const app = createApp({
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      const url = `${site}v2/admin/signin`;

      axios.post(url, this.user)
        .then((res) => {
          alert(res.data.message);
          const { expired, token } = res.data;

          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          window.location = `./products.html`;
        })
        .catch((err) => {
          alert(err.data.message);
        })
    }
  },
})

app.mount('#app');