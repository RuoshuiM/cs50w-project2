import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

function ChatInput() {
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
    );

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const editor = React.useRef(null);

    const focusEditor = () => {
        editor.current.focus();
    };

    React.useEffect(() => {
        focusEditor();
    }, []);

    return (
        <Editor
            ref={editor}
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
        />
    );
}

export default ChatInput;