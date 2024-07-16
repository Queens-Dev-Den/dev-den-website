import "./Top.css";
export default function Top() {
    return (
        <section id="top">
            <div class="title">
                <h1>Queen's<br />Dev Den</h1>
                <div class="btn-container">
                    {/* <!-- Switch to actual dev den instagram and discord --> */}
                    <a href="https://discord.com/" target="_blank" rel="noreferrer"><button>Discord</button></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><button>Instagram</button></a>
                </div>
            </div>
            <div class="dummy-code">
                <p class="code"><span class="code-purple">while </span><span class="code-yellow">&#40;</span><span class="code-blue">true</span><span class="code-yellow">&#41; &#123;</span></p>
                <p class="code" style={{marginLeft: 2 + "rem"}}><span class="code-purple">if &#40;</span>userLikesCoding<span class="code-purple">&#41; &#123;</span></p>
                <p class="code" style={{marginLeft: 4 + "rem"}}><span class="code-yellow">joinDevDen</span><span class="code-blue">&#40;&#41;</span>;</p>
                <p class="code" style={{marginLeft: 4 + "rem"}}><span class="code-purple">break</span>;</p>
                <p class="code" style={{marginLeft: 2 + "rem"}}><span class="code-purple">&#125; else if &#40;</span>userWantsExperience<span class="code-purple">&#41; &#123;</span></p>
                <p class="code" style={{marginLeft: 4 + "rem"}}><span class="code-yellow">joinDevDen</span><span class="code-blue">&#40;&#41;</span>;</p>
                <p class="code" style={{marginLeft: 4 + "rem"}}><span class="code-purple">break</span>;</p>
                <p class="code" style={{marginLeft: 2 + "rem"}}><span class="code-purple">&#125; else &#123;</span></p>
                <p class="code" style={{marginLeft: 4 + "rem"}}><span class="code-yellow">convinceUser</span><span class="code-blue">&#40;&#41;</span>;</p>
                <p class="code" style={{marginLeft: 2 + "rem"}}><span class="code-purple">&#125;</span></p>
                <p class="code"><span class="code-yellow">&#125;</span></p>
            </div>
        </section>
    )
}