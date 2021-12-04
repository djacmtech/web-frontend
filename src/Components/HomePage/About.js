import "./HomePage.css";

export default function About() {
    return (
        <div className="aboutUs">
            <div className="aboutUsContainer">
                <div>
                    <h2> About Us </h2>
                    <p className="aboutPara"> 
                        ACM, the world's largest educational and scientific computing society,
                        delivers resources that advance computing as a science and a profession.
                        Since its inception in our college in 2007-2008, DJSCOE-ACM has established
                        itself as a successful committee, not only in terms of the number of members
                        who have become a part of the ACM family but also in terms of the activities
                        and seminars/workshops that have been conducted.
                    </p>
                    <p className="aboutPara"> 
                        Don't let us convince you about our success.
                        Let our three consecutive Best Student Chapter
                        of the Year awards do the talking.
                    </p>
                </div>
                <div className="borderContainer">
                    <img src="/Images/About.png" className="aboutImg" alt="aboutImg"/>
                </div>
            </div>
        </div>
    )
}