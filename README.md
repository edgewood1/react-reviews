## The app

The spec for this app requires two views:
1. the 'list view' that shows the rating, username, and date on each object
    - click on a card to see details in the 'detail view'
2. the 'detail view' that shows 2 cards: a main card with object details + a review card with the review 
    - click the arrow to return
    - if no review is present, click the + to add a review
    - if a review is present, click the edit button to revise the review
    - only one review is allowed per object.

Other details
- shouldn't use typescript
- should be responsive, so both pages scale to phone or desktop
- consider adding a test
  

## Steps for running this app

`nvm use stable` - run stable node

`npm run install` - install dependencies

`npm run serve` - run json-server, whose api will appear at [http://localhost:8000/reviews]

`npm run start` - run the app


## Test the List page

`npm run test` - single test that uses a mock api

# Branchs

- main: inital attempt
- app-state

## Create a build

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Other

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

