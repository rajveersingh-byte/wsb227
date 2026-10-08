import React from 'react'

export default function Footer() {

    let year =  new Date();

    let y = year.getFullYear();

    return (
        <>
            <footer>
                <p>© Copyright {y}, All Rights Reserved By WsCube Tech</p>
            </footer>

        </>
    )
}
