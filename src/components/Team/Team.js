import "./Team.css";
import { TeamData } from './TeamData.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Team() {
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <img
            src="images/next-arrow.png"
            className={className}
            style={{ ...style, display: "block", height: "4rem", width: "auto", right: '-3rem'}}
            onClick={onClick}
            alt="Next Arrow"
          />
        );
      }
      
    function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="images/prev-arrow.png"
            className={className}
            style={{ ...style, display: "block", height: "4rem", width: "auto", left: "-3rem"}}
            onClick={onClick}
            alt="Previous Arrow"
          />
    );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <section id="team">
            <div className="team-header">
                <h2>Meet Our Team</h2>
            </div>
            <div className="team-card-section">
                <Slider {...settings}>
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
                </Slider>
            </div>
        </section>
    )
}