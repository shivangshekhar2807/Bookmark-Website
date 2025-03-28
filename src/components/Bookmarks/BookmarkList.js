import { useContext, useEffect, useState } from "react";
import AllContext from "../Store/Store-Context";
import BookmarkItem from "./BoomarkItem";
import { Container, ListGroup } from "react-bootstrap";

function BookmarkList() {
    const [showBookmarks, setShowBookmarks] = useState([]);
    const ContextData = useContext(AllContext);
    const add = ContextData.Add;
    const Delete = ContextData.Delete;
    const Edit = ContextData.Edit;

    useEffect(() => {
        const getHandler = async ()=>{
            
            try {
                const getDataresponse = await fetch("https://movies-e-commerce-default-rtdb.firebaseio.com/Bookmark.json");

                if (!getDataresponse.ok) {
                    throw new Error(getDataresponse.error);
                } 
                else {
                    const getDataJson = await getDataresponse.json();
                    const transformedBookmark = [];
                    for (const key in getDataJson) {
                        transformedBookmark.push({
                            title: getDataJson[key].title,
                            url: getDataJson[key].url,
                            id: key,
                        })
                    }
                    console.log(transformedBookmark)
                    setShowBookmarks(transformedBookmark);
                     
                }
            }
            catch (error) {
                alert(error.message);
            }
        }
        getHandler();
    },[add,Delete,Edit])

    return (
    <Container className="mt-4">
      <ListGroup>
        {showBookmarks.map((item) => (
          <BookmarkItem key={item.id} item={item} />
        ))}
      </ListGroup>
    </Container>
  );
        
}
export default BookmarkList;