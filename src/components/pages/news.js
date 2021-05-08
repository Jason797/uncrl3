import React from "react";
import ganyu from './pics/ganyu.jpg'
import NewsPiece from './newsPiece';
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tweet: '',
            news: {},
            showingTweet: false,
            showingNews: false
        }
        this.getTweet = this.getTweet.bind(this);
        this.getNews = this.getNews.bind(this);
    }

    async getTweet() {
        const response = await fetch('https://shielded-caverns-79295.herokuapp.com/https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F1390875060177616897')
        .then(r => r.json())
        .then(r => 
            this.setState({tweet: r.html, showingTweet: true})
        );
    }

    async getNews() {
        await fetch('https://shielded-caverns-79295.herokuapp.com/http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=252950&count=3&maxlength=500&format=json')
        .then(r => r.json())
        .then(r => this.setState({news: r}))

         
        let newsList = []
        for (let i=0; i < this.state.news.appnews.newsitems.length; i++) {
            newsList.push(<NewsPiece title = {this.state.news.appnews.newsitems[i].title} author = {this.state.news.appnews.newsitems[i].author} contents = {this.state.news.appnews.newsitems[i].contents}/>)
        }
        
        this.setState({news: newsList, showingNews: true})
    }
    //dangerouslySetInnerHTML={{__html: this.state.news}}
    render() {
        
        
        
        return (
            <div className="container-fluid">
                
                <h1>News</h1>

                <div class="float-container">

                {this.state.showingNews ?
                <div className="float-child">
                    <h3>Rocket Leauge Updates</h3>
                    <div>{this.state.news}</div>
                </div>
                :
                <div className="float-child">
                    <h3>Rocket Leauge Updates</h3>
                <button className="submit" onClick={this.getNews}>Get Latest News</button>
                <img src={ganyu}  width = "75" height = "50"/>
                </div>
                }       

                {this.state.showingTweet ?
                <div className="float-child">
                    <h3>UNCRL Twitter</h3>
                    <div dangerouslySetInnerHTML={{__html: this.state.tweet}}></div>
                </div>
                :
                <div className="float-child">
                    <h3>UNCRL Twitter</h3>
                <button className="submit" onClick={this.getTweet}>Get Latest Tweets</button>
                </div>
                }       

                </div>

            </div>
        );
    }
}
  export default News;
  