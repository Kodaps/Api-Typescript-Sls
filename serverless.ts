import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import haversine from '@functions/haversine';

import documentation from 'src/api/documentation';

const serverlessConfiguration: AWS = {
  service: 'slsapi',
  frameworkVersion: '2',
  useDotenv: true,
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    documentation,
  },
  plugins: ['serverless-webpack', 'serverless-openapi-documentation-v2'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { hello, haversine },
};

module.exports = serverlessConfiguration;
