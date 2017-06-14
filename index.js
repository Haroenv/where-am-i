const fetch = require('node-fetch');
const geocoder = require('node-geocoder')();

const { OAUTH_TOKEN, VERSION } = process.env;

module.exports = async () => {
  try {
    const response = await fetch(
      `https://api.foursquare.com/v2/users/self?oauth_token=${OAUTH_TOKEN}&v=${VERSION}`
    );
    const fsq = await response.json();
    const {
      lat,
      lng: lon,
    } = fsq.response.user.checkins.items[0].venue.location;
    const [{ city, country }] = await geocoder.reverse({ lat, lon });
    return { city, country };
  } catch (e) {
    return e;
  }
};
