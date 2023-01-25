import * as styled from "./IconWraperNameJobStyled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IProps } from "./IconWraperNameJobModel";

const IconWrapperNameJob = (props: IProps) => {
  const { handleModal = () => {} } = props;

  return (
    <styled.Container>
      <AccountCircleIcon
        sx={{ fontSize: "40px" }}
        onClick={() => handleModal("editPerson")}
      />

      <styled.NameAndJobWrapper>
        <span>Vlad Pata</span>
        <p>frontend</p>
      </styled.NameAndJobWrapper>
    </styled.Container>
  );
};

export default IconWrapperNameJob;
