import { useState } from "react";
import AllContext from "./Store-Context";




function Wrapper(props) {

    const [Add, setAdd] = useState(null);
    const [Delete, setDelete] = useState(null);
    const [Edit, setEdit] = useState({});

    function AddBookmarkHandler(obj) {
        setAdd(obj);
    }
    
    function DeleteBookmarkHandler(obj) {
        setDelete(obj);
    }

    function EditBookmarkHandler(obj) {
        setEdit(obj)
    }

    return <AllContext.Provider value={{
        Add: Add,
        Delete: Delete,
        Edit:Edit,
        AddBookmark: AddBookmarkHandler,
        DeleteBookmark: DeleteBookmarkHandler,
        EditBookmark:EditBookmarkHandler,
    }}>{props.children}</AllContext.Provider>
}

export default Wrapper;