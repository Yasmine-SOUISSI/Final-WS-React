import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "./../JS/Actions/action";

function APIRedux() {
    // before hooks :
    //mapStateToDispatch
    //after hooks : useDispatch()
    const dispatch = useDispatch();
    //when the component is  mount
    // el component bch tabth request
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    //import mtaa el data mel store
    const usersl = useSelector((state) => state.apiReducer.users);
    return (
        <div className="users">
            {usersl.map((user) => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default APIRedux;
