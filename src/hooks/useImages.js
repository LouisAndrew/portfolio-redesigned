import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

const useImages = relativePath => {
  const [image, setImage] = useState({})

  // Query all images, then filteriing the image based on the relative path provided.
  const result = useStaticQuery(graphql`
    query ImagesQuery {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  // filtering all sharp images!
  const filterSharpImages = data => {
    return data.filter(nodeParent => nodeParent.node.childImageSharp !== null)
  }

  // filter by relativePath
  const filter = (path, data) => {
    return data
      ? data.filter(nodeParent => nodeParent.node.relativePath === path)
      : []
  }

  useEffect(() => {
    if (!image.node) {
      const temp = result && filterSharpImages(result.allFile.edges)

      const filtered = filter(relativePath, temp)

      setImage(filtered.length > 0 ? filtered[0] : false)
    }
  })

  console.log("using image hook")

  // return fluid object
  return image
}

export default useImages
