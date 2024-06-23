import { expect } from "chai";

describe("Stam tests suite", () => {
  describe("Test array get sorted", () => {
    it("should sort array by name", () => {
      const names = ["Adiel", "Tom", "John"];
      expect(names.sort()).to.be.equal(["Adiel", "John", "Tom"]);
    });
  });
});
