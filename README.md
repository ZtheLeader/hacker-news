# HackerNews by [Muhammad Zain](https://sites.google.com/view/meetzain)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## PS

>I've added comments, JSDocs, and named methods, variables so that you may understand them easily. I also committed frequently and made sure that commit messages are self explanatory. Hope there is nothing that you find hard to understand. 
>
> -Zain

Also
> In the Task detail we're asked to filter `New` and `Top` stories but in Mockup there are New and Past stories.
> According to the available API: https://github.com/HackerNews/API#new-top-and-best-stories,
> Only New, Top and Best stories are available to be fetched So I'm implemented **New/Top/Best** stories to resolve any confusion
 
 
## Project Information

### Setting up
 1. Extract the project from compressed file.
 2. `cd hacker-news`
 3. Run `yarn` or `npm install`
 4. `yarn start` or `npm run start`

Additionally, to create a build run, ``yarn build``

### Unit Tests
`src/specs/App.test.js` file contains all the unit tests of available components and pages. Every `describe(..` block represents a separate test suit and there are multiple tests in when suit which are represented by `test(..` block. Tests descriptions should help in understanding  what is actually happening in a test.

Unit tests can be run by using `yarn test` command.

### Version Control and Branches
I've used git as version control and I've made extensive commits with self explanatory messages so that my progress is highlighted through commits. See all commits by running `git log`.

I've also made a few branches

 1. **`master`** is the default branch which has all the commits of other branches `merge`d in it.
 2. **`hackerNews/design-ui`** as the name suggests, I designed all the static UI and wrote Sass in this branch.
 3. **`hackerNews/implement-basic-functionality`** has basic functional part in it. Here I split my static UI into reusable components, create API methods, Implement pagination etc.
 4. **`hackerNews/implement-extra-functionality`** Here I add extra functionality which is beyond the description of Task. Like, I add React-Timeago here, Show loaded/total stories count here, hide Load More button if no more posts are here, and Introduce `loading` state etc.
 5. **`hackerNews/test-specs`** Implements Unit tests of all the components. Tests can be found in `src/specs/App.test.js`
 6. **`hackerNews/update-readme.md`** Updates the [README.md](README.md) file.

### Directory Information
 - API methods (using native `fetch` API with `async/await` pattern): `src/api/stories.js`
 - Sass styles of entire application: `src/assets/sass`
 - Images/icons/logos: `src/assets/images`
 - Application Level Components: `src/Components`
 - Available pages (currently we only have `Feed`page): `src/pages/Feed.js`
 - Test specs of all the components and pages: `src/specs/App.test.js`
 - Utility methods: `src/utils/utils.js`
 - Homepage: `src/App.js`

### 3rd Party Libraries Used

 1. [Bootstrap](https://getbootstrap.com/)
 2. [React Timeago](https://github.com/nmn/react-timeago)
