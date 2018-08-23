# gatsby-tailwind-emotion
Crufting up a default Gatsby site and looking at what needs to change to turn it
into a gatsby-tailwind-emotion site.  This is more an exercise to see what's going on in these new (to me) frameworks.

Trying to see what changes under the hood to move from a starter:
[gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) to [gatsby-tailwind-demo](https://github.com/jlengstorf/gatsby-tailwind-demo).


Feel free to follow along with the commits.

Written on 2018-08-23, while Gatsby is in V2 Beta

## Recipe

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli@next
```

And run from your CLI:
```sh
gatsby new xxxx https://github.com/gatsbyjs/gatsby-starter-default\#v2
```

Then you can run it by:
```sh
cd xxx
gatsby develop
```

Adding several dependencies:
```sh
yarn add tailwindcss babel-plugin-tailwind emotion react-emotion emotion-server  gatsby-plugin-emotion postcss postcss-cli
```

Following the tailwindcss installation docs:
[tailwind installation](https://tailwindcss.com/docs/installation)
