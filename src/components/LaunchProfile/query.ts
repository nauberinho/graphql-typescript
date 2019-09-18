import gql from "graphql-tag";

export const QUERY_LAUNCH_PROFILE = gql`
  query LaunchProfile($id: String!) {
    launch(id: $id) {
      flight_number
      mission_name
      details
    }
  }
`;
