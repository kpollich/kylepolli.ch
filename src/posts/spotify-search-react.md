---
title: "My First React App - Spotify Search"
subtitle: "Implementing a basic search page with React and ES6"
date: "2016-08-09"
---
I've been starting to slowly look into Facebook's [React](https://facebook.github.io/react/) library for a few weeks now. React has been gaining a lot of steam in the web development community as a powerful, expressive rendering library. I've been working as a primarily backend developer for about a year at this point, so I've never worked with any frontend frameworks like [Angular](https://angularjs.org/) or [Ember](http://emberjs.com/). In an effort to expand my skillset, and to embrace full stack Javascript, I decided to start reading/watching some React tutorials.

As I followed along with some tutorials and introductions on React, I decided to implement a *very* minimal, basic React app with some kind of unique or interesting functionality. Rather than implementing something trite like a "todo" application or something like that, I took a look at some public API's around the web. I settled on using Spotify's public search endpoint to search for artists, tracks, and albums via simple HTTP requests.

Before continuing, I'll link to the [GitHub repo](https://github.com/kpollich/spotify-react) for my Spotify search project. I've also hosted the project [here](/spotify-search) on my site as well.

## Project Setup

When I initially created this project, I used a project structure and config files based on a series of YouTube tutorials from a channel called [LearnCode.academy](https://www.youtube.com/user/learncodeacademy). However, about a week or so after I started hacking around, Facebook released [create-react-app](https://github.com/facebookincubator/create-react-app), a utility for creating boilerplate React applications with a set of smart defaults. I decided to abandon my configuration and convert the project to use Facebook's boilerplate.

Here's a quick glance at the the directory structure of my app with some notes:

```
|-- build - production ready assets
|-- config - eslint, babel, etc configs
|-- scripts - runnable build scripts, etc
|-- src - application code
  |-- components - React components...go figure!
  |-- utils - Abstracted utility methods
```

The project structure here is pretty much entirely the result of running `create-react-app`'s `eject` script, so you can hack around with that yourself. The only thing I did outside of their conventions was add the `components` and `utilities` directories under `src`. I ended up having some functionality I wanted to abstract, and that was just the directory structure I chose to organize my code.

## Code Samples

I'd like to dive into some pieces of code from my app that I found interesting or spent some time refactoring. All of the "meat and potatoes" code for the app are in the `src/components/` directory for the most part.

One of the more involved components I've written here is the `Search` component. You can find the full code for this component in `src/components/Search.js`. This is the component that renders the input field for search input as well sending the requests to Spotify's API to get back search results.

*Search.js lines [5-9](https://github.com/kpollich/spotify-react/blob/master/src/components/Search.js#L5-L9)*

```
export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { query: '', data: {}, inputCleared: false }
  }
```

The first thing you might notice here is that I'm using an ES6 class. `create-react-app` uses Babel to transpile ES6 code to ES5, so I'm able to write ES6 right away which was a really nice feature. Writing React without ES6 classes is a bit more painful, and being able to `extend` the `Component` class is very helpful for writing cleaner code without as many React-specific function calls like `getInitialState` and `createClass`.

When using ES6 classes for React components, you have to set the state of the component from within a constructor. Rather than using `getInitialState` or `setState`, I'm just initializing the component's state with some default values. `query` is the search term entered by the user, `data` is the result set returned by Spotify, and `inputCleared` is a flag I'm using to track when the search box is cleared out. Another convention here is the `super(props)` call. Since I'm extending React's `Component` class here, I need to call the `super` constructor with any properties passed into this component in order to get all intended functionality.

*Search.js lines [37-50](https://github.com/kpollich/spotify-react/blob/master/src/components/Search.js#L37-L50)*

```
fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (this.state.inputCleared || !data || keyword !== this.state.query) {
          return
        }

        this.setState({ data })
      })
```

This code sample demonstrates a non-React convention that I had never used before in the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API. When I initially wrote this code, which makes requests to Spotify's API, I was using jQuery's AJAX helpers to handle the requests. I saw a piece of code using `fetch` somewhere and decided to look into it soon afterwards, though, and I was very interested. `fetch` is great because it removes a lot of thought out of making HTTP requests in a browser application, and since it returns a Promise, there's no concern with nested callbacks, etc. There is one weird bit of logic in this code sample in that big conditional after I receive a response from Spotify. I ran into issues where I'd sometimes render results for requests that happened prior to the final keystroke the user entered into the search box, so I had to check that the results I received are for the `query` value in the component's state. I also had to add the `inputCleared` flag in order to remove all results from the page when the user empties out the search box. Another point of note is that I'm not `catch`ing any errors here. I haven't run into any issues where I've received an error response from Spotify, but adding a `catch` statement and reporting the error somehow would be a good addition to this bit of code.

*utils/index.js lines [12-24](https://github.com/kpollich/spotify-react/blob/master/src/utils/index.js#L12-L24)*

```
static getAlbums (albums) {
   return albums.items.map((album) => {
     const image = album.images[0]
     const imageUrl = image ? image.url : spotifyLogoUrl

     return <Album
       url={album.external_urls.spotify}
       image={imageUrl}
       name={album.name}
       key={album.id}
     />
   })
 }
```

The `Utils` class handles marshaling Spotify's response data into components with properties so that I can render them to the page. There are marshaling methods for `Album`, `Track`, and `Artist` components. All of these methods simply map over a result object that I receive during the `fetch` snippet above and return arrays of components with their properties set. Array methods like [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) have been extremely important in my work with backend node services, so it was very natural to use `map` to handle formatting this data here.

## Final Thoughts

I had a great time hacking around with this little React app, and I am definitely going to pursue writing some larger scale application using React. Having never worked with a Javascript framework before, I didn't really have a good idea what to expect or what kind of paradigms already exist in the frontend world, but I think all of React's conventions were very common sense and helpful. React definitely seems highly performant, as well. I'm not rendering a massive amount of data, but usually when implementing some kind of rendering event based on quickly changing input in a field it's necessary to implement some kind of delay or interval so that you're not making too many DOM manipulations. I didn't run into any problems with that, though, and I think that speaks to React's focus on rendering performance.

My next steps in the world of React, I think, will be to look into [Redux](https://github.com/reactjs/redux) and to implement some kind of single page application or web app using React. It seems to me that the hype around React is not all just "new and shiny", fabricated excitement. It definitely seems like this is the real deal and we'll be seeing a lot of React in the near future.

Thanks for reading!
