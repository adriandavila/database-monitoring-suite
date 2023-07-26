"use client";

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";

function DashboardCard({
  title,
  children,
  styles,
}: {
  title: string;
  children: React.ReactNode;
  styles: {
    width: string;
    marginRight: string | number;
  };
}) {
  return (
    <Card width={styles.width || "100%"} marginRight={styles.marginRight || 4}>
      <CardHeader>
        <Heading size="md"> {title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export default DashboardCard;
