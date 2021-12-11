const initialState = {
    userslist: [
        {
            id: Math.random(),
            username: "Sakis",
            age: "32 ans",
            formation: "React JS",
        },
        {
            id: Math.random(),
            username: "Sakis",
            age: "32 ans",
            formation: "React JS",
        },
    ],
};

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "":
            return {};

        default:
            return state;
    }
};
