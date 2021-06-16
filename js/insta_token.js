$.get('https://ig.instant-tokens.com/users/e67e08e3-2101-4f6d-9f3a-8dc9d3a3627e/instagram/17841403438699060/token?userSecret=cscdsmr5ehfm6q7ubyval9', returntoken);
function returntoken(data) {
    let data_json = JSON.parse(data);
    console.log(data_json.Token);

    var feed = new Instafeed({
        accessToken: data_json.Token
      });
      feed.run();
}