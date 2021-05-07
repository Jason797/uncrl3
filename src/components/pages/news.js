import React from "react";
import ganyu from './pics/ganyu.jpg'
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tweet: '',
            news: '',
            showingTweet: false,
            showingNews: false
        }
        this.getTweet = this.getTweet.bind(this);
        this.getNews = this.getNews.bind(this);
    }

    async getTweet() {
        const response = await fetch('https://shielded-caverns-79295.herokuapp.com/https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F507185938620219395')
        .then(r => r.json())
        .then(r => 
            this.setState({tweet: r.html, showingTweet: true})
        );
    }

    async getNews() {
        fetch('https://shielded-caverns-79295.herokuapp.com/http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json')
        .then(r => r.json())
        .then(r => this.setState({news: r.appnews.newsitems[0].title, showingNews: true}))
        console.log(this.state.news)
    }

    render() {
        
        
        
        return (
            <div className="container-fluid">
                
                <h1>News</h1>

                <div class="float-container">

                {this.state.showingNews ?
                <div className="float-child">
                    <button className="submit" onClick={this.getNews}>Get Latest News</button>
                    <div dangerouslySetInnerHTML={{__html: this.state.news}}></div>
                </div>
                :
                <div className="float-child">
                <button className="submit" onClick={this.getNews}>Get Latest News</button>
                <img src={ganyu}  />
                </div>
                }       

                {this.state.showingTweet ?
                <div className="float-child">
                    <button className="submit" onClick={this.getTweet}>Get Latest Tweets</button>
                    <div dangerouslySetInnerHTML={{__html: this.state.tweet}}></div>
                </div>
                :
                <div className="float-child">
                <button className="submit" onClick={this.getTweet}>Get Latest Tweets</button>
                </div>
                }       

                </div>

            </div>
        );
    }
}
  export default News;
  