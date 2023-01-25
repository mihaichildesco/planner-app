import * as styled from "./ModalEditPersonStyled";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ProjectButton from "../ProjectButton/ProjectButton";

const ModalEditPerson = () => {
  return (
    <styled.ModalContainer>
      <styled.TitleHeader>edit person</styled.TitleHeader>

      <Stack spacing={6}>
        <TextField
          size="small"
          id="filled-required"
          label="First name"
          defaultValue=""
          variant="filled"
        />
        <TextField
          size="small"
          id="filled-required"
          label="Last name"
          defaultValue=""
          variant="filled"
        />

        <TextField
          size="small"
          id="filled-required"
          label="Position"
          defaultValue=""
          variant="filled"
        />
      </Stack>
      <styled.ButtonWrapper>
        <ProjectButton text="edit" />
        <ProjectButton text="delete" />
      </styled.ButtonWrapper>
    </styled.ModalContainer>
  );
};

export default ModalEditPerson;
