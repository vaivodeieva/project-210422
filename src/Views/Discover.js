import '../Assets/CSS/Discover.css';
function Discover() {

    var allCards = document.getElementsByClassName("gs-product-card-save");

    for (var i = 0; i < allCards.length; i++) {
        allCards[i].addEventListener("click", function () {
            var classList = this.classList.value;
            if (classList.includes("gs-saved")) {
                this.classList.remove("gs-saved");
            } else {
                this.classList.add("gs-saved");
            }
        });
    }


    return (
        <div>
            <div class="gs-product-grid-view-outer-container">
                <div class="gs-product-grid-view-container">
                    <div class="gs-product-grid-grid-div">
                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://i.ytimg.com/vi/woAHwpOLmyY/maxresdefault.jpg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Movie
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Kimi no na wa.</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Director:</div>
                                    <div class="gs-product-card-detail-value">Makoto Shinkai</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Stars:</div>
                                    <div class="gs-product-card-detail-value">Ryûnosuke Kamiki, Mone Kamishiraishi, Ryô Narita</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2016</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Anime, Romance, Fantacy, Animation, Drama</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6337/656337-h" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Movie
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Phineas and Ferb the Movie: Across the 2nd Dimension</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Director:</div>
                                    <div class="gs-product-card-detail-value">Robert Hughes, Dan Povenmire, Jay Lender, Jeff 'Swampy' Marsh, Kyle Menke</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Stars:</div>
                                    <div class="gs-product-card-detail-value">Vincent Martella, Ashley Tisdale, Thomas Brodie-Sangster, Caroline Rhea</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2011</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Animation, Action, Adventure, Comedy, Family, Musical, Sci-Fi</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Movie
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">The Pianist</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Director:</div>
                                    <div class="gs-product-card-detail-value">Roman Polanski</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Stars:</div>
                                    <div class="gs-product-card-detail-value">Adrien Brody, Thomas Kretschmann, Frank Finlay</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2002</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Biography, Drama, Music</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRikMeLpNCMV1iJc2nlcVVlQqy6bYD-nqPI2OEaY3Sl-zF0MEoVq5OkbZkEolKeshWrJrDsr9KTR9Jq_P4saP19QbVDR8wwUm9fR.jpg?r=834" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Movie
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Hacksaw Ridge</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Director:</div>
                                    <div class="gs-product-card-detail-value">Mel Gibson</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Stars:</div>
                                    <div class="gs-product-card-detail-value">Andrew Garfield, Sam Worthington, Luke Bracey</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2016</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Biography, Drama, History</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://i0.wp.com/pulse.messiah.edu/wp-content/uploads/2020/10/ford_vs_ferrari_poster.jpg?resize=1080%2C675&ssl=1" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Movie
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Ford v Ferrari</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Director:</div>
                                    <div class="gs-product-card-detail-value">James Mangold</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Stars:</div>
                                    <div class="gs-product-card-detail-value">Matt Damon, Christian Bale, Jon Bernthal</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2019</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Action, Biography, Drama</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://m.media-amazon.com/images/M/MV5BMTUyNDlkZDEtNmE5OS00NzMzLWI3Y2ItY2EzYWNlN2JlZmRmXkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Tv Show
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Moon Knight</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">No. of Seasons: </div>
                                    <div class="gs-product-card-detail-value">1</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2022</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Action, Adventure, Drama</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://www.denofgeek.com/wp-content/uploads/2022/04/SPY-x-FAMILY-KV.jpg?fit=1200%2C675" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Tv Show
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Spy x Family</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">No. of Seasons: </div>
                                    <div class="gs-product-card-detail-value">1</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2022</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Animation, Action, Comedy</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210315070819-avatar-movie-still.jpg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Movie
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Avatar</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Director:</div>
                                    <div class="gs-product-card-detail-value">James Cameron</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Stars:</div>
                                    <div class="gs-product-card-detail-value">Sam Worthington, Zoe Saldana, Sigourney Weaver</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2009</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Action, Adventure, Fantasy</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://tfipost.com/wp-content/uploads/2022/01/RocketBoysposter.jpeg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Tv Show
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Rocket Boys</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">No. of Seasons:</div>
                                    <div class="gs-product-card-detail-value">1</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2022</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Comedy, Drama, History</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://images.moviesanywhere.com/9712ea455bc6b62aa4638b7e12fa28a2/c2c9afc5-786b-4950-9c73-0adc3389310c.jpg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Movie
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">The Hills Have Eyes II</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Director:</div>
                                    <div class="gs-product-card-detail-value">Martin Weisz</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Stars:</div>
                                    <div class="gs-product-card-detail-value">Daniella Alonso, Jacob Vargas, Michael Bailey Smith</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2007</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Horror, Thriller</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://thecinemaholic.com/wp-content/uploads/2020/01/Id-invaded.jpg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Tv Show
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">ID:Invaded</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">No. Of Seasons:</div>
                                    <div class="gs-product-card-detail-value">1</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2020</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Animation, Crime, Drama</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://m.media-amazon.com/images/M/MV5BODZlYjQ4NzYtZTg1MC00NGY4LTg4NjQtNGE3ZjRkMjk3YjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Tv Show
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">Stranger Things</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">No. Of Seasons:</div>
                                    <div class="gs-product-card-detail-value">4</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2016</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller</div>
                                </div>
                            </div>
                        </div>

                        <div class="gs-product-card">
                            <div class="gs-product-card-content">
                                <div class="gs-product-card-image-container">
                                    <img class="gs-product-card-image" src="https://assets.telegraphindia.com/telegraph/27717cf8-f8b8-4adf-b490-7c2febd8b730.jpg" />
                                </div>
                                <div class="gs-product-card-product-type">
                                    Tv Show
                                </div>
                                <div class="gs-product-card-save">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"></path>
                                    </svg>
                                </div>
                                <div class="gs-product-card-name">13 Reasons Why</div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">No. Of Seasons:</div>
                                    <div class="gs-product-card-detail-value">4</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Release Year:</div>
                                    <div class="gs-product-card-detail-value">2017</div>
                                </div>
                                <div class="gs-product-card-detail">
                                    <div class="gs-product-card-detail-title">Genre:</div>
                                    <div class="gs-product-card-detail-value">Drama, Mystery, Thriller</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Discover;