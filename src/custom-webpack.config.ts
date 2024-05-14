const DotEnv = require('dotenv-webpack');

export default {
  plugins: [
    new DotEnv({
      systemVars: true,
    }),
  ],
};
