
import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import AllContext from "../Store/Store-Context";
import BookmarkList from "./BookmarkList";

function BookmarkForm({setShowLoader}) {
    const [showForm, setShowForm] = useState(false);
    const titleref = useRef();
    const urlref = useRef();
    const ContextFunction = useContext(AllContext);
    const Edit = ContextFunction.Edit;
    const isedit = ContextFunction.isEdit;
    
    useEffect(() => {
       if (Edit && Edit.title && Edit.url) {
    titleref.current.value = Edit.title;
    urlref.current.value = Edit.url;
  } else {
    titleref.current.value = "";
    urlref.current.value = "";
  }
    }, [Edit])
    
    async function formUpdateHandler(event) {
        event.preventDefault();
        const title = titleref.current.value;
        const url = urlref.current.value;
        
        if (title === '' || url === '') {
            alert('Enter all the values')
        }
        else{
          setShowLoader(true)
            try {
                const updateDataResponse = await fetch(`https://movies-e-commerce-default-rtdb.firebaseio.com/Bookmark/${Edit.id}.json`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        title: title,
                        url: url,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (!updateDataResponse.ok) {
                    throw new Error(updateDataResponse.error)
                }
                else {
                    titleref.current.value = "";
                    urlref.current.value = "";
                    ContextFunction.EditBookmark({});
                    ContextFunction.isEditbookmark(false);
                    ContextFunction.AddBookmark(Math.random());
                    setShowLoader(false)
                
                }
            }
            catch (error) {
                alert(error.message);
            }
    }
    }

   async function formSubmitHandler(event) {
       event.preventDefault();
       const title = titleref.current.value;
       const url = urlref.current.value;

       if (title === '' || url === '') {
           alert('Enter all the values')
       }
      
       
       else {
            setShowLoader(true);
           try {
               const postdataresponse = await fetch("https://movies-e-commerce-default-rtdb.firebaseio.com/Bookmark.json", {
                   method: 'POST',
                   body: JSON.stringify({
                       title: title,
                       url: url,
                   }),
                   headers: {
                       'Content-Type': 'application/json'
                   }
               })
               titleref.current.value = '';
               urlref.current.value = '';
               if (!postdataresponse.ok) {
                   throw new Error(postdataresponse.error)
               }
               else {
                   const postdatajson = await postdataresponse.json();
               
                   ContextFunction.AddBookmark(postdatajson.name);
                   setShowForm(true);
                    setShowLoader(false);
               }
           }
           catch (error) {
               alert(error.message);
           }
       }
   }


    function showformHandler() {
        setShowForm((prev) => !prev);
   }

  return (<>
    {/* <div
      style={{
        backgroundColor: "#adb5bd", 
        minHeight: "100vh", 
        paddingTop: "120px", 
      }}
    > */}
         <Container>
              <Row className="justify-content-center">
                  <Col md={6} lg={5}>
                      <div className="p-4 border rounded shadow bg-white">
              
                          <h3 className="text-center mb-4">Add Bookmark</h3>

              
                          <Form onSubmit={formSubmitHandler}>
               
                              <Form.Group className="mb-3" controlId="bookmarkTitle">
                                  <Form.Label>Bookmark Title</Form.Label>
                                  <Form.Control type="text" placeholder="Enter bookmark title" ref={titleref}
                                  pattern="^[A-Za-z\s]+$"
                                  title="Title should contain only text (letters and spaces)."
                                  required
                                  
                                  />
                              </Form.Group>

            
                              <Form.Group className="mb-3" controlId="bookmarkUrl">
                                  <Form.Label>Bookmark URL</Form.Label>
                                  <Form.Control
                                      type="url"
                                      placeholder="Enter bookmark URL"
                                      ref={urlref}
                                      pattern="https?://.+"
                                      title="Please enter a valid URL starting with http or https."
                                      required
                                  />
                              </Form.Group>

               
                              <div className="d-flex justify-content-between">
                                  <Button variant="primary" className="px-4" type="submit">
                                      Add
                                  </Button>
                                  {isedit && <Button variant="warning" className="px-4" type="submit" onClick={formUpdateHandler}>
                                      Update
                                  </Button>}
                              </div>
                          </Form>
                      </div>
                  </Col>
              </Row>
          </Container>
          
          
          
      {/* </div> */}
      
      </>
  );
}

export default BookmarkForm;