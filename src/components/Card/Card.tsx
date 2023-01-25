import * as styled from "./CardStyled";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Card = () => {
  return (
    <styled.Card>
      <DashboardIcon />
      <styled.TextCard>1 projects in progress</styled.TextCard>
    </styled.Card>
  );
};

export default Card;
