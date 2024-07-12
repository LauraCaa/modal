export default function Modal({isOpen, toggleIsOpen}) {
    return(
        <div className={`modal-wrapper ${isOpen ? "display-flex": null}`} onClick={() => toggleIsOpen(false)}>
            <div id="modal" onClick={(event)=> event.stopPropagation()}>
                <div className="modal-header">
                    <a onClick={() => toggleIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </a>
                </div>
                <form className="modal-body">
                    <div className="form-header">
                        <img src="https://placehold.co/50" alt="mailchimp logo"/>
                        <h5>Mailchimp accounts</h5>
                    </div>
                    <fieldset>
                        <label>Select an account</label>
                        <select>
                            <option>Add a new account</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <input type="submit" value="Connect Mailchimp"/>
                    </fieldset>
                    <legend>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                            </svg>
                        </span>
                        <a>Your credentials are encrypted & can be removed at any time 7</a>
                    </legend>
                </form>
                <div className="modal-footer">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                        </svg>
                    </span>
                    <span>Powered by Alloy</span>
                </div>
            </div>
        </div>
    )
};