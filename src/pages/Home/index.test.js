import { fireEvent, render, screen } from "@testing-library/react";

import Page from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Page />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Page />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En Cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    // to implement
  });
  it("a list a people is displayed", () => {
    render(<Page />);
    const peopleId = screen.getAllByTestId("peopleId");
    expect(peopleId).toHaveLength(6);
    // to implement
  });
  it("a footer is displayed", async () => {
    render(<Page />);
    const footerTitle = await screen.findByText("Contactez-nous");
    expect(footerTitle).toHaveTextContent("Contactez-nous");
  });
  it("an event card, with the last event, is displayed", async () => {
    // to implement
  });
});
