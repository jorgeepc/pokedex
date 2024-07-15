const { expect } = require("@playwright/test");

async function getPokemon(page) {
  // Click the get random pokemon button
  await page.getByRole("link", { name: "Get random pokemon" }).click();

  // Expects page to have a heading with the name Pokemon.
  await expect(
    page.getByRole("heading", { name: "Hola pokemon" })
  ).toBeVisible();
}

module.exports = { getPokemon };
