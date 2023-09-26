import React from "react";

const Banner = ({ movie }) => {
  console.log("배너 출력 완료 ", movie?.title);

  const div_style = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.poster_path})`,
    width: "100%",

  };



  return (
    <div style={div_style} className='banner'>
        <div className="banner-info">
            <div> {movie?. title} </div>
            <p> {movie?.overview}  </p>
        </div>
    </div>
  );
};

export default Banner;
