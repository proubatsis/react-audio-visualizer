const normalize = function(spectrum) {
    let m = Math.max.apply(null, spectrum);
    return spectrum.map((n) => n / m);
};

const volume = function(spectrum) {
    return spectrum.reduce((a, n) => a + n, 0);
};

export default { normalize, volume };
