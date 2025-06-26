import api from './api';

export async function getUser() {
  const response = await api.post('/graphql', {
    query: `
      query {
        user {
          _id
          username
          role
          status
        }
      }
    `,
  });

  return response.data.data.user;
}