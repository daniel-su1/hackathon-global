import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'https://corsproxy.io/?https://api.hackthenorth.com/v3/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

export default client;