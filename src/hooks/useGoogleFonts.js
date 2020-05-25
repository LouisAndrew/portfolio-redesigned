import  { useEffect } from 'react'

const useGoogleFonts = () => {
        
        const createLink = () => {
                
                const link = document.createElement('link')
                link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@700&family=Racing+Sans+One&display=swap'
                link.rel = 'stylesheet'

                return link
        }

        const createPreconnect = () => {

                const link = document.createElement('link')
                link.href = 'https://fonts.gstatic.com/'
                link.rel = 'preconnect'
                link.crossOrigin = true

                return link
        }

        useEffect(() => {

                const link = createLink()
                const preconnect = createPreconnect()

                //      on render, append child on the head of the document.
                document.head.appendChild(link)
                document.head.appendChild(preconnect)

                //      cleanup => remove the child.
                return () => {
                        
                        document.head.removeChild(link)
                        document.head.removeChild(preconnect)
                }
        }, [])
}

export default useGoogleFonts
