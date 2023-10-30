import React from 'react'

function Contact() {
    return (
        <>
            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" class="contact">
                <div class="container">

                    <div class="section-title">
                        <span>Contact</span>
                        <h2>Contact</h2>
                        <p>We are pleased to assist you! If you have any questions or need further assistance, please contact us at.</p>
                    </div>

                    <div class="row" data-aos="fade-up">
                        <div class="col-lg-6">
                            <div class="info-box mb-4">
                                <i class="bx bx-map"></i>
                                <h3>Our Address</h3>
                                <p>65/1 Moo 5 Lantakfa, NakhonChaisi, NakhonPathom, Thailand 73120</p>
                                <p>Opening hours: 08:00 AM - 05:00 PM (GMT+7)</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="info-box  mb-4">
                                <i class="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>atw.wren@gmail.com</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="info-box  mb-4">
                                <i class="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>+66(0) 34 263 655</p>
                            </div>
                        </div>

                    </div>

                    <div class="row" data-aos="fade-up">

                        <div class="col-lg-6">
                            <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1151.8636813317592!2d100.23921385513489!3d13.815474545432975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2edc9e755264d%3A0xb462d22bcdc2f3c!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4reC4l-C4teC4lOC4seC4muC4muC4peC4tOC4pyDguJfguLnguKXguKrguYwgKOC4m-C4o-C4sOC5gOC4l-C4qOC5hOC4l-C4oikg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sth!2sth!4v1698651906229!5m2!1sth!2sth" frameborder="0" style={{ border: '0', width: '100%', height: '384px' }} allowfullscreen title="Google Maps"></iframe>
                        </div>
                        {/* <div className="col-lg-6">
                        <iframe
                            className="mb-4 mb-lg-0"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                            frameborder="0"
                            style={{ border: '0', width: '100%', height: '384px' }}
                            allowfullscreen
                            title="Google Maps"
                        ></iframe>
    </div> */}

                        <div class="col-lg-6">
                            <form action="forms/contact.php" method="post" class="php-email-form">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>
                </div>

            </section >
            {/* <!-- End Contact Section --> */}
        </>
    )
}

export default Contact