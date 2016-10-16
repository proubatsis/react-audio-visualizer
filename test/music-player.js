import React from "react";
import { mount } from "enzyme";
import { assert } from "chai";

import MusicPlayer from "../app/components/music-player.jsx";
import PlayButton from "../app/components/play-button.jsx";

describe("MusicPlayer", () => {
    it("should initially hide the play button", () => {
        const player = mount(<MusicPlayer />);
        assert(!player.contains(<PlayButton audio={null} />));
    });

    it("should show the play button when audio is truthy", () => {
        const player = mount(<MusicPlayer />);
        player.setState({
            audio: 123
        });

        assert(player.contains(<PlayButton audio={123} />));
    });
});
