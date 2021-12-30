import HaversineRequest from '@functions/haversine/schema';
import HaversineResonse from '@functions/haversine/reponseschema';


const ErrorResponse = {
  type: "object",
  properties: {
    error: {
      type: "string",
    },
  }
};

let items = {
  HaversineRequest,
  HaversineResonse,
  ErrorResponse
}

let models = [];

for(let key in items) {
  models.push({
    name: key,
    contentType: "application/json",
    schema: items[key]
  })
}


export default {
  version: '1',
  title: 'CO2 Api',
  description: 'CO2 calculations API',
  models
}