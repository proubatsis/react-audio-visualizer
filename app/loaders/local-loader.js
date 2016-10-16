/* globals URL:false */

// Return a url for the given file object
var localLoader = function(file) {
    return URL.createObjectURL(file);
};

export default localLoader;
