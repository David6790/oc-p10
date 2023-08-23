import { render, screen } from "@testing-library/react";
import Logo from "./index";

// test supplémantaire implementé pour verifier que le logo s'affiche bien lors du chargement de la page"
describe("logo component ", () => {
  it("the logo component does render", () => {
    render(<Logo />);
    const logoDiv = screen.getByTestId("logo-test-id");
    expect(logoDiv).toBeInTheDocument();
  });
});
