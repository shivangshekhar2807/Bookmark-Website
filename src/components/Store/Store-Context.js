import { createContext } from "react";


const AllContext = createContext({
    AddBookmark: () => {},
    DeleteBookmark: () => { },
    EditBookmark:()=>{}
});

export default AllContext;

