import React from "react";
import { LaunchProfileQuery } from "../../generated/graphql";
import styled from "styled-components";

const LaunchDetails = styled.div`
  padding: 1rem 0 0 0;
  border-radius: 5px;
`;

interface Props {
  data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No Launch is available</div>;
  }

  console.log(data);

  return (
    <div>
      Flight {data.launch.flight_number}:
      <LaunchDetails>{data.launch.details}</LaunchDetails>
    </div>
  );
};

export default LaunchProfile;
