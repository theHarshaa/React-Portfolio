import React, { useState } from "react";
import "./education.css";

const Education = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return (
        <section className = "qualification_section" id = "education" >
            <h2 className = "section_title" >Qualification</h2>
            <span className = "section_subtitle" >My personel journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={
                        useState===1 
                        ?
                         "qualification_button qualification_active button-flex"
                          : "qualification_button button-flex"
                           }
                           onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>

                    <div className={useState===2 ? "qualification_button qualification_active button-flex" : "qualification_button button-flex"
                    }
                    onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={
                        toggleState=== 1 
                        ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Master of Computer Applications</h3>
                                <span className="qualification_subtitle">Bundelkhand University</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2021-Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                        <div className="special"></div>
                        

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Bachelor of Computer Applications</h3>
                                <span className="qualification_subtitle">Microtek College of Management & Technology</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2018-2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                       
                            <div>
                                <h3 className="qualification_title">Intermediate</h3>
                                <span className="qualification_subtitle">Aditya Birla Intermediate College</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                        <div className="special"></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">High School</h3>
                                <span className="qualification_subtitle">Aditya Birla Intermediate College</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2016
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        
                            <div>
                                <h3 className="experience_title">Sorry <svg width="24px" height="24px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet">
                                <radialGradient id="IconifyId17ecdb2904d178eab20400" cx="63.6" cy="-62.06" r="56.96" gradientTransform="translate(0 124.96)" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fde030"></stop><stop offset=".92" stop-color="#f7c02b"></stop><stop offset="1" stop-color="#f4a223"></stop></radialGradient><path d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z" fill="url(#IconifyId17ecdb2904d178eab20400)"></path><path d="M63 91.61c-9.07.07-17.73-3.74-23.8-10.48c-.46-.53-.57-1.28-.28-1.92c.29-.65.93-1.07 1.64-1.08c.32 0 .64.09.92.25c4.82 2.77 12.88 6.21 21.52 6.21h.14c8.63 0 16.7-3.44 21.51-6.21c.28-.16.6-.25.92-.25c.71.01 1.35.43 1.64 1.08c.3.64.19 1.39-.28 1.92a31.695 31.695 0 0 1-23.82 10.48" fill="#422b0d"></path><path d="M44 40.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41c4.2 0 8-3.54 8-9.41s-3.76-9.42-8-9.42z" fill="#422b0d"></path><path d="M43.65 44.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z" fill="#896024"></path><path d="M82.4 40.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41c4.19 0 8-3.54 8-9.41s-3.81-9.42-8-9.42z" fill="#422b0d"></path><path d="M82 44.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z" fill="#896024"></path><radialGradient id="IconifyId17ecdb2904d178eab20401" cx="37.82" cy="-769.175" r="26.42" gradientTransform="matrix(1 0 0 -1.54 0 -1115.13)" gradientUnits="userSpaceOnUse"><stop offset=".46" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#1e88e5"></stop></radialGradient><path d="M37 104.5c-6.5 0-11.5-6.3-11.5-11.7c0-3.8 1.7-8.2 4.1-14.3c.3-.9.7-1.8 1.1-2.8c1.4-3.62 3-7.16 4.8-10.6c.36-.69 1.18-.99 1.9-.7c.3.15.55.4.7.7c1.5 3.1 3.2 6.9 4.9 10.8c4.2 9.4 5.4 13.2 5.4 17c.1 5.3-5 11.6-11.4 11.6z" fill="url(#IconifyId17ecdb2904d178eab20401)"></path><path d="M44 97.29c-1.47 2.27-4.8 1.84-4.8-1.93c0-2.41.49-14.79 2.56-13.06c3.4 2.82 4.36 11.78 2.24 14.99z" fill="#81d4fa"></path><path d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37-7.35-48.18-22.94c10.76 17.66 31 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z" fill="#eb8f00"></path></svg>
                                , i've no Experience </h3>
                                
                            </div>

                            
                        

                        {/* <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">UX Designer</h3>
                                <span className="qualification_subtitle">Apple</span>

                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2018-2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Designer</h3>
                                <span className="qualification_subtitle">Figma</span>

                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021-Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Education 