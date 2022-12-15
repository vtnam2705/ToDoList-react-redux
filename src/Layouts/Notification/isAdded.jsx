import React from 'react'

export default function Added(props) {
    const { cssLetter } = props;

    return (
        <div>
            <li
                style={{
                    listStyle: 'none',
                    // border: '1px solid gray',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    borderRadius: '5px',
                    padding: '10px 10px'
                }}
                className='mb-2 bg-danger'
            >
                <p style={cssLetter} className='m-0 text-center text-white'>This note is already added, please add another one</p>
            </li>
        </div>
    )
}
