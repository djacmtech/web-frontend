import video from '../../Images/video.mp4'
import './HomePage.css'

export default function Video() {
    return (
        <div className="Video">
            <video  
                autostart 
                autoPlay 
                loop 
                muted
                style={{width:"100%"}}
                src={video} 
                type="video/mp4" 
            />
        </div>
    )
}