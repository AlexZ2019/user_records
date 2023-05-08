import gql from 'graphql-tag';

export const USERS_QUERY = gql`
  query getUsers($page: Float, $pageSize: Float) {
      getUsers(page: $page, pageSize: $pageSize) {
          total
          pages
          users {
              id
              name
              address
              status
              role
              amount
          }
      }
  }
`;
