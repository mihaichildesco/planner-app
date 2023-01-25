import * as styled from "./RegisterPageStyled";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const RegisterPage = () => {
  return (
    <styled.RegisterPageContainer>
      <styled.Title>Planner Register</styled.Title>
      <styled.ContainerForm>
        <styled.ImageForm></styled.ImageForm>
        <styled.ArticleContainer>
          <Stack spacing={4} minWidth={300}>
            <h2>Register here</h2>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Required"
              defaultValue="Email"
            />

            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Required"
              defaultValue="Password"
            />
            <Button fullWidth variant="contained">
              Register
            </Button>
          </Stack>
        </styled.ArticleContainer>
      </styled.ContainerForm>
    </styled.RegisterPageContainer>
  );
};

export default RegisterPage;
