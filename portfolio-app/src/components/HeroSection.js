import React from 'react';
import '../styles/HeroSection.css'; // Import CSS file

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="image-slider">
                <div className="slide">
                    <div className="slide-text">
                        <h2>Shahzaib Ibrar</h2>
                        <p>Software Developer</p>
                        <p>I'm a passionate web developer dedicated to creating stunning and intuitive user experiences.</p>
                    </div>
                    <div className='slide-front-image'>
                        <img  src='man2up.png' alt='waiting'/>
                    </div>
                </div>
                {/* <div className="slide">
                    <img src="t-2.jpg" alt="Image 2" />

                    <div className="slide-text">
                        <h2>Image 1</h2>
                        <p>This is a description of image 1.</p>
                    </div>
                </div>
                <div className="slide">
                    <img src="t-3.jpg" alt="Image 3" />
                    <div className="slide-text">
                        <h2>Image 1</h2>
                        <p>This is a description of image 1.</p>
                    </div>
                </div>
                <div className="slide">
                    <img src="t-4.jpg" alt="Image 3" />
                         <div className="slide-text">
                        <h2>Image 1</h2>
                        <p>This is a description of image 1.</p>
                    </div>
                </div> */}
                {/* Add more slides here */}
            </div>
        </section>
    );
}

export default HeroSection;
