import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading: FC = () => (
  <div className="flex justify-center">
    <FontAwesomeIcon
      icon={faSpinner}
      spin={true}
      size="4x"
      className="text-blue-500"
    />
  </div>
);

export default Loading;
