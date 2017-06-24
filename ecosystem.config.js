module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'blackhole-ci',
      script    : './app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      // env_production : {
      //   NODE_ENV: 'production'
      // },
      env_dev : {
        NODE_ENV: 'dev'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    // production : {
    //   user : 'node',
    //   host : 'localhost',
    //   ref  : 'origin/master',
    //   repo : 'git@github.com:repo.git',
    //   path : '/var/www/production',
    //   'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    // },
    dev : {
      user : 'www-data',
      host : 'localhost',
      ref  : 'master',
      repo : '.',
      path : '/var/www/blackhole-ci',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev',
        LISTENING_PORT: 3456
      }
    },

    production : {
      user : 'www-data',
      host : 'localhost',
      ref  : 'master',
      repo : '.',
      path : '/var/www/blackhole-ci',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
      env  : {
        NODE_ENV: 'production',
        LISTENING_PORT: 3400
      }
    }
  }
};

// This line is used for testing GitHub Webhook!
