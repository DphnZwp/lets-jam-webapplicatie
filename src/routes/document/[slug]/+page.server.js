import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY } from '$env/static/private';
import { HYGRAPH_URL } from '$env/static/private';

export async function load({ params }) {
	const hygraph = new GraphQLClient(HYGRAPH_URL, {
		headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
	});

	const query = gql`
	query Documents($slug: String!) {
    document(where: { slug: $slug })  {
      title
			words
    }
  }
	`

	const variables = {
		slug: params.slug,
	}

	const data = await hygraph.request(query, variables)
	return {data: data.document}
}