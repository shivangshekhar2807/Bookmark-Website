import { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import AllBookmark from "./AllBookmark";
import AllContext from "../Store/Store-Context";

function BookmarkItem({ item }) {

    const ContextFunction = useContext(AllContext);

    function EditHandler() {
        ContextFunction.EditBookmark({
            title: item.title,
            url:item.url,
          id: item.id,
        })
      ContextFunction.isEditbookmark(true);

       
        
    }


   async function deleteHandler() {
        try {
            const deleteDataResponse = await fetch(`https://movies-e-commerce-default-rtdb.firebaseio.com/Bookmark/${item.id}.json`, {
                method:'DELETE'
            })
            if (!deleteDataResponse.ok) {
                throw new Error(deleteDataResponse.error)
            }
            else {
                ContextFunction.DeleteBookmark(item.id);
            }
        }
        catch (error) {
            alert(error.message);
        }
    }
  return (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-center bg-light border rounded mb-2"
      style={{ padding: "12px 20px" }}
    >
      
      <div style={{ maxWidth: "70%", overflow: "hidden" }}>
        <h5 className="mb-1 text-dark">{item.title}</h5>

       
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary d-inline-block text-truncate"
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
          }}
        >
          {item.url}
        </a>
      </div>

      
      <div>
        <Button variant="danger" className="me-2" onClick={deleteHandler}>
          Delete
        </Button>
        <Button variant="warning" className="text-white" onClick={EditHandler}>
          Edit
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default BookmarkItem;