import * as styled from "./ModalCreatePersonStyled";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ProjectButton from "../ProjectButton/ProjectButton";

const ModalCreatePerson = () => {
  return (
    <styled.ModalContainer>
      <styled.TitleHeader>create person</styled.TitleHeader>

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
        <ProjectButton text="create" />
      </styled.ButtonWrapper>
    </styled.ModalContainer>
  );
};

export default ModalCreatePerson;
