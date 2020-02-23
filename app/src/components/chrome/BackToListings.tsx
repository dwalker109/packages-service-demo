import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@reach/router";

const BackToListing: FC = () => (
  <Link to="/">
    <div className="pt-8 text-blue-500">
      <FontAwesomeIcon icon={faChevronLeft} /> Back to package listings
    </div>
  </Link>
);

export default BackToListing;
