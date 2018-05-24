# Where Am I

Simple (now) microservice that will return the city and country of the last checked in place on Swarm/Foursquare of a user.

Since this is pretty rough, you will just have to hardcode two ENV VARIABLES

These come from from <https://foursquare.com/developers/explore#req=users%2Fself>:

```
https://api.foursquare.com/v2/users/self?oauth_token=xxx&v=nnn
```

A Google maps api key can be found at <https://console.developers.google.com/apis/credentials?project=_>

Then you can use this as

```sh
GOOGLE_API_KEY=yyy FOURSQUARE_API_KEY=xxx FOURSQUARE_VERSION=nnn yarn dev
```

It can be deployed to now like this:

```sh
now -e GOOGLE_API_KEY=yyy -e FOURSQUARE_API_KEY=xxx -e FOURSQUARE_VERSION=nnn
```
