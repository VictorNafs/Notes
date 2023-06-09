function Main({ activeNote }) {
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" autoFocus />
                <textarea id="body" placeholder="write your note here..." />
            </div>
            <div className="app-main-note-preview">
                {activeNote && (
                    <>
                        <h1 className="preview-title">{activeNote.title}</h1>
                        <div className="markdown-preview">{activeNote.body}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Main;
