//productPage.js

// 1) Instantiate ProductController class
// 2) additem to your product instance
// 3) displayItem on the product page

//Hardcode way to add product items into the product items using productController template
//We will change later when we touch on backend

//Create an instance of ProductController Class object
//Product item current stage is empty
const post = new PostController();

post.addPost(
  "Mr SmartiePants",
  "Events",
  "dog",
  "Looking forward to birthday cake",
  "../images/Home/home-bird.jpg",
  "3 minutes ago"
);
post.addPost(
  "PooPoo",
  "Recommendations",
  "cat",
  "Good product and item!",
  "../images/Home/home-hamster.jpg",
  "3 minutes ago"
);
post.addPost(
  "Ms Know-It-All",
  "PetTips",
  "goldfish",
  "Best thing for a goldfish is to get a big tank!",
  "../images/Home/home-fish.jpg",
  "3 minutes ago"
);
post.addPost(
  "TurTur",
  "Events",
  "tortoise",
  "My happy day!",
  "../images/Home/home-turtle.jpg",
  "3 minutes ago"
);
post.addPost(
  "AlpacaOrLlama",
  "Events",
  "alpaca",
  "My first day of freedom!",
  "../images/Home/home-catanddog.jpg",
  "3 minutes ago"
);
/*
post.addPost("Mr SmartiePants", "Events", "images\avatar-images\profile-alpaca-3.png", "Looking forward to birthday cake", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif");

post.addPost("Mr SmartiePants", "Events", "images\avatar-images\profile-alpaca-3.png", "Looking forward to birthday cake", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif");

post.addPost("Mr SmartiePants", "Events", "images\avatar-images\profile-alpaca-3.png", "Looking forward to birthday cake", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif");

post.addPost("Mr SmartiePants", "Events", "images\avatar-images\profile-alpaca-3.png", "Looking forward to birthday cake", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif");

post.addPost("Mr SmartiePants", "Events", "images\avatar-images\profile-alpaca-3.png", "Looking forward to birthday cake", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif");

post.addPost("Mr SmartiePants", "Events", "images\avatar-images\profile-alpaca-3.png", "Looking forward to birthday cake", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif");
*/

post.displayPost();

// name: name,
// topic: topic,
// avatar: avatar,
// post: post,
// image: image,
