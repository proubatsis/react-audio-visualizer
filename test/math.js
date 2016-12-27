import { expect } from "chai";
import Vector from "../app/math/vector.js";
import Shape from "../app/math/shape.js";
import Util from "../app/math/util.js";

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

describe("Shape", () => {
    it("should create a shape", () => {
        let actual = Shape.create([Vector.create(0, 0), Vector.create(0, 3), Vector.create(7, 1)], "#0f0");
        let expected = {
            points: [
                Vector.create(0, 0),
                Vector.create(0, 3),
                Vector.create(7, 1)
            ],
            color: "#0f0"
        };

        expect(expected).to.eql(actual);
    });

    it("should rotate a shape", () => {
        let actual = Shape.create([Vector.create(0, 0), Vector.create(0, 3), Vector.create(7, 0)], "#0f0");
        actual = Shape.rotate(Math.PI / 2, actual);

        // Round the points
        actual.points = actual.points.map((p) => {
            return {
                x: Math.round(p.x),
                y: Math.round(p.y)
            };
        });

        let expected = {
            points: [
                Vector.create(0, 0),
                Vector.create(-3, 0),
                Vector.create(0, 7)
            ],
            color: "#0f0"
        };

        expect(expected).to.eql(actual);
    });

    it("should scale a shape", () => {
        let actual = Shape.create([Vector.create(0, 0), Vector.create(0, 3), Vector.create(7, 1)], "#0f0");
        actual = Shape.scale(3, actual);

        let expected = {
            points: [
                Vector.create(0, 0),
                Vector.create(0, 9),
                Vector.create(21, 3)
            ],
            color: "#0f0"
        };

        expect(expected).to.eql(actual);
    });

    it("should translate a shape", () => {
        let actual = Shape.create([Vector.create(0, 0), Vector.create(0, 3), Vector.create(7, 1)], "#0f0");
        actual = Shape.translate(5, 2, actual);

        let expected = {
            points: [
                Vector.create(5, 2),
                Vector.create(5, 5),
                Vector.create(12, 3)
            ],
            color: "#0f0"
        };

        expect(expected).to.eql(actual);
    });

    it("should set a shape's position", () => {
        let actual = Shape.create([Vector.create(1, 0), Vector.create(0, 3), Vector.create(7, 1)], "#0f0");
        actual = Shape.setPosition(2, 2, actual);

        let expected = {
            points: [
                Vector.create(2, 2),
                Vector.create(1, 5),
                Vector.create(8, 3)
            ],
            color: "#0f0"
        };

        expect(expected).to.eql(actual);
    });
});

describe("Util", () => {
    it("should sum an array from the given index up to the given length", () => {
        let array = [ 1, 3, 2, 7, 4 ];
        const expected = 12;
        const actual = Util.arraySum(array, 1, 3);
        expect(expected).to.eql(actual);
    });
});
