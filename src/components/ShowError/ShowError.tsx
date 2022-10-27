import React from "react";
import ErrorProps from "./types";

const ShowError: React.FC<ErrorProps> = ({
  error,
}: ErrorProps): JSX.Element => {
  return <h2>{error}</h2>;
};

export default ShowError;
