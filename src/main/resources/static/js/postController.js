// 1) Create a PostController Class
// 2) Attribute: items object array with item of name, description, imageURL, style, price
// 3) addItem and displayItem methods
// 4) modal to display the product details

class PostController {
  constructor() {
    this._posts = []; //empty object - to hold the attributes of the ProductController class
  }

  //Create addItem method to add the product item to the _items object
  addPost(name, topic, avatar, text, image, time) {
    //Setting the properties of the item
    //values are parsed into the method via parameters
    const post = {
      name: name,
      topic: topic,
      avatar: avatar,
      text: text,
      image: image,
      time: time,
    };
    //push an item into a list of item objects array
    this._posts.push(post);

    //Store the _items object array into the Window LocalStorage

    //this._items is a JavaScript object, value of the localStorage has to be a string, so we need to convert it into a string
    // window.localStorage.setPost("posts", JSON.stringify(this._posts));
  }

  //display the product _items on the webpage

  displayPost() {
    console.log(this._posts);

    //Display the information on the card
    //1) For loop to loop through the _items (currently 7 individual items in it)
    //2) Call a function to create the HTML elements for the card display
    //3) insert the HTML elements of the cards to the row (#row)

    const postHTMLList = [];

    //example of displaying the items from Window LocalStorage
    //require to convert string to JavaScript object
    // const getPosts = JSON.parse(window.localStorage.getPost("posts"));

    // The for Loop will loop through 7 times
    for (let i = 0; i < this._posts.length; i++) {
      //to retrieve the individual item from the _items object array
      const post = this._posts[i];
      // const post = getPosts[i];

      //i=0
      //e.g. if i=0: the item will contain all the properties and values of the first item

      //call a function to create the HTML element and display the item values
      //passing i as an argument to createHTMLCard function
      // 2 aruguments that are passed into the createHTMLCard, i and item.

      //we removed "i"

      const postHTML = createHTMLCard(post);
      postHTMLList.unshift(postHTML);

      // console.log(productHTMLList);
    } //End for loop statement

    // Append the cards created to the #row id
    // \n creates a break for every row

    const pHTML = postHTMLList.join("\n");
    console.log(pHTML);

    //shows all the product.addItem (Product items in productPage.js)
    document.querySelector("#card").innerHTML = pHTML;

    // //Create a for loop to add the event listener to each 'more' button in the card displayed
    // for (let j = 0; j < this._posts.length; j++) {

    //     //Qns what do I need to parse in to the event hanler funtion in order to display the details of each item when i click on "More" button - event handler function
    //     const post = this._posts[j];

    //     document.getElementById(j).addEventListener("click", addPost()) //handleClick

    //         //you can change displayPostDetail to any other names
    //         {
    //             displayPostDetail(post);

    //         };
    // }
  } //End of displayItem method
} //End of ProductController Class

//this arrow function returns the whole HTML element with the values that is passed in through the parameter
// This HTML codes refers to creating a single card for an item to be displayed
// you can rename index to any meaningful name as long as it correponds to i
// this exist in function scope so index cannot be used for addEventListener for loop
// should be inside a div container - avatar + post

//removed "index"
const createHTMLCard = (post) => {

  const hash = window.location.hash;
  const display = (hash == "#All") ? 'block' : ((hash == ("#" + post.topic) ? 'block' : 'none'));

  return `<div class="card filter-${post.topic}" style="display:${display};">
                <div class="card-body">
                    <img src='../images/avatar-images/profile-${
                      post.avatar
                    }.png' class="float-left mr-2 border border-light rounded" width="64" height="64" name="avatar">
                    <h5 class="card-title">${post.name}</h5>
                    <p class="card-text">${post.text}</p>
                    ${
                      post.image === "empty"
                        ? ""
                        : `<img src=${post.image} class="card-img-top" alt="..." id="fileDisplayArea"></img>`
                    }
                    <p class="card-text"><small class="text-muted post_topic">
                    ${
                      post.topic === "PetTips" ? "Pet Tips" : post.topic
                    }</small>
                    <small class="text-muted"> | Last updated ${
                      post.time
                    }</small></p>
                </div>
                
            </div>`;
};

/* <div class="col-lg-4">
{/* /* <div class="card" style="width: 18rem;">
    <img src="${item.imageURL}"
        class="card-img-top" alt="image">
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <a id="${index}" href="#" class="btn btn-info" data-toggle="modal" data-target="#productModal">More</a>
    </div>
</div>
</div> */
