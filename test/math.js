import { expect } from "chai";
import Vector from "../app/math/vector.js";

describe("Vector", () => {
    it("should create a vector", () => {
        let actual = Vector.create(5, 2);
        let expected = { x: 5, y: 2 };

        expect(expected).to.eql(actual);
    });

    it("should rotate a vector", () => {
        let actual = Vector.rotate(3 * Math.PI / 2, Vector.create(0, -1));
        actual.x = Math.round(actual.x);
        actual.y = Math.round(actual.y);

        let expected = { x: -1, y: 0 };

        expect(expected).to.eql(actual);
    });

    it("should scale a vector", () => {
        let actual = Vector.scale(4, Vector.create(2, 10));
        let expected = { x: 8, y: 40 };

        expect(expected).to.eql(actual);
    });
});
