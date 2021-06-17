$.get('https://ig.instant-tokens.com/users/3b01bf60-b1d5-402c-b751-5245a9c33399/instagram/17841403438699060/token?userSecret=j0qliqeh0ui0sz5ue6p0sok', returntoken);
function returntoken(data) {
    let data_json = JSON.parse(data);
    console.log(data_json.Token);

    var feed = new Instafeed({
        accessToken: data_json.Token
      });
      feed.run();
}