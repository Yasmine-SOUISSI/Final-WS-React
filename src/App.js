import "./App.css";
import { Data } from "./Components/Data";
import UserList from "./Components/UserList";
import { useState } from "react";
import R from "./Components/R";
import API from "./Components/API";
import APIRedux from "./Components/API-Redux";
function App() {
    const [users, setUsers] = useState(Data);
    return (
        <div className="App">
            <UserList users={users} />
            <R />
            <API />
            <APIRedux />
        </div>
    );
}

export default App;
