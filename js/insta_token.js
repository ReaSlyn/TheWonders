$.get('https://ig.instant-tokens.com/users/c2e41282-faf9-401f-ae71-f26b54d4aff7/instagram/17841440867111572/token?userSecret=iy5rvjw1yyjhij0o6lcl4g', returntoken);
function returntoken(data) {
    let data_json = JSON.parse(data);
    console.log(data_json.Token);

    var feed = new Instafeed({
        accessToken: data_json.Token
      });
      feed.run();
}