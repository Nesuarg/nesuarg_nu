
// Get Language hex color codes which github uses for color scheme. (stored locally)
const json = require("./../github_colors/colors.json")

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = function(event, context, callback) {

    callback(null, {
        statusCode,
        headers,
        body: JSON.stringify(json)
    })
}