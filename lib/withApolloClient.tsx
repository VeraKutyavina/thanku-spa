import {
    ApolloClient, ApolloLink,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import { useRouter } from 'next/router';
import nextWithApollo from 'next-with-apollo';
import {createAuthHeaderLink} from './links';

const withApolloClient = nextWithApollo(
    ({ initialState, headers }) => {

        const httpLink = new HttpLink({
            uri: `${'http://127.0.0.1:3000'}/graphql`,
        });

        const authHeaderLink = createAuthHeaderLink({
            cookie: headers?.cookie,
        });

        const link = ApolloLink.from([authHeaderLink, httpLink]);


        return new ApolloClient({
            ssrMode: typeof window === 'undefined',
            link,
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