import { IProps } from "./ButtonSideMenuModel";
import * as styled from "./ButtonSideMenuStyled";

const ButtonSideMenu = (props: IProps) => {
  const { text = "", handleButtonClick = () => {} } = props;

  return (
    <styled.ButtonSideMenu onClick={handleButtonClick}>
      {text}
    </styled.ButtonSideMenu>
  );
};

export default ButtonSideMenu;
