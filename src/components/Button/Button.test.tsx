import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button test cases", () => {
  let onClick: () => void;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it("should render successfully", () => {
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should check if button is clicked", async () => {
    render(<Button onClick={onClick}>Button</Button>);
    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test("should render primary button", () => {
    const { asFragment } = render(
      <Button color="primary" onClick={onClick}>
        Primary Button
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should render secondary button", () => {
    const { asFragment } = render(
      <Button color="secondary" onClick={onClick}>
        Secondary Button
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should render danger button", () => {
    const { asFragment } = render(
      <Button color="danger" onClick={onClick}>
        Danger Button
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should render warning button", () => {
    const { asFragment } = render(
      <Button color="warning" onClick={onClick}>
        Warning Button
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
