import * as React from "react";
import styled from "styled-components";
import { LaunchListQuery } from "../../generated/graphql";
import _ from "lodash";

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: LaunchListQuery;
}

const Container = styled.div`
  border: 1px solid green;
`;

export const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
  <Container>
    <ol>
      {!!data.launches &&
        data.launches.map((launch, i) => (
          <li
            key={i}
            onClick={() => handleIdChange(_.get(launch, "flight_number", 0)!)}
          >
            {_.get(launch, "mission_name", "")}
          </li>
        ))}
    </ol>
  </Container>
);
