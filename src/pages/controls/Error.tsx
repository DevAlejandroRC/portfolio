import React from 'react'

interface ErrorProps{
    response: string,
    error: string
}

const Error:React.FC<ErrorProps> = ({response, error}) => {
  return (
    <section className="content">
      <h3 className="content__error-response">❌ {response}</h3>
      <h1 className="content__error-message">⚠️ {error}</h1>
    </section>
  )
}

export default Error;
