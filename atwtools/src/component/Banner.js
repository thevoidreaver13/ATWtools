import React from 'react';

function Banner() {
    const xlinkNamespace = 'http://www.w3.org/1999/xlink';
    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
                    <h1>Welcome</h1>
                    <h2>We Import And Distribute Hydraulic Tools Used In The Industry</h2>
                    <a href="#about" className="btn-get-started scrollto">About Me</a>
                </div>
            </section>
            {/* <!-- End Hero --> */}
            <div style={{ position: 'relative' }}>
                <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink={xlinkNamespace} viewBox="0 24 150 28" preserveAspectRatio="none"
                    style={{ position: 'absolute', bottom: 0 }}>
                    <defs>
                        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="wave1">
                        <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255, 204, 0, 0.7)" />
                    </g>
                    <g class="wave2">
                        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255, 204, 0, .3)" />
                    </g>
                    <g class="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                    </g>
                </svg>
            </div>
        </>
    );
}

export default Banner;
