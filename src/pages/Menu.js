import React from "react";
import misoSoup from "../assets/miso-soup.jpg"
import seaweedSalad from "../assets/seaweed-salad.jpg"
import beefNegimake from "../assets/beef-negimake.jpg"
import yellowtailJalapeno from "../assets/yellowtail-jalapeno.jpg"
import narutoRoll from "../assets/naruto.jpg"
import sashimi from "../assets/sashimi.jpg"
import "../styles/Menu.css"

export default function Menu() {


    return (
        <div>
            <div className="menu">

            <h1 class="menu-header" align="center">FULL MENU</h1>

            <div class="container2">
                <div class="menu">
                    <h2 class="menu-group-heading">
                        Soups
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Miso Soup</span>
                                    <span class="menu-item-price">   $1.75</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Clam Soup</span>
                                    <span class="menu-item-price">$4.25</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Shumau Soup</span>
                                    <span class="menu-item-price">$5.50</span>
                                </h3>

                            </div>
                        </div>
                        <br></br>
                        <div class="menuImgContainer">
                            <img className="menuImg" src={misoSoup} alt="Miso Soup"></img>
                            <div className="menuImgOverlay">
                                <div className="menuImgText">Miso Soup</div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Salads
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Green Salad</span>
                                    <span class="menu-item-price">$2.50</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Avocado Salad</span>
                                    <span class="menu-item-price">$5.50</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Seaweed Salad</span>
                                    <span class="menu-item-price">$4.95</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Kani Salad</span>
                                    <span class="menu-item-price">$4.75</span>
                                </h3>
                            </div>
                        </div>
                        <br></br>
                        <div class="menuImgContainer">
                            <img className="menuImg" src={seaweedSalad} alt="Seaweed Salad"></img>
                            <div className="menuImgOverlay">
                                <div className="menuImgText">Seaweed Salad</div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Kitchen Appetizers
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Edamame</span>
                                    <span class="menu-item-price">$4.25</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Gyoza</span>
                                    <span class="menu-item-price">$4.50</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Shumai</span>
                                    <span class="menu-item-price">$4.50</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Beef Negimake</span>
                                    <span class="menu-item-price">$7.25</span>
                                </h3>
                            </div>
                        </div>
                        <br></br>
                        <div class="menuImgContainer">
                            <img className="menuImg" src={beefNegimake} alt="Beef Negimake"></img>
                            <div className="menuImgOverlay">
                                <div className="menuImgText">Beef Negimake</div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Sushi Appetizers
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Sushi</span>
                                    <span class="menu-item-price">$7.00</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Sashimi</span>
                                    <span class="menu-item-price">$8.00</span>
                                </h3>
                            </div>
                        </div>
                        <br></br>
                        <div class="menuImgContainer">
                            <img className="menuImg" src={sashimi} alt="Sashimi"></img>
                            <div className="menuImgOverlay">
                                <div className="menuImgText">Sashimi</div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Fish Fillets
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Tuna Pizza</span>
                                    <span class="menu-item-price">$9.25</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Yellowtail Jalapeno</span>
                                    <span class="menu-item-price">$9.95</span>
                                </h3>
                            </div>
                        </div>
                        <br></br>
                        <div class="menuImgContainer">
                            <img className="menuImg" src={yellowtailJalapeno} alt="Yellowtail Jalapeno"></img>
                            <div className="menuImgOverlay">
                                <div className="menuImgText">Yellowtail Jalapeno</div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Signature Rolls
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Bumble Bee Roll</span>
                                    <span class="menu-item-price">$13.95</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Naruto Roll</span>
                                    <span class="menu-item-price">$9.95</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Paradise Roll</span>
                                    <span class="menu-item-price">$125</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Kani Salad</span>
                                    <span class="menu-item-price">$4.75</span>
                                </h3>
                            </div>
                        </div>
                        <br></br>
                        <div class="menuImgContainer">
                            <img className="menuImg" src={narutoRoll} alt="Naruto Roll"></img>
                            <div className="menuImgOverlay">
                                <div className="menuImgText">Naruto Roll</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
</div>
)
};