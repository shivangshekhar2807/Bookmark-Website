import { useState } from "react";
import AllContext from "./Store-Context";




function Wrapper(props) {

    const [Add, setAdd] = useState(null);
    const [Delete, setDelete] = useState(null);
    const [Edit, setEdit] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    function AddBookmarkHandler(obj) {
        setAdd(obj);
    }
    
    function DeleteBookmarkHandler(obj) {
        setDelete(obj);
    }

    function EditBookmarkHandler(obj) {
        setEdit(obj)
       
    }

    function IsEditbookmarkHandler(val) {
         setIsEdit(val);
    }

    

    return <AllContext.Provider value={{
        Add: Add,
        Delete: Delete,
        Edit: Edit,
        isEdit: isEdit,
        isEditbookmark:IsEditbookmarkHandler,
        AddBookmark: AddBookmarkHandler,
        DeleteBookmark: DeleteBookmarkHandler,
        EditBookmark:EditBookmarkHandler,
    }}>{props.children}</AllContext.Provider>
}

export default Wrapper;