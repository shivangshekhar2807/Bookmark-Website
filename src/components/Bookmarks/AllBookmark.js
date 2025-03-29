import { useState } from "react";
import BookmarkForm from "./BookmarkForm";
import BookmarkList from "./BookmarkList";
import Loader from "./Loader";


function AllBookmark() {
  const [showLoader, setShowLoader] = useState(false)
  
  

  return (
    <>
      <div
        style={{
          backgroundColor: "#adb5bd", 
          minHeight: "100vh",
          paddingTop: "0", 
        }}
      >
        <BookmarkForm setShowLoader={setShowLoader}></BookmarkForm>
       
        {showLoader && <Loader></Loader>}
        <BookmarkList></BookmarkList>
      </div>
    </>
  );
}

export default AllBookmark;