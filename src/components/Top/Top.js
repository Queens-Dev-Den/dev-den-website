import "./Top.css";
export default function Top() {
    return (
        <section id="top">
            <div className="title">
                <h1>Queen's<br />Dev Den</h1>
                <div className="btn-container">
                    {/* <!-- Switch to actual dev den instagram and discord --> */}
                    <a href="https://discord.com/" target="_blank" rel="noreferrer"><button>Discord</button></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><button>Instagram</button></a>
                </div>
            </div>
            <div className="dummy-code">
                <p className="code"><span className="code-purple">while </span><span className="code-yellow">&#40;</span><span className="code-blue">true</span><span className="code-yellow">&#41; &#123;</span></p>
                <p className="code" style={{marginLeft: 2 + "rem"}}><span className="code-purple">if &#40;</span>userLikesCoding<span className="code-purple">&#41; &#123;</span></p>
                <p className="code" style={{marginLeft: 4 + "rem"}}><span className="code-yellow">joinDevDen</span><span className="code-blue">&#40;&#41;</span>;</p>
                <p className="code" style={{marginLeft: 4 + "rem"}}><span className="code-purple">break</span>;</p>
                <p className="code" style={{marginLeft: 2 + "rem"}}><span className="code-purple">&#125; else if &#40;</span>userWantsExperience<span className="code-purple">&#41; &#123;</span></p>
                <p className="code" style={{marginLeft: 4 + "rem"}}><span className="code-yellow">joinDevDen</span><span className="code-blue">&#40;&#41;</span>;</p>
                <p className="code" style={{marginLeft: 4 + "rem"}}><span className="code-purple">break</span>;</p>
                <p className="code" style={{marginLeft: 2 + "rem"}}><span className="code-purple">&#125; else &#123;</span></p>
                <p className="code" style={{marginLeft: 4 + "rem"}}><span className="code-yellow">convinceUser</span><span className="code-blue">&#40;&#41;</span>;</p>
                <p className="code" style={{marginLeft: 2 + "rem"}}><span className="code-purple">&#125;</span></p>
                <p className="code"><span className="code-yellow">&#125;</span></p>
            </div>
        </section>
    )
}