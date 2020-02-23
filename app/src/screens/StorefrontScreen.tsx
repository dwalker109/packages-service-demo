import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import PackageList from "../components/shop/PackageList";
import { MainLayout } from "./Layouts";

const StorefrontScreen: FC<RouteComponentProps> = () => (
  <MainLayout>
    <PackageList />
  </MainLayout>
);

export default StorefrontScreen;
