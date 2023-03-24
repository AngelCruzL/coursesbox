import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

export type ButtonColor = "primary" | "secondary" | "danger" | "warning";

export type ButtonProps = {
  /**
   * Button contents
   */
  children: string;
  /**
   * What background color to use
   */
  color?: ButtonColor;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

export const getColors = (color?: ButtonColor): SerializedStyles => {
  switch (color) {
    case "primary":
      return css`
        background-color: #6d5dfc;
        color: #e4ebf5e6;
      `;
    case "secondary":
      return css`
        color: #5e5c64e6;
      `;
    case "danger":
      return css`
        background-color: #dc3545e6;
        color: #e4ebf5e6;
      `;
    case "warning":
      return css`
        background-color: #ffca2ce6;
        color: #5e5c64e6;
      `;
    default:
      return css``;
  }
};

/**
 * Primary UI component for user interaction
 */
export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  inline-size: 15rem;
  block-size: 4rem;
  border-radius: 1rem;
  transition: all 0.4s ease;
  ${({ color }) => getColors(color)}
  box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7, -0.5vmin -0.5vmin 1vmin #fff;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7 inset,
      -0.5vmin -0.5vmin 1vmin #fff inset;
  }
`;

Button.defaultProps = {
  color: "primary",
};
