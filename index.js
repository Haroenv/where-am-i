const { send } = require('micro');
const got = require('got');
const { GOOGLE_API_KEY, FOURSQUARE_API_KEY, FOURSQUARE_VERSION } = process.env;
const geocoder = require('node-geocoder')({
  apiKey: GOOGLE_API_KEY,
});

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const {
      body: { response },
    } = await got(
      `https://api.foursquare.com/v2/users/self?oauth_token=${FOURSQUARE_API_KEY}&v=${FOURSQUARE_VERSION}`,
      { json: true }
    );

    const lastCheckin = response.user.checkins.items[0].venue.location;

    let { city, country } = lastCheckin;

    if (city === undefined || country === undefined) {
      const { lat, lng: lon } = lastCheckin;
      [{ city, country }] = await geocoder.reverse({ lat, lon });
    }

    return { city, country };
  } catch (err) {
    console.error(err);
    send(res, 500, { message: err.message });
  }
};
