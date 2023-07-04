'use client';

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient(url: string, deliveryKey: string) {
  const httpLink = new HttpLink({
    uri: url,
    headers: {
      authorization: `Bearer ${deliveryKey}`,
    },
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

function makeSuspenseCache() {
  return new SuspenseCache();
}

export function ApolloWrapper({
  children,
  url,
  deliveryKey,
}: {
  children: React.ReactNode;
  url: string;
  deliveryKey: string;
}) {
  return (
    <ApolloNextAppProvider
      makeClient={() => makeClient(url, deliveryKey)}
      makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  );
}
