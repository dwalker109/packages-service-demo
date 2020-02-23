import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import PackageDetail from "../components/shop/PackageDetail";
import { MainLayout } from "./Layouts";

const DetailScreen: FC<RouteComponentProps> = () => (
  <MainLayout>
    <PackageDetail />
  </MainLayout>
);

export default DetailScreen;
