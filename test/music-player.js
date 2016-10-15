import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import MusicPlayer from "../app/components/music-player.jsx";

describe("MusicPlayer", () => {
    it("should say music player", () => {
        const player = shallow(<MusicPlayer />);
        expect(player.text()).to.equal("Music Player");
    });
});
