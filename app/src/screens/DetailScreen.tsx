import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import PackageDetail from "../components/shop/PackageDetail";
import MainLayout from "./MainLayout";

const DetailScreen: FC<RouteComponentProps> = () => (
  <MainLayout>
    <PackageDetail />
  </MainLayout>
);

export default DetailScreen;
