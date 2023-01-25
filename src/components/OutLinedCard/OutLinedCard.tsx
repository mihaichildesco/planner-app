import * as styled from "./StyledOutLinedCard";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const OutLinedCard = () => {
  return (
    <styled.bigCard>
      <styled.CardTitle>Deadlines</styled.CardTitle>

      <styled.IconTitleWrapper>
        <styled.IconContainer>
          <AssignmentIndIcon fontSize="large" />
        </styled.IconContainer>

        <styled.ProjectWrapper>
          <styled.ProjectName>Project Test</styled.ProjectName>
          <styled.DescriptionProject>description</styled.DescriptionProject>
        </styled.ProjectWrapper>
      </styled.IconTitleWrapper>

      <styled.DeadlineDate>16th Sep 2022</styled.DeadlineDate>
      {/* date of deadline */}
    </styled.bigCard>
  );
};

export default OutLinedCard;
