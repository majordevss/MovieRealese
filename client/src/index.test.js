const add = require("./index");

describe("Client", () => {
  it("adds values", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
