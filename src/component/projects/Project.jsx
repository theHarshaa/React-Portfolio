import React from "react";
import {Data} from "./Data";
import "./project.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Project = () => {
    return (
        <section className = "projects_section container section" id = "projects" >
            <h2 className = "section_title" >Project</h2>
            <span className = "section_subtitle" >See 👀, What i'have done...</span>

            <Swiper className="project_container"
            loop={true}
            grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          
        }}
        modules={[Pagination]}>
                {Data.map(({id, image, title, description, link})=>{
                    return (
                        <SwiperSlide className="project_card" key={id}>
                            <img src={image} alt="" className="project_img" />

                            <h3 className="project_name">{title}</h3>
                            <p className="project_description">{description}</p>
                            <a href={link} target="_blank" className="project_button">Demo<i className="bx bx-right-arrow-alt project_button-icon"></i>
                            </a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </section>
    )
}

export default Project;