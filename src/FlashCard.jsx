import React, {useState} from 'react'

function FlashCard() {
    const [editMode, setEditMode] = useState(true)
    const [allmode, setAllmode] = useState(true)

    const viewMode = () => {
        
    }
    
    const editorMode = () => {

    }

    const setMode = () => {
        setEditMode(!editMode);
        setAllmode(false);
    }

    const allsetMode = () => {
        setAllmode(!allmode);
    };


    return (
      <div>
        {allmode ? (
          <div>
            <h1>This is editor Mode</h1>
            <button onClick={setMode}>Editor Mode</button>
            <hr />
            <h1>This is the view editor Mode</h1>
            <button onClick={setMode}>View Mode</button>
          </div>
        ) : editMode ? (
          <div>
            <h1>This is editor Mode</h1>
            <button onClick={setMode}>Editor Mode</button>
            <button onClick={allsetMode}>All Mode</button>
          </div>
        ) : (
          <div>
            <h1>This is the view editor Mode</h1>
            <button onClick={setMode}>View Mode</button>
            <button onClick={allsetMode}>All Mode</button>
          </div>
        )}
      </div>
    );
}


export default FlashCard