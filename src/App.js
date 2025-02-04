import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component.jsx"
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component.jsx";



const Shop = () => {
  return <h1>This is shop page!</h1>
}

const App = () => {
    return (
      <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='sign-in' element={<SignIn />}/>
         </Route>
      </Routes>
    )
}

export default App;
