const { expect } = require("chai");

const subtract = require("./index");

describe("Server", () => {
  it("subtracts values", () => {
    expect(subtract(3, 2)).to.equal(1);
  });
});
