import React, { Component } from "react";
import NewsItems from "./News-Items";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsComponent extends Component {
  article = [];
  page = 1;
  loading = true;


  constructor() {
    super();
    this.state = {
      articles: [],
      totalResult : 0,
    };
  }

  updatePage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catogery}&apiKey=dd50ae94f04c4dcab2480bcc76c3207d&pageSize=${this.props.pageSize}&page=${this.page}`;
    this.props.setProgress(10)
    this.loading = true;
    let data = await fetch(url);
    this.props.setProgress(30)
    let news = await data.json();
    this.props.setProgress(60)
    this.setState({ articles: news.articles , totalResult : news.totalResults});
    this.props.setProgress(100)
    this.loading = false;
  };

  async componentDidMount() {
    this.updatePage();
  }



  fetchMoreData = async() => {
    this.page = this.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catogery}&apiKey=dd50ae94f04c4dcab2480bcc76c3207d&pageSize=${this.props.pageSize}&page=${this.page}`;
    this.loading = true;
    let data = await fetch(url);
    let news = await data.json();
    this.setState({ articles: this.state.articles.concat(news.articles) });
    this.loading = false;
  };

  render() {
    let { theme } = this.props;

    return (
      <>
      <div className="d-flex justify-content-center" style={{marginTop :'70px'}}> 
         <h1  style={theme}>
          Welcome to News-Monkey
         </h1>
      </div>
       
        {this.loading && <Loader/>}

        {/* <InfiniteScroll
                 dataLength={this.state.articles?.length || 0}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length !== this.state.totalResult }
                  loader={<Loader/>}
                > */}
        
        <div className="gap-3 my-3  d-flex flex-wrap align-items-evenly justify-content-evenly ">
      
          {this.state.articles.map((element) => {
              return (
                  <div key={element.url}>
                    <NewsItems
                      theme={theme}
                      imageUrl={element.urlToImage}
                      newsTitle={`${element.title}...`}
                      newsdescription={`${element.description}...`}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    ></NewsItems>
                  </div>
               
              );
            })}
        </div>
        {/* </InfiniteScroll> */}
        
      </>
    );
  }
}
