import React from 'react';

function Testing(props) {
    function firstMethod(e) {
        const re = /[a-zA-Z]+/s;

        if (!re.test(e.key)) {
            e.preventDefault();
        }
    }

    return (
        <div>
            <p>dfgdfgfd</p>
            <input onKeyPress={(e) => firstMethod(e)} />

        </div>
    );
}

export default Testing;