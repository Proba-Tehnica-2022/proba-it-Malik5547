import "./App.css";
import { HomePage } from "./containers/HomePage";

import { Routes, Route } from "react-router-dom";
// import { CustomerAccessPage } from "./containers/customerAccessPage";

const App = () => (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
)

export default App;