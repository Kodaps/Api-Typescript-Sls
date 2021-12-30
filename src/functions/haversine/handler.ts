import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { haversine } from '@libs/haversine';
import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const start = event.body.start;
  const end = event.body.end;

  let distance = haversine(start.lat, start.long, end.lat, end.long);

  return formatJSONResponse({
    distance: distance,
    event,
  });
}

export const main = middyfy(hello);
