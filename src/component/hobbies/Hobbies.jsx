import React, { useState } from "react";
import "./hobbies.css"

const Hobbies = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return ( 
    <section className = "hobbies_section"
        id = "hobbies" >
            <h2 className = "section_title" > Hobbies </h2>
            <span className = "section_subtitle" >Things, Which Relieve me from Stress and Tension</span>

        <div className = "hobbies_container container grid" >
            <div className = "hobbies_content" >
                <div>
                    <i className = "uil uil-headphones hobbies_icon" > </i>
                    <h3 className = "hobbies_title" >Listening<br/> Songs</h3>
                </div>

                <span className = "hobbies_button" onClick={()=>toggleTab(1)}> View more 
                    <i className = "bx bx-right-arrow-alt hobbies_button-icon" > </i> 
                </span>

                <div className = {toggleState===1 ? "hobbies_model active-model" : "hobbies_model"} >
                    <div className = "hobbies_model-content" >
                        <i className = "uil uil-times hobbies_model-close" onClick={()=>toggleTab(0)}> </i>

                        <h3 className = "hobbies_model-title" >Listening Songs</h3>
                        <p className="hobbies_model-description">Series of notes played in an order that is memorable and recognizable.</p>

                        <ul className="hobbies_model-hobbies grid">
                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Loved the Pop, Hip Hop, Indie, Blues & Soul.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Fav Singers Rehmaan, Arijit, Weekend..& so On.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Fav Band Dhoom Dhadaka Orchestra<i class="uil uil-angle-right-b"></i>One Driection.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Sufism is Love ❣️. </p>
                            </li>
                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Dawai Hai Re..🤓..Meri Khopdi Mai Kitna Tension hai...teko maalum kya..!!!</p>
                            </li>
                        </ul>
                    </div>
                </div> 
         </div>
         
         <div className = "hobbies_content" >
                <div>
                    <i className = "uil uil-books hobbies_icon" > </i>
                    <h3 className = "hobbies_title" >Reading <br /> Books</h3>
                </div>

                <span className = "hobbies_button" onClick={()=>toggleTab(2)}> View more 
                    <i className = "bx bx-right-arrow-alt hobbies_button-icon" > </i> 
                </span>

                <div className = {toggleState===2 ? "hobbies_model active-model" : "hobbies_model"} >
                    <div className = "hobbies_model-content" >
                        <i className = "uil uil-times hobbies_model-close" onClick={()=>toggleTab(0)}> </i>

                        <h3 className = "hobbies_model-title" >Reading Books</h3>
                        <p className="hobbies_model-description"> Looking at a Series of Written Symbols and getting meaning from them.</p>

                        <ul className="hobbies_model-hobbies grid">
                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Manga, Novels, Historical Fiction most Readable.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Fav Manga is A Silent Voice, Demon Slayer, Jujutsu Kaisen.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Fav Novel are IKAGAI, I want to eat your Pancreas.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Fav Historical Fiction is Mahabharata & Ramayana.</p>
                            </li>
                        </ul>
                    </div>
                </div> 
         </div>

         <div className = "hobbies_content" >
                <div>
                    <i className = "uil uil-tv-retro hobbies_icon" > </i>
                    <h3 className = "hobbies_title" >A <br /> Otaku</h3>
                </div>

                <span className = "hobbies_button" onClick={()=>toggleTab(3)}> View more 
                    <i className = "bx bx-right-arrow-alt hobbies_button-icon" > </i> 
                </span>

                <div className = {toggleState===3 ? "hobbies_model active-model" : "hobbies_model"} >
                    <div className = "hobbies_model-content" >
                        <i className = "uil uil-times hobbies_model-close" onClick={()=>toggleTab(0)}> </i>

                        <h3 className = "hobbies_model-title" >A Otaku</h3>
                        <p className="hobbies_model-description">I Wanna say it last time..........<br />Anime is not a CARTOON 😑 .</p>

                        <ul className="hobbies_model-hobbies grid">
                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                AOT, Naruto, Death Note are my Fav Anime Series.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                A Silent Voice, I Want to Eat Your Pancreas are Fav Anime Movies.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Also ❤️ Ramayana: The Legend of Prince Rama.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Fav Director Makoto Shinkai & Voice Acter is Kenjiro Tsuda.</p>
                            </li>

                            <li className="hobbies_model-service">
                                <i className="uil uil-check-circle service_model-icon"></i>
                                <p className="hobbies_model-info">
                                Fav Character is Ishida from A Silent Voice, GOJO from JJK,Eren from AOT and Itachi ❤️ </p>
                            </li>
                        </ul>
                    </div>
                </div> 
         </div>
         
         
        </div> 
    </section>
    );
};

export default Hobbies;