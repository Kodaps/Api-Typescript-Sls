import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"
import checkHeaders from './headerSecurityMiddleware'


export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser()).use(checkHeaders());
}
