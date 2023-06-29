import React from "react";

export default function ContactMe() {
    return (
        <div className="contactBG "  >
            <header className="container projectBox d-flex  flex-wrap">
                <img className="col-6" src='https://media.giphy.com/media/L5LRkP5bUDFiZee7w2/giphy.gif' style={{ width: 150, height: 150 }} />

                <h1 className="col-6 text-center projTitle  pt-5"> Contact me: </h1>

            </header>

            <section className="section section-on-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <div className="ncol-lg-12 rounded items-align-center p-5 shadow-dow">
                                <form className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Full Name"
                                            className="form-control px-0 mb-4"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className="form-control px-0 mb-4"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="form-control px-0 mb-4"
                                            placeholder="Type Message Here"
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-10 mx-auto">
                                        <button className="btn btn-primary w-100">send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <>
                {/* footer */}
                <footer className="contactBG footer-section">
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="text-dark">Email:</h5>
                                    <p className="text-dark paragraph-lg font-secondary">
                                        Marjoriebaut.w@gmail.com
                                    </p>
                                </div>

                                <div className="col-md-6">
                                    <h5 className="text-dark">Address</h5>
                                    <p className="text-dark paragraph-lg font-secondary">
                                        Atlanta metropolitan Area - Alpharetta,GA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* /footer */}
            </>

        </div>
    );
};