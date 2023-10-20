import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personnel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
    render(<Home />);
    screen.findByTestId("eventListComponent");
  });
  it("a list a people is displayed", async () => {
    // to implement
    render(<Home />);
    await screen.findByText("Samira");
    await screen.findByText("Jean-baptiste");
    await screen.findByText("Alice");
  });
  it("a footer is displayed", () => {
    // to implement
    render(<Home />);
    screen.findByText("Notre derniére prestation");
    screen.findByText("45 avenue de la République, 75000 Paris");
    screen.findByText("01 23 45 67 89");
    screen.findByText("contact@77events.com");
    screen.findByText(
      " Une agence événementielle propose des prestations de services spécialisées"
    );
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
    render(<Home />);
    screen.findByTestId("lastEventInFooter");
  });
});
