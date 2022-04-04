/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
      productToCreate: {
        name: "Chewbacca Mask",
        description: "A Chewie mask with a jaw that opens and makes sounds.",
        price: 10,
      },
    };
  },
  methods: {
    // ...
    index: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    create: function () {
      axios.post("http://localhost:3000/products", this.productToCreate).then((response) => {
        console.log(response.data);
        this.productToCreate = response.data;
      });
    },
  },
};

Vue.createApp(App).mount("#app");
