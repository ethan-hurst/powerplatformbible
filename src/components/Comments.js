import React, { useEffect } from 'react'
const Comments = ({ issueTerm }) => {
  const commentsUUID = `comments_${pathname}`
  useEffect(() => {
    let anchor
    const theme = 'github-light' // you could choose other themes too
    const script = document.createElement('script')
    anchor = document.getElementById(commentsUUID)
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    script.setAttribute('repo', 'flamebeard/powerplatformbible')
    script.setAttribute('issue-term', pathname)
    script.setAttribute('theme', theme)
    script.setAttribute('label', Comment
    
    )
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  })
  return (
    <>
      <div
        id={commentsUUID}
        className="post-comments"
        style={{ position: 'relative' }}
      >
        <div className="utterances-frame"></div>
      </div>
    </>
  )
}

export default Comments
