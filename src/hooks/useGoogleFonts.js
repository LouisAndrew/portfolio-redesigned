import  { useEffect } from 'react'

const useGoogleFonts = () => {
        
        const createLink = () => {
                
                const link = document.createElement('link')
                link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@700&display=swap'
                link.rel = 'stylesheet'

                return link
        }

        useEffect(() => {

                const link = createLink()

                //      on render, append child on the head of the document.
                document.head.appendChild(link)

                //      cleanup => remove the child.
                return () => document.head.removeChild(link)
        }, [])
}

export default useGoogleFonts
