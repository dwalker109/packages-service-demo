const productService = {
  url: "https://product-service.herokuapp.com/api/v1/products",
  authToken: process.env.PRODUCT_SERVICE_AUTH_TOKEN,
};

export { productService };
