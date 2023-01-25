import * as styled from "./LoginPageStyled";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <styled.LoginPageContainer>
      <styled.Title>Planner Login</styled.Title>
      <styled.ContainerForm>
        <styled.ImageForm></styled.ImageForm>
        <styled.ArticleContainer>
          <Stack spacing={3} minWidth={300}>
            <h2>Login here</h2>
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
              Login
            </Button>
            <Button fullWidth variant="contained">
              Register
            </Button>
          </Stack>
        </styled.ArticleContainer>
      </styled.ContainerForm>
    </styled.LoginPageContainer>
  );
};

export default LoginPage;
