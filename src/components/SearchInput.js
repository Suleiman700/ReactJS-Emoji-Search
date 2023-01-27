import React, {PureComponent, useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';

function SearchInput({handleInput}) {
    return (
        <div className="search-input-container">
            <div className="search-input-section">
                <Form.Control type="text" placeholder="Type text here" style={{fontSize: '28px'}} onChange={handleInput} />
            </div>
        </div>
    );
}

export default SearchInput