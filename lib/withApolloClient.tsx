import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import { useRouter } from 'next/router';
import nextWithApollo from 'next-with-apollo';

const withApolloClient = nextWithApollo(
    ({ initialState, headers }) => {
        return new ApolloClient({
            ssrMode: typeof window === 'undefined',
            link: new HttpLink({
                uri: `${'http://127.0.0.1:3000'}/graphql`,
            }),
            headers: {
                ...(headers as Record<string, string>),
            },
            cache: new InMemoryCache().restore(initialState || {}),
            connectToDevTools: true,
        });
    },
    {
        render: ({ Page, props }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const router = useRouter();
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} {...router} />
                </ApolloProvider>
            );
        },
    }
);

export default withApolloClient;