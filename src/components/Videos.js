import React, { Component } from 'react';
import axios from 'axios';
import LogoVid from '../imgs/vidLogo.png';

import '../App.css';
class Videos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoSeleccionado: '',
      videos: []

    }
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        method: 'GET',
        part: 'snippet',
        key: 'AIzaSyD1xeMlRtP_BfY99AL7G5Vt6Duhjr_v9Ms',
        maxResults: 35,
        playlistId: 'PLzZ83ruTQ96knlVtUc5rtQT_GekV0i4Wk'
      }
    })
      .then(response => {
        var videos = response.data.items;
        var primerVideo = videos[0];
        var videoSeleccionado = primerVideo.snippet.resourceId.videoId;
        this.setState({ videoSeleccionado: videoSeleccionado, videos: videos });
      })
  };
  cambiarVideo = function(video){
    
    this.setState({ videoSeleccionado: video.snippet.resourceId.videoId });
    

  };

  render() {
    return (
      <div>
        <div className="container">
          <header className="video-header">
            <img src={LogoVid} alt="Video Logo" className="vid-logo" />
          </header>
          <section id="video">
            <iframe width="560" height="300" title="Main Video"
              src={"https://www.youtube.com/embed/" + this.state.videoSeleccionado + "?&autoplay=1&list=PLzZ83ruTQ96knlVtUc5rtQT_GekV0i4Wk"}
              frameBorder="0" allow="accelerometer;   autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

          </section>
          <main className="vid-list">
            {this.state.videos.map((video) => 
              <article className="item" data-key={video.snippet.resourceId.videoId} onClick={() => this.cambiarVideo(video)}>
                <img src={video.snippet.thumbnails.medium.url} alt="Video" width="150px" className="thumb" />
                <div className="details">
                  <h4>{video.snippet.title}</h4>
                  <p>{video.snippet.description.substring(0, 100)}</p>
                </div>
              </article>
            )}

          </main>
        </div>
      </div >
    );
  }
}

export default Videos;