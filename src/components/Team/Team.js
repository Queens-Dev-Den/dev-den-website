import "./Team.css";
import { TeamData } from './TeamData.js';
export default function Team() {
    return (
        <section id="team">
            <div className="team-header">
                <h2>Meet Our Team</h2>
            </div>
            <div className="team-card-section">
                {TeamData.map((d) => (
                    <div className="team-card">
                        <div>
                            <div className="team-card-img">
                                <img src={d.img} alt="Team Member"/>
                            </div>
                            <div className="team-card-text">
                                <p className="team-member-name">{d.name}</p>
                                <p className="team-member-position">{d.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}