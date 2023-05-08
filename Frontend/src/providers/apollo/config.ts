import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import config from '../../config';

const httpLink = createHttpLink({
  uri: config.serverApI
});

export const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache()
});
