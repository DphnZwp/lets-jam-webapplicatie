import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY } from '$env/static/private';

export async function load({ params }) {
	const hygraph = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldarik4a03ca01uk03pj9y7n/master', {
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