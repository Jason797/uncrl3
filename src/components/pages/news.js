import React from "react";

class News extends React.Component {

    async getRequest() {
        const needle = require('needle');
        const token = 'AAAAAAAAAAAAAAAAAAAAAIA9PQEAAAAAzSS5imVxMfH5wr%2B%2FiMLA%2BTXsbQo%3D9dPZ2wesLWEDycPuAOaxwwPOyb3syHRrRKyDUuUBNapcN7LOmW';
        const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";
        const params = {
            'query': 'from:twitterdev -is:retweet',
            'tweet.fields': 'author_id'
        }

        const res = await needle('get', endpointUrl, params, {
            headers: {
                "User-Agent": "v2RecentSearchJS",
                "authorization": `Bearer ${token}`
            }
        })

        if (res.body) {
            return res.body;
        } else {
            throw new Error('Unsuccessful request');
        }
    }




    render() {
        try {
            const response = this.getRequest();
            console.log(response);
        }  catch (e) {
            console.log(e)
        }

        

        return (
            <div className="container-fluid">

                <h1>News</h1>
                <p>Hey</p>

            </div>
        );
    }
}
  export default News;
  