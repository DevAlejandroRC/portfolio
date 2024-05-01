import React, { ReactNode } from 'react'
import { Navigate, useLocation, useParams } from 'react-router';

interface ComponentProps {
children: ReactNode
}

const Languages:React.FC<ComponentProps> = ({children}) => {

    const { tag } = useParams<{tag:string}>();

    const validTagsRegex = /^(es|en)$/;
    const location = useLocation();

    return (
        <div>
            {(validTagsRegex.test(tag ?? '')) ? (<div>{children}</div>) : (<Navigate to={tag ? location.pathname.replace(tag, 'es') : '/' }/>)}
        </div>
    )
}

export default Languages
