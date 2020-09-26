import React from 'react'

const Submenu = ({url,icon,title,is_active}) => {
    return (
        <>
            <li>
                <a href={url} class={is_active}>
                    <i class={"metismenu-icon "+icon}></i>
                    {title}
                </a>
            </li>
        </>
    )
}

export default Submenu
