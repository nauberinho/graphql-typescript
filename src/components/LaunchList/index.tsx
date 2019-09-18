import * as React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import { LaunchList, OwnProps } from "./LaunchList";

const LaunchListContainer: React.FC<OwnProps> = ({ handleIdChange }) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} handleIdChange={handleIdChange} />;
};

export default LaunchListContainer;
