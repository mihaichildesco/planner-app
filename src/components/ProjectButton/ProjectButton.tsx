import * as styled from "./ProjectButtonStyled";
import { IProps } from "./ProjectButtonModel";

const ProjectButton = (props: IProps) => {
  const { text, appereance, handleModal } = props;

  return (
    <styled.ProjectButton onClick={handleModal} appereance={appereance}>
      {text}
    </styled.ProjectButton>
  );
};

export default ProjectButton;
