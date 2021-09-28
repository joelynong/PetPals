//productForm.js

//1) Store all the inputs from the user to the variables
//2) Do all validation on your form to ensure the informaton to be passed to the backend are correct
//3) If all information is correct, add all the information into an object array (e.g. formList)
//4) Print out the formList to check if the information are in the object array

let formList = [];
//let checkboxChecked = [];
//let isChecked = false;
const formPost = new PostController();

//store all the values into the object array
//later we will need to make use of class to add the values using the class methods

//const checkboxes = document.querySelectorAll("input[type=checkbox]");
//NodeList: list of input HTMLElement, not able to do filter or map
//Convert NodeList to array to make use of filter/map

function addPost(imgblob) {
//  console.log("in the function");
  //create variables to store the values from the form
  const name = document.querySelector("#name").value;
  const topic = document.querySelector("#topic").value;
  const avatar = document.querySelector('input[name="avatar"]:checked').value;
  const text = document.querySelector("#text").value;
  //const time = moment().fromNow();
  const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//   const image = document.querySelector("#fileInput").value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('topic', topic);
    formData.append('avatar', avatar);
    formData.append('text', text);
    formData.append('image', imgblob);
    formData.append('time',time);

//    console.log("blob: " + imgblob)
   fetch('https://petpalssocialmedia.herokuapp.com/post/add', { method: 'POST',
               body: formData
               })
               .then(response => response.json())
               .then(data => {
//                   console.log('Success:', data);
                   alert("Successfully added to posts")
                    getAllPostFromDatabase();
               })
               .catch((error) => {
                   console.error('Error:', error);
                   alert("Error adding item to posts")
               });

}

function getAllPostFromDatabase() {
    formList = [];
    // go to database and fetch all data
    //PostList = some fetch call
    fetch('https://petpalssocialmedia.herokuapp.com/post/all')
        .then((resp) => resp.json())
        .then(function(data) {
//            console.log("2. receive data")
//            console.log('data', data);

            for (let i = 0; i < data.length; i++) {
                addToList(data[i].name, data[i].topic, data[i].avatar, data[i].text, data[i].image, data[i].time);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

function addToList(name, topic, avatar, text, image, time) {
//console.log(name);
  //Just adding the list of items into the array and push the array to formList object

  //item object that contain one set of property and value of the inputs
  //Do
  const item = {
    name: name, //property of object: value
    topic: topic,
    avatar: avatar,
    text: text,
    image: image,
    time: time,
  };

  //push the item to FormList (array of objects)

  const postList = createHTMLCard(item);
  formList.unshift(postList);
  const printHTML = formList.join("\n");
//  console.log(printHTML);

  //shows all the product.addItem (Product items in productPage.js)
  document.querySelector("#card").innerHTML = printHTML;

  //Clear the form for the next input
  clearForm();

//  console.log(`"Total Submission": ${formList.length}:`, formList);
}

function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#topic").value = "Recommendations";
  document.querySelector('input[name="avatar"]:checked').value = "dog";
  document.querySelector("#text").value = "";
  document.querySelector("#fileInput").value = "";
}