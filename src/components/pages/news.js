

function News() {

    const url= 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json'
    fetch(url, {mode: 'no-cors'})
    .then(data=>{console.log(data)})

    return (
        <div className="container-fluid">

            <h1>News</h1>
            <p>Hey</p>

        </div>
    );
  }
  
  export default News;
  