import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let {
      imageUrl,
      newsTitle,
      newsdescription,
      newsUrl,
      theme,
      author,
      date,
      source,
    } = this.props;

    return (
      <>
        <div>
          <div className="card my-3" style={{ width: "295px" }}>
            <div style={{display:'flex' , position:'absolute' , right: '0' , top:'0'}}>
            <span
              className="badge rounded-pill bg-danger"
              style={{ left: "87%", zIndex: "1" }}
            >
              {source}
            </span>
            </div>

            <img
              src={
                imageUrl != null
                  ? imageUrl
                  : (imageUrl =
                      "https://img.etimg.com/thumb/msid-107830979,width-1200,height-630,imgsize-146041,overlay-ettech/photo.jpg")
              }
              height={200}
              className="card-img-top"
              alt="https://static.politico.com/1d/9e/1af01f3d478c947e0870283fe886/united-states-russia-59093.jpg"
            />
            <div className="card-body" style={theme}>
              <h5 className="card-title">
                {newsTitle != null ? newsTitle.slice(0, 50) : newsTitle}...
              </h5>
              <p className="card-text">
                {newsdescription != null
                  ? newsdescription.slice(0, 90)
                  : newsdescription}
                ...
              </p>
              <b className="card-text" style={theme}>
                on {date.slice(0, 10)}
              </b>
              <br />
              <b className="card-text" style={theme}>
                By {author === null ? "Babu Bhaiya" : author}
              </b>
              <br />
              <a
                href={newsUrl}
                rel="noreferrer"
                target="_blank"
                className="btn btn-dark my-2"
              >
                Tap to Read
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
