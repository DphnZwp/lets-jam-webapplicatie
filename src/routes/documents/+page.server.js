import { GraphQLClient, gql } from 'graphql-request';

export async function load() {
	// See for securing hygraph: https://hygraph.com/blog/securing-api-access-to-your-hygraph-project
  const hygraph = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldarik4a03ca01uk03pj9y7n/master', {
		headers: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzQ1OTcxNzEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xkYXJpazRhMDNjYTAxdWswM3BqOXk3bi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMWU5OGM1MWQtNTljYy00YmFmLWI4NzUtYzAyYjA5MTEwYTI1IiwianRpIjoiY2xkYXJ4MzJ4MDA1ajAxdW5laW1rYjZ5dSJ9.45HeJr-bT1IRrc4fxegXhg21gcHvxyJXzNfVrMAcv2G_-S0HpCvcxa65GYu3zSdPgWFODW3RkfkY7qtKUKrElhn1EuFBtXmXAWkqJ8tLxTV2QrUlyQkQt2tWxj4mWwa0WPHSKU9_znmcn3whTn6BfUYG7bihDonhsKCw8OcobeIp2wLC08BeWKWaEMccEKtYKDWNsX7Xn17vt2TxCkqw2ZKtjLcsZjKMlEOvCqtV9JPHc-SoMBpg_YzSBO5bkbDpLE7ni9HwIaMCneIe1tZD_sZoYuTt9hCBMioDjDWpGpUD3rxnTOtjZ1mbgKm8CYSutiBEYeq9EfhNnxMH-Hv-0DHaNrwIGeZGj0fA7HCQF9zbmkexFu7rNlEaensF31nPtxmD1WuTMOq2c6qVVMc_55i7j8m2uDoMB9WVaPdwdW9RqsEjjFM_8FBA8OEn5eJ8MK-g10xMaSyamHDZXiKpRJik3Pr1LlxZxIdmzqm5hAhtzf566psXG6lKzB6U3226xLwzmH1O4QEtOgdDg8x1cmlWTlgabTjj9sly9nx_xZqZbXVwBnyzhQ4roIu3aq29_OnkZyMtTPUmYxKWrwML9ix3QsJkbWiGzZ7tClf80PRtgv9AEgmQ3kceWfR6UKxGEVcnadcUAVuuxEtotqPZwu4qoocUVLniRhLyHvy0oPI` }
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
      slug
    }
  }
  `;

	const data = await hygraph.request(query);
	return data;
}