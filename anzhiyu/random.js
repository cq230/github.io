var posts=["posts/7807cbd3.html","posts/eb4f9e04.html","posts/9a542ee1.html","posts/704a83aa.html","posts/21be66c9.html","posts/328883ce.html","posts/80c02825.html","posts/13fbb470.html","posts/c0f5e416.html","posts/c17bd6c.html","posts/23e07c64.html","posts/d019308f.html","posts/ad6bb534.html","posts/461a3f3a.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };