import { MemoryRouter } from "react-router-dom";
import { render, screen } from "react-dom";
import { Register } from "./Register";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("http:localhost:8080/auth/data", (req, res, ctx) => {
    return res(
      ctx.json({
        result: {
          contiente: ["America", "Europa", "Otro"],
          registro: ["Otro", "Latam", "Brasil", "America del Norte"],
          Rol: ["Team Member", "Team Leader"],
        },
      })
    );
  })
);

it("fetch role options", async () => {
  render(<Register />, { wrapper: MemoryRouter });

  expect(
    screen.getByRole("option", { name: "Seleccionar roo..." })
  ).toBeInTheDocument();

  expect(
    await screen.findByRole("option", { name: "Europa" })
  ).toBeInTheDocument();
});
