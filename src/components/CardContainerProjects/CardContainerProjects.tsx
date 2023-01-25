import * as styled from "./CardContainerProjectsStyled";
import PeopleIcon from "@mui/icons-material/People";
import { IProps } from "./CardContainerProjectsModel";
import EditIcon from "@mui/icons-material/Edit";

const CardContainerProjects = (props: IProps) => {
  const { handleModal = () => {} } = props;

  return (
    <styled.CardContainer>
      <styled.HeaderCardContainer>
        <styled.TitleCard>Project Test</styled.TitleCard>
        <styled.IconContainer>
          <PeopleIcon onClick={() => handleModal("person")} />
        </styled.IconContainer>
      </styled.HeaderCardContainer>

      <styled.TextDescription>description</styled.TextDescription>
      <styled.StartDate>Start: 11/10/2022</styled.StartDate>
      <div>
        <styled.EndDate>Deadline: 16/09/2022</styled.EndDate>

        <styled.EditButtonContainer>
          <EditIcon onClick={() => handleModal("edit")} />
        </styled.EditButtonContainer>
      </div>
    </styled.CardContainer>
  );
};

export default CardContainerProjects;
