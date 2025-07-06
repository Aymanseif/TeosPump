import { render, screen, fireEvent } from "@testing-library/react";
import CreateToken from "../pages/create-token";

describe("CreateToken page", () => {
  it("shows error if minting fails", async () => {
    render(<CreateToken />);
    fireEvent.click(screen.getByText("Mint Token"));
    const alert = await screen.findByText(/Error:/);
    expect(alert).toBeInTheDocument();
  });
});
