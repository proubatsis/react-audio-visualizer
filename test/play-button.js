import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import PlayButton from "../app/components/play-button.jsx";

describe("Play button", () => {
    it("should default to not playing state", () => {
        const button = shallow(<PlayButton />);
        expect(button.state().isPlaying).to.equal(false);
    });

    it("should toggle playing state on click", () => {
        const button = shallow(<PlayButton />);
        button.simulate("click");
        expect(button.state().isPlaying).to.equal(true);
        button.simulate("click");
        expect(button.state().isPlaying).to.equal(false);
    });
});
