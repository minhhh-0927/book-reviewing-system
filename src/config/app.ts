export default () => ({
  port: parseInt(<string>process.env.PORT, 10) || 3000,
});
