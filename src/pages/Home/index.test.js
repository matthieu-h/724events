/* eslint-disable react/jsx-no-constructed-context-values */
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import DataContext from "../../contexts/DataContext";

const mockedDataEvents = {
  events: [
    {
      id: 1,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "User&product MixUsers",
      cover: "/images/alexandre-pellaes-6vAjp0pscX0-unsplash.png",
      description: "Présentation des nouveaux usages UX.",
      nb_guesses: 900,
      periode: "14-15-16 Avril",
      prestations: [
        "1 espace d'exposition",
        "1 scéne principale",
        "1 espace de restaurations",
      ],
    },
  ],
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "Nordic design week",
      description: "Conférences sur le design de demain dans le digital",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/teemu-paananen-bzdhc5b3Bxs-unsplash1.png",
    },
    {
      title: "Sneakercraze market",
      description: "Rencontres de spécialistes des Sneakers Européens.",
      date: "2022-05-29T20:28:45.744Z",
      cover: "/images/jakob-dalbjorn-cuKJre3nyYc-unsplash 1.png",
    },
  ],
};

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
  it("a list of events is displayed", async () => {
    // to implement
    render(
      <DataContext.Provider value={{ data: mockedDataEvents }}>
        <Home />
      </DataContext.Provider>
    );
    await expect(screen.queryAllByText("User&product MixUsers").length).toBe(2);
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
  it("an event card, with the last event, is displayed", async () => {
    // to implement
    render(
      <DataContext.Provider value={{ data: mockedDataEvents }}>
        <Home />
      </DataContext.Provider>
    );
    await screen.findByTestId("lastEventInFooter");
    await expect(screen.queryAllByText("User&product MixUsers").length).toBe(2);
  });
});
