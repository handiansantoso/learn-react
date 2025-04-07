# Learning react with NamasteReact

# Lesson 5: useState, import default and name, implements search and filter rating

# Lesson 6: Implements SwiggyAPI, Login/Logout button, filtered data, React Fibre (reconciliation algorithm rerenders when state changed)

# Lesson 7:
Implements routing using react-router createBrowserRoute, RouteProvider, Link
Create dynamic Restaurant detail page
Create About, Contact Us and route error page

# Lesson 9:
Creating your own hooks (to handle api load)
Make component lazy load (using lazy and Suspense component)

# Lesson 10;
Setup tailwind css and replace css to tailwind

# Lesson 11:
Higher order component -> Creating wrapper component 
Lifting State up -> 
    Moving state to the parent component -> share state among sibling components to only show 1 item (accordion)
Context -> createContext() -> useContext() -> Context.Provider wrapper - use to create data that is accesible everywhere

# Lesson 12: Redux Store
Create store using configureStore function from redux
Create slice (slice can be group for different functions like cart, user login, etc) using createSlice
Specify name, initialState, reducers in slice
Export default slice.reducer, name export all the exposed reducers as slice.action
configure created slice reducer into configureStore reducer
To access data useSelector hooks (store) => store.sliceName.stateName
To call action use dispatch hooks
Wrap the component tat will use redux store using Provider specify store with appStore in this example