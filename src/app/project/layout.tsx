"use client";
import React, { ReactNode } from "react";

import { Box, Flex } from "@chakra-ui/react";
import ProjectSidebar from "@/app/components/project/ProjectSidebar";

function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box flexGrow={1} height={"100%"}>
      <Flex height={"100%"}>
        <ProjectSidebar />
        <Box width={"100%"}>{children}</Box>
      </Flex>
    </Box>
  );
}

export default ProjectLayout;
