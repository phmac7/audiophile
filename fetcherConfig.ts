export const fetchConfig = {
  endpoint: `https://graphql.contentful.com/content/v1/spaces/tl62fqhd48qy/environments/master`,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENT_DELIVERY_KEY}`,
    },
  },
};
