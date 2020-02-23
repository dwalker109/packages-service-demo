import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import PackageDetail from "../components/shop/PackageDetail";
import { StandardLayout } from "./Layouts";

const DetailScreen: FC<RouteComponentProps> = () => (
  <StandardLayout>
    <PackageDetail />
  </StandardLayout>
);

export default DetailScreen;
