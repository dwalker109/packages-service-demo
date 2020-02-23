import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import PackageList from "../components/shop/PackageList";
import { StandardLayout } from "./Layouts";

const StorefrontScreen: FC<RouteComponentProps> = () => (
  <StandardLayout>
    <PackageList />
  </StandardLayout>
);

export default StorefrontScreen;
