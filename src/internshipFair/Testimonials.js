import './InternshipFair.css';
import TestimonialCards from './TestimonialCards';

export default function Testimonials() {
    return (
        <>
        <h1 className="heading">
          --------  TESTIMONIALS
        </h1>
        <div style={{display:'flex', padding:'2% 5% 2% 5%', gap:'5%'}}>
          <TestimonialCards/>
          <TestimonialCards/>
          <TestimonialCards/>
        </div>
        </>
    )
}