import React from "react";
import { useSelector } from "react-redux";

function R() {
    const usersList = useSelector((state) => state.usersReducer.userslist);
    return (
        <div>
            {usersList.map((u) => (
                <p>{u.username}</p>
            ))}
        </div>
    );
}

export default R;
