import React from 'react'

const Body = () => {

    React.useEffect(() => {
        console.log('смонтировал')
        return () => {
            console.log('размонтировал')
        }
      }, [])

    return (
        <div>
            текст статьи
        </div>
    )
}

export default Body
