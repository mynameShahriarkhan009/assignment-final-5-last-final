 # Dev Stack

A React and Tailwind CSS website where you can browse tech tools and add your favorites to a stack. Data comes from a JSON file, nothing is hardcoded.

## Tech Used

- React (Vite)
- Tailwind CSS
- react-toastify
- JavaScript ES6+
- JSON

## Top Features

- Add to Stack, no duplicates allowed
- Cards load from a JSON file, not hardcoded
- One place to change the whole color theme

## React Questions

What is JSX and why is it used in React? <br/>
JSX is a way of writing HTML like syntax inside JavaScript. Behind the scenes, it gets compiled into React.createElement() calls. We use it because it lets us keep UI and logic in the same file, making it easier to read and write. For example, in TechCard.jsx I wrote div, img, and tech.name directly, but internally this gets converted into plain JavaScript objects.

What is the main difference between props and state? <br/>
props are data passed from a parent to a child component, and the child cannot change them, they are read only. state is a component's own data, which the component itself can update, and updating it triggers a re-render. For example, in App.jsx, stack is a state, and I pass it down as a prop to StackSidebar.

What does the useState hook do, and where did you use it in this project? <br/>
useState returns a value and a function to update that value, and updating the value causes the component to re-render. In this project I used three states in App.jsx, techList for the data loaded from JSON, stack for the technologies the user has selected, and loading to track whether the data is still being fetched.

What does the useEffect hook do, and why was it needed to load the JSON data? <br/>
useEffect runs a side effect after the component renders, things like an API call, a fetch request, or setting up an event listener. You cant call fetch directly while JSX is rendering, so I used useEffect with an empty dependency array so it fetches techData.json once, right after the component mounts, and stores it in techList.

Why does each item need a unique key prop when creating a list with .map()? <br/>
React uses the key to figure out which item in a list is new, which was removed, or which changed position, so it can update only what changed instead of re rendering the whole list. This keeps performance good and avoids bugs. I used tech.id as the key for each TechCard, not the index, because id is always unique for each technology.

What is conditional rendering, and where did you use it in this project? <br/>
Conditional rendering means showing different UI based on a condition. I used it in App.jsx, where loading true shows a spinner and loading false shows the TechGrid. I also used it in StackSidebar.jsx, where an empty stack shows "Your stack is empty" and a non empty stack shows the list of items with a Remove All button.

How is data passed from a parent to a child, and how does a child send data back to a parent? <br/>
Data goes from parent to child through props, for example App.jsx passes techList and stack down to TechGrid. To send data back up, the parent passes a function down as a prop, and the child calls that function. For example, addToStack in App.jsx is passed down to TechCard as onAddToStack, and clicking the button calls that function, which updates the stack state back in App.jsx.
