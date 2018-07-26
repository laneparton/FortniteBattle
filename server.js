const express = require('express');
const app = express();
const Fortnite = require("fortnite-api");
const port = process.env.PORT || 5000;

let fortniteAPI = new Fortnite(
    [
        "parton720@gmail.com",
        "tAlfgC2nWhd9",
        "MzRhMDJjZjhmNDQxNGUyOWIxNTkyMTg3NmRhMzZmOWE6ZGFhZmJjY2M3Mzc3NDUwMzlkZmZlNTNkOTRmYzc2Y2Y=",
        "ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ="
    ],
    {
        debug: true
    }
);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// Get player stats given their username and platform
app.get('/get_stats/:user/:platform', function(req, res) {
	var user = req.params.user;
	var platform = req.params.platform;

	fortniteAPI.login().then(() => {
    fortniteAPI
        .getStatsBR(user, platform)
        .then(stats => {
              res.send(JSON.stringify(stats));
        })
        .catch(err => {
            console.log(err);
        });
	});
});