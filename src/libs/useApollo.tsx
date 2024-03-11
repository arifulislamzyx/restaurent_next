import { ApolloClient, InMemoryCache } from "@apollo/client";

let apolloClient: ApolloClient<any>;

function createApolloClient() {
  return new ApolloClient({
    uri: "YOUR_GRAPHQL_API_ENDPOINT",
    cache: new InMemoryCache(),
  });
}

export function initializeApollo() {
  // Create Apollo Client instance if it doesn't exist
  const client = apolloClient ?? createApolloClient();

  // If your page has Next.js SSR or SSG support, you should hydrate the cache here
  // For example, you can fetch some initial data and preload it into the cache

  // For SSR or SSG, always create a new Apollo Client instance for each request
  if (typeof window === "undefined") return client;

  // Store the Apollo Client instance once in the client-side global variable
  if (!apolloClient) apolloClient = client;
  return client;
}

export function useApollo() {
  return initializeApollo();
}
