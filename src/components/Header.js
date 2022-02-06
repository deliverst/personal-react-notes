import React from 'react'

const Header = ({headleToogleDarkMode}) => {
    return (
        <div className={'header'}>
            <h1>Notes</h1>
            <button onClick={() => headleToogleDarkMode((previusDarkeMode) => !previusDarkeMode)} className={'save'}>Toggle
                Mode
            </button>
        </div>
    )
}

export default Header