import React from "react";
import { mount } from "enzyme";
import { assert } from "chai";
import { spy } from "sinon";

import FileLoadButton from "../app/components/file-load-button.jsx";

describe("File load button", () => {
    it("should call fileChange property", () => {
        const cb = spy();
        const button = mount(<FileLoadButton fileChange={cb} />);

        var mockEvent = {
            target: {
                files: [
                    { name: "Hello" }
                ]
            }
        };

        button.find("input").simulate("change", mockEvent);
        assert(cb.calledOnce);
    });

    it("should pass file object to fileChange property", () => {
        const cb = spy();
        const button = mount(<FileLoadButton fileChange={cb} />);

        var mockEvent = {
            target: {
                files: [
                    { name: "Hello" }
                ]
            }
        };

        button.find("input").simulate("change", mockEvent);
        assert(cb.calledOnce);
        assert(cb.calledWith(mockEvent.target.files[0]));
    });

    it("should not call fileChange when there are no files", () => {
        const cb = spy();
        const button = mount(<FileLoadButton fileChange={cb} />);

        var mockEvent = {
            target: {
                files: []
            }
        };

        button.find("input").simulate("change", mockEvent);
        assert(!cb.calledOnce);
    });
});
