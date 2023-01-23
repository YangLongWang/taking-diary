import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        diaryCount
        savedDiaries {
          _id
          content
          date
        }
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        diaryCount
        savedDiaries {
          _id
          content
          date
        }
      }
    }
  }
`;

export const SAVEDIARY = gql`
  mutation saveDiary($content: String!, $date: String!) {
    saveDiary(content: $content, date: $date) {
      user {
        _id
        username
        email
        diaryCount
        savedDiaries {
          _id
          content
          date
        }
      }
    }
  }
`;
