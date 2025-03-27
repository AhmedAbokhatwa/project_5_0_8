// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   // transpileDependencies: true,
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://192.168.8.5:8000',  // Your Frappe instance
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': '',  // Remove the '/api' prefix
//         },
//       },
//     },
//   },
// });
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.8.5:8000',  // Your Frappe instance
        changeOrigin: true,  // Adjust the 'Origin' header to match the target URL
        pathRewrite: {
          '^/api': '',  // Remove '/api' prefix from the URL path
        },
      },
    },
  },
});
