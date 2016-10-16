import React from "react";
import { mount } from "enzyme";
import { assert, expect } from "chai";
import { spy } from "sinon";

import VisualizerList from "../app/components/visualizer-list.jsx";
import VisualizerButton from "../app/components/visualizer-button.jsx";
import CircleDotVisualizer from "../app/visualizers/circle-dot-visualizer.js";

describe("Visualizer list", () => {
    it("should call the selectionChanged property when an item is clicked", () => {
        const cb = spy();
        const list = mount(<VisualizerList selectionChanged={cb} />);
        expect(cb.callCount).to.equal(0);
        list.find("VisualizerButton").first().simulate("click");
        expect(cb.callCount).to.equal(1);
    });

    it("should pass the appropriate visualizer when clicked", () => {
        const cb = spy();
        const list = mount(<VisualizerList selectionChanged={cb} />);

        expect(cb.callCount).to.equal(0);
        list.find("VisualizerButton").at(1).simulate("click");
        expect(cb.callCount).to.equal(1);

        assert(cb.calledWith(CircleDotVisualizer));
    });
});
