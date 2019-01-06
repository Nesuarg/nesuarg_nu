# Nesuarg Github/Netlify Portfolio

Personal github portfolio, with continiues deployement with netlify.
Build with react

## Getting Started

- Clone project `https://github.com/Nesuarg/nesuarg_nu.git`

### Prerequisites

This project use the github api, so its kinda required to have a some repos on github.
note that there is some code which connects netlify Functions `https://www.netlify.com/docs/functions/`
I have added a json file with githubs color codes, also an experiment how to use Netlify Functions.
its basic stuff, but the npm/yarn run Prod command just adds the method to run the lambda on the server.
Maybe this should be a dependency by its self later.

### Installing

> dev use 2 terminals

```
$ npm install
$ npm run start-dev
$ npm start:lambda
```

> prod

```
$ npm install
$ npm run Prod
```


## Deployment

Set up Netlify deployement with Github, with is very easy to setup
[netlify-continuous-deployment](https://www.netlify.com/docs/welcome/#continuous-deployment);

## Authors

* **Jannik Grausen Fischer** - *nesuarg* - [github profile](https://github.com/nesuarg)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* netlify
