import styled from "@emotion/styled";

export const Button = styled.button`
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

  &:hover {
    opacity: 0.9;
  }

  box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7, -0.5vmin -0.5vmin 1vmin #fff;
`;
