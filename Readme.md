## React Native Examples

This app has examples for react native apps. 

The intention is to show basic configurations and examples and reflect my experience of working with a number of the core community libraries and tools that are not included within a bare bones React Native init app.

Things generally work much less easilly straight out of the box with React Native, at least compared with ReactJS (and the various build tools it gets used with such as Create React App and Gatsby).

Though I've favoured other tools in the past, my favourites these days include Apollo Graphql (for backend communication), ui Kitten for slick ui interfaces on mobile and mobile web. Kitten works nicely on web, something I can't say confidently for many of the other React Native ui libraries that rely under the hood on react-native-vector-icons.

Because I like to test thoroughly, I make heavy use of React Native Testing Library, and I want to be sure that everything I do can run through it.

## Examples

[Apollo Graphql](./examples/apollo-graphql) - with a component that renders within React Native Testing Library and a mocked request to the backend. It relies on the [schema](./schema.graphql) which is generated using the typescript codegen.
[Kitten](./examples/kitten) - this is a simple example using the Ui Kitten library. 
[Web](./examples/web) - this is a basic example of react native web. 
[Web Kitten](./examples/kitten) - this combines the Kitten and Web Examples
[Web Kitten Nav](./examples/web-kitten-nav) - this combines the previous example with react navigation to demonstrate how different screens of the app can be assigned to different urls deployed using [Netlify](https://react-native-examples-web-kitten-nav.netlify.app/) 



