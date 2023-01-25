import * as styled from "./ModalPersonsStyled";
import IconWrapperNameJob from "../IconWraperNameJob/IconWraperNameJob";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ModalPersons = () => {
  return (
    <styled.ModalContainer>
      <styled.AssignedPersonsContainer>
        <h2>ASSIGNED PERSONS</h2>
        <styled.WraperIconName>
          <RemoveCircleOutlineIcon sx={{ width: 20 }} />
          <IconWrapperNameJob />
        </styled.WraperIconName>
      </styled.AssignedPersonsContainer>

      <styled.LineHight></styled.LineHight>

      <styled.AvailablePersonsContainer>
        <h2>AVAILABLE PERSONS</h2>
        <styled.WraperIconName>
          <AddCircleOutlineIcon sx={{ width: 20 }} />
          <IconWrapperNameJob />
        </styled.WraperIconName>
      </styled.AvailablePersonsContainer>
    </styled.ModalContainer>
  );
};

export default ModalPersons;
