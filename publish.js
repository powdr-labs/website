const ghpages = require("gh-pages");
const fs = require("fs");

fs.openSync("out/.nojekyll", "w");

ghpages.publish("out", { dotfiles: true });
console.log("Published");