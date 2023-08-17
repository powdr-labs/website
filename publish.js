// This script can be used for manual publishing

// $ npm run build
// $ node publish.js

const ghpages = require("gh-pages");

ghpages.publish("out", { dotfiles: true });
console.log("Published");