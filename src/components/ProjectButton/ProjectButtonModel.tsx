type AppearenceTypes = "progressStyle" | "doneStyle";

export interface IProps {
  text: string;
  handleModal?: () => void;
  appereance?: AppearenceTypes;
}

export interface IStyle {
  appereance?: AppearenceTypes;
}
