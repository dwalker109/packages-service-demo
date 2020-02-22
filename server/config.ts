const productService = {
  url: "https://product-service.herokuapp.com/api/v1/products",
  authToken: process.env.PRODUCT_SERVICE_AUTH_TOKEN,
  minTime: 100,
  maxConcurrent: 10,
};

export { productService };
