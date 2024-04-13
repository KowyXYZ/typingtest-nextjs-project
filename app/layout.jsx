import React from 'react'

import "@/styles/globals.css"

const layout = ({children}) => {
  return (
    <html>
        <body>
            <div>
                {children}
            </div>
        </body>
    </html>
  )
}

export default layout