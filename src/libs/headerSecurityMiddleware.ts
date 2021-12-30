import middy from '@middy/core'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import createHttpError from 'http-errors';

const middleware = (): middy.MiddlewareObject<APIGatewayProxyEvent, APIGatewayProxyResult> => {

  const before: middy.MiddlewareFunction<APIGatewayProxyEvent, APIGatewayProxyResult> = async (
    request
  ): Promise<void> => {
  
    if (request.event.headers[process.env.HEADERNAME] != process.env.HEADERSECRET) {
      if (process.env.CHECKSECRET == "1") {
        throw createHttpError(
          401,
          `Secret missing`,
        );
      }
    }


  }

  return {
    before,
  }
}

export default middleware