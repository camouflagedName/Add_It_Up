### Init Planning
For me, the initial process was visualizing a generic idea of what the app would look like. To do this, I broke down and wrote out each of the 3 main features and what their functions would be. 

This can be seen on the App.js page, though, I modified it since then to just provide basic info on each component. Initially, though, it contained some psuedo-code to help me identify what function or action would be associated with each.

With React's focus on building components, this qickly transformed into the MathExpression, UserInput, and Feedback components.

![Figma wireframe](/wireframe.PNG)

Early on, I tried to have each component only focus on rendering while letting App.js hold the logic. This avoided having to pass state up and downstream, which tends to feel bug prone. Using a state management library, like Redux, could help with this, but having keeping the logic central allowed felt like it allowed easier management of each render.

For instance, I had initially made the Timer component self-contained and kept all the logic within Timer.jsx. As I integrated it more into the rest of the app (having other components react to it and it reacting to other components), this became increasingly difficult. Moving it's logic to the container (App.js), resolved this.

### App Description

- User Interactions
    Users interact as they would any web app:
        1. Submit button submits data to mathjs
        2. Input allows user to write their response
        3. information is rendered on the DOM
        4. Additional button renders and allows user to update the problem set 

- Component Interaction
    The app is made up of a container (App.js) and five components. Most of the logic is contained in App.js. Data is passed from App.js to each component through props, which come from corresponding state variables. 

    The app itself communicates to mathjs through a get call. Mathjs allowed for both post and get, but since nothing was being updated on the api endpoint and was slimmer, I chose to go with the get call.

- Component Breakdown
    Starting with MathExpression, my only goal was to render two random numbers, which can be done with JS's Number class. Since this would be updating on each render, I made a state array to hold each number. Increasing this array could allow for additional numbers and the creation of more complex problems in the future.

    The addition sign was hardcoded in, but an additional state array of operations could provide more dynamic options, as well.

    UserInput was a basic form that just updated state using an event listener. In App.js, a fetch call was made based on the mathjs api docs. The data from here was retrieved and sent to the Feedback component.

    The Feedback component compares the users input and with the retrieved answer and then renders a message using ternary operator. I found storing HTML in a variable was the way that looked the cleanest.

    The Progress component was my first add-on component. I used a stateful counter that updated each time a user clicked to move on to the next problem and passed that on to the Progress component with another counter that only updated when the correct answer and user answer were the same.

    As stated previously, the Timer was troublesome because initially, it's logic was self-contained. The timer has a lot more "moving parts" since it has to be paused, restarted, and has to automatically set off other functions or renderings. Moving the logic to the main App.js resolved this.

- UI
    Bootstrap was used to build the UI. I used responsive columns so that it could display properly on phones and regular screens.

### Additions
- Next, I would add in dark mode, since I am a big fan of having the option to switch UIs from light to dark. It takes more planning to get the color combos right, so that it doesn't look flat.

- I think adding in more complex math problems could be relatively simple since it would just require making the number array larger. The api call to mathjs would just have those variables passed to it.

- Tracking or maintaining questions would only require the randomly generated items (operations and values) to be pushed into a stateful array. I think what could be more interesting is also tracking which ones were correct and the amount of time it took the answer each question. In that situation, I would just use an object/tuple that contained 3 entries: time, problem, and answeredCorrect).


**Note**
I tend to break JS's commonplace convention of ending expressions with `;`. This is on purpose and a personal preference, mainly because it is visually similar to Ruby and Python and makes switching among slightly easier while also looking cleaner (only my opinion). It saves nothing in file size, though, and I have found very few people break this convention.