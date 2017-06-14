# Where Am I

Simple (now) microservice that will return the city and country of the last checked in place on Swarm/Foursquare of a user.

Since this is pretty rough, you will just have to hardcode two ENV VARIABLES

These come from from <https://developer.foursquare.com/docs/explore#req=users/self>:

```
https://api.foursquare.com/v2/users/self?oauth_token=XXXXXXX&v=NNNNN
```

Then you can use this as

```sh
OAUTH_TOKEN=XXXXXXX VERSION=NNNNN yarn start
```

It can be deployed to now like this:

```sh
now -e OAUTH_TOKEN=XXXXXXX -e VERSION=NNNNN
```
