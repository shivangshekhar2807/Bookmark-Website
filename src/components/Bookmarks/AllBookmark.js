import BookmarkForm from "./BookmarkForm";
import BookmarkList from "./BookmarkList";


function AllBookmark() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#adb5bd", 
          minHeight: "100vh",
          paddingTop: "0", 
        }}
      >
        <BookmarkForm></BookmarkForm>
        <BookmarkList></BookmarkList>
      </div>
    </>
  );
}

export default AllBookmark;