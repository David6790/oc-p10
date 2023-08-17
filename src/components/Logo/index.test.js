import { render, screen } from "@testing-library/react";
import Logo from "./index";

describe("logo component ", () => {
  it("the logo component does render", async () => {
    render(<Logo />);
    const logoDiv = screen.getByTestId("logo-test-id");
    expect(logoDiv).toBeTruthy();
  });
});
