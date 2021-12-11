import React from "react";

const UserCard = ({ user }) => {
    return (
        <>
            <h1>{user.name}</h1>
            <p>
                <span>{user.usermane}</span>
                <span>{user.email}</span>
                <span>{user.phone}</span>
            </p>
        </>
    );
};

export default UserCard;
