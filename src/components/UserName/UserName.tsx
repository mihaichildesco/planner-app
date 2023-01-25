import { IProps } from "./UserNameModel";
import * as styled from "./UserNameStyled";

const UserName = (props: IProps) => {
  const { user = "" } = props;

  return <styled.UserName>{user}</styled.UserName>;
};

export default UserName;
