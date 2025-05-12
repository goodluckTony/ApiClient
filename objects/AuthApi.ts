import { GraphQLClient, gql } from 'graphql-request';

export interface SignInResponse {
  signIn: {
    accessToken: string;
    refreshToken: string;
  };
}

export class AuthApi {
  private client: GraphQLClient;

  constructor(baseURL: string) {
    this.client = new GraphQLClient(baseURL, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async signIn(email: string, password: string) {
    const SIGNIN_MUTATION = gql`
      mutation($email: String!, $password: String!) {
        signIn(input: { email: $email, password: $password }) {
          accessToken
          refreshToken
        }
      }
    `;

    const variables = { email, password };
    const response = await this.client.rawRequest<SignInResponse>(SIGNIN_MUTATION, variables);
    return response;
  }
}
