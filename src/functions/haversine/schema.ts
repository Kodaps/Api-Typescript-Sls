export default {
  type: "object",
  properties: {
    start: {
      type: 'object',
      properties: {
        long: { type: 'number' },
        lat: { type: 'number' },
      },
    },
    end: {
      type: 'object',
      properties: {
        long: { type: 'number' },
        lat: { type: 'number' },
      },
    },
  },
  required: ["start", "end"]
} as const;

// { start: {long: 0, lat: 0}, end: {long: 45, lat: 45} }