# React Native Web

This combines the previos example with react navigation to demonstrate how different screens of the app can be assigned to different urls deployed using [Netlify](https://react-native-examples-web-kitten-nav.netlify.app/)

## URL Navigation

Some jiggery-pokery is required to get deep link style urls to work on the web. This because you probably want to deploy the web app to a static hosting site (such as Netlify), and get a browser to identify a whole range of urls (e.g. https://react-native-examples-web-kitten-nav.netlify.app/, https://react-native-examples-web-kitten-nav.netlify.app/second and https://react-native-examples-web-kitten-nav.netlify.app/third) while still opening the same app bundle, which is actually deployed to https://react-native-examples-web-kitten-nav.netlify.app/index.html.

Once the browser has opened https://react-native-examples-web-kitten-nav.netlify.app/index.html (under the hood), you then need the javascript to look at the urlbar and adjust the screen that is displayed accordingly. This prevents every url from just showing the home page/screen.

A couple of additions are required for this. First you need to tell React Navigation of the domain name (called prefix) that the site will be publically deployed at in the [linking config](./src/App.tsx).

Second, for Netlify (or whichever other static site host you use) you need a way to tell it to redirect all queries to index.html, which for Netlify we do with the [netlify.toml](./netlify.toml) config file. When I get time, I'll dig out how to do this with S3/Cloudfront.


## TBC

When I get time, I'll go into more detail on deep links for the mobile app itself.