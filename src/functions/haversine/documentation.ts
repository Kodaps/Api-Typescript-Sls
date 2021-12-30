

export const documentation = {
  summary: "Calculate distance between 2 GPS points with haversine ",
  requestBody: { description: "Two pairs of GPS coordinates" },
  requestModels: { "application/json": "HaversineRequest" },
  methodResponses: [
    {
      statusCode: 201,
      responseModels: {
        "application/json": "HaversineResponse"
      }
    },
    {
      statusCode: 500,
      responseModels: {
        "application/json": "ErrorResponse"
      }
    }
  ]
};