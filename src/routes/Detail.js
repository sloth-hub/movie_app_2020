import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) { // location.state가 존재하면 title을 리턴,
            return (
                <div className="detail_container">
                    <div className="detail_movies">
                        <div className="detail_movie">
                            <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                            <div className="detail_movie_data">
                                <h3 className="detail_movie_title">{location.state.title}</h3>
                                <h5 className="detail_movie_year">{location.state.year}</h5>
                                <ul className="detail_movie_genres">{location.state.genres.map((genre, index) => (
                                    <li key={index} className="detail_genres_genre">{genre}</li>
                                ))}
                                </ul>
                                <span className="detail_movie_stars_yellow" style={{width: `${90*(location.state.rating/10)}px`}}>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                                <span className="detail_movie_stars_gray">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                                <span className="detail_movie_rating">{location.state.rating}</span>
                                <p className="detail_movie_summary">{location.state.summary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else { // location.state가 존재하지 않으면 null을 리턴
            return null;
        }
    }
}

export default Detail;