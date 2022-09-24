import { styled } from "@mui/material/styles";
import FusePageCarded from "@fuse/core/FusePageCarded";
import { useEffect, useState } from "react";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import DemoHeader from "../../shared-components/DemoHeader";
import DemoContent from "../../shared-components/DemoContent";
import DemoSidebar from "../../shared-components/DemoSidebar";

const Root = styled(FusePageCarded)(({ theme }) => ({
  "& .FusePageCarded-header": {},
  "& .FusePageCarded-toolbar": {},
  "& .FusePageCarded-content": {},
  "& .FusePageCarded-sidebarHeader": {},
  "& .FusePageCarded-sidebarContent": {},
}));

function CardedWithSidebarsNormalScrollComponent() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [selectedNavigation, setSelectedNavigation] = useState(null);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

  function handleItemClicked(e) {
    setSelectedNavigation(e)
  }

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
    setRightSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <Root
      content={<DemoContent selectedSection={selectedNavigation} />}
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarOnClose={() => {
        setLeftSidebarOpen(false);
      }}
      leftSidebarContent={<DemoSidebar handleItemClicked={handleItemClicked} />}
      scroll="content"
    />
  );
}

export default CardedWithSidebarsNormalScrollComponent;
