

function News() {

    const http = new XMLHttpRequest();
    const url= 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json'
    http.open("GET", url)
    http.send()
    http.onreadystatechange = (e) => {
        console.log(http.responseText)
      }

    return (
        <div className="container-fluid">

            <h1>News</h1>
            <p>Hey</p>

        </div>
    );
  }
  
  export default News;
  