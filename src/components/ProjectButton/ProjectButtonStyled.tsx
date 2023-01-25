import styled, { css } from "styled-components";
import { FONTS, COLORS } from "../../constants/variables";
import { IStyle } from "./ProjectButtonModel";

export const ProjectButton = styled.button<IStyle>(
  ({ appereance }) => css`
    font-family: ${FONTS.poppins}, sans-serif;
    font-weight: 600;
    color: ${COLORS.grey2};
    padding: 10px 20px 10px 20px;
    border: none;
    margin-left: 10px;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    text-transform: uppercase;
    width: 126px;
    :hover {
      background-color: ${COLORS.buttonTheme};
    }
    :focus {
      background-color: ${COLORS.buttonTheme};
    }

    ${appereance === "progressStyle" &&
    css`
      :hover,
      :focus {
        background-color: ${COLORS.buttonBlue};
      }
    `}

    ${appereance === "doneStyle" &&
    css`
      :hover,
      :focus {
        background-color: ${COLORS.buttonGreen};
      }
    `}
  `
);
