import React from "react";
import { shallow } from "enzyme";
import { assert, expect } from "chai";
import { spy } from "sinon";

import VisualizerButton from "../app/components/visualizer-button.jsx";

describe("Visualizer button", () => {
    it("should display given text", () => {
        const cb = spy();
        const button = shallow(
            <VisualizerButton
                visualizerName="Bar Visualizer"
                visualizerSelect={cb}
            />
        );

        expect(button.text()).to.equal("Bar Visualizer");
    });

    it("should call the visualizerSelect property when clicked", () => {
        const cb = spy();
        const button = shallow(
            <VisualizerButton
                visualizerName="Bar Visualizer"
                visualizerSelect={cb}
            />
        );

        expect(cb.callCount).to.equal(0);
        button.simulate("click");
        expect(cb.callCount).to.equal(1);
    });

    it("should pass the given visualizer name to visualizerSelect property", () => {
        const cb = spy();
        const button = shallow(
            <VisualizerButton
                visualizerName="Bar Visualizer"
                visualizerSelect={cb}
            />
        );

        expect(cb.callCount).to.equal(0);
        button.simulate("click");
        expect(cb.callCount).to.equal(1);
        assert(cb.calledWith("Bar Visualizer"));
    });
});
