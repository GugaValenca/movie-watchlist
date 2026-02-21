import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders main movie filters", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: /All Movies/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /To Watch/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Watched/i })).toBeInTheDocument();
  });

  it("adds a new movie and shows it in the list", async () => {
    const user = userEvent.setup();
    render(<App />);

    const titleInput = screen.getByLabelText(/Movie Title/i);
    const addButton = screen.getByRole("button", { name: /\+ Add Movie/i });

    await user.type(titleInput, "Inception");
    await user.click(addButton);

    expect(screen.getByText("Inception")).toBeInTheDocument();
  });
});
