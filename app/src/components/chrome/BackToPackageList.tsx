import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@reach/router";

const BackToPackageList: FC = () => (
  <Link to="/">
    <div className="pt-8 text-indigo-500">
      <FontAwesomeIcon icon={faChevronLeft} /> Back to package list
    </div>
  </Link>
);

export default BackToPackageList;
