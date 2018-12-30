
// Get Language hex color codes which github uses for color scheme. (stored locally)
const json = require("./../github_colors/colors.json")
exports.handler = function(event, context, callback) {

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(json)
    })
}