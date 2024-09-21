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
                                    2021-2023
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
                        

                            
                        

                         <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Web Developer and SEO Executive</h3>
                                <span className="qualification_subtitle">MegaMind Technosoft</span>

                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i>
                                    JAN 2024-APR 2024 
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Software Developer</h3>
                                <span className="qualification_subtitle">MegaMind Technosoft</span>

                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i>
                                    APR 2024-Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Education 