import gql from 'graphql-tag';

export const CREATE_USER_MUTATION = gql`
    mutation createUser(
        $address: String!
        $amount: Float!
        $name: String!
        $status: String!
        $role: String!
    ) {
        createUser(
            address: $address,
            amount: $amount,
            name: $name,
            role: $role,
            status: $status)
    }
`;
