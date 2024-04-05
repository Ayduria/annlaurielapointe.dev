// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function ACRed( {} ) {
    return (
        <div className="project-page">
        <div className="project-section">
            <div className="iframe-container">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/gD_DemeUuy8?si=kG64-MAj-cbM2xvJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <style jsx>{`
                    .iframe-container {
                        background-image: url(${ images.LoadingGif });
                    }
                `}</style>
            </div>
        </div>
    </div>
    )
}

export default ACRed;