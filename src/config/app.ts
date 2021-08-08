export default () => ({
  port: parseInt(<string>process.env.PORT, 10) || 3000,
  frontend: {
    static_url: 'http://127.0.0.1:3000',
  }
});
