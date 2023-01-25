import * as styled from "./PersonsCardStyled";
import IconWRapperNameJob from "../IconWraperNameJob/IconWraperNameJob";
import { IProps } from "./PersonsCardModel";

const PersonsCard = (props: IProps) => {
  const { handleModal = () => {} } = props;

  return (
    <styled.CardContainer>
      <IconWRapperNameJob handleModal={handleModal} />
    </styled.CardContainer>
  );
};

export default PersonsCard;
