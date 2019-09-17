import * as React from "react";
import styled from "styled-components";
import { LaunchListQuery } from "../../generated/graphql";

interface Props {
  data: LaunchListQuery;
}

const Container = styled.div`
  border: 1px solid green;
`;

const LaunchList: React.FC<Props> = ({ data }) => (
  <Container>
    <ol>
      {!!data.launches &&
        data.launches.map((launch, i) => (
          <li key={i}>{launch.mission_name}</li>
        ))}
    </ol>
  </Container>
);
export default LaunchList;
