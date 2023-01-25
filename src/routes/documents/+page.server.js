import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

export async function load() {
	// See for securing hygraph: https://hygraph.com/blog/securing-api-access-to-your-hygraph-project
	const hygraph = new GraphQLClient(HYGRAPH_URL, {
		headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
	});

	// See for gql style queries: https://www.npmjs.com/package/graphql-request#graphql-mutations
	const query = gql`
  query Documents {
    documents {
      title
      author
      challenge
      deadline
      words
    }
  }
  `;

	const data = await hygraph.request(query);
	return data;
}