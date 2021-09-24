//productForm.js

//1) Store all the inputs from the user to the variables
//2) Do all validation on your form to ensure the informaton to be passed to the backend are correct
//3) If all information is correct, add all the information into an object array (e.g. formList)
//4) Print out the formList to check if the information are in the object array

const formList = [];
//let checkboxChecked = [];
//let isChecked = false;
const formPost = new PostController();

//store all the values into the object array
//later we will need to make use of class to add the values using the class methods

//const checkboxes = document.querySelectorAll("input[type=checkbox]");
//NodeList: list of input HTMLElement, not able to do filter or map
//Convert NodeList to array to make use of filter/map

function addPost(imgblob) {
  console.log("in the function");
  //create variables to store the values from the form
  const name = document.querySelector("#name").value;
  const topic = document.querySelector("#topic").value;
  const avatar = document.querySelector('input[name="avatar"]:checked').value;
  const text = document.querySelector("#text").value;
  const time = moment().fromNow();
  // const image = document.querySelector("#fileInput").value;

  addToList(name, topic, avatar, text, imgblob, time);
}

function addToList(name, topic, avatar, text, image, time) {
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

  //push the item to FormList (array of objects)

  const postList = createHTMLCard(item);
  formList.unshift(postList);
  const printHTML = formList.join("\n");
  console.log(printHTML);

  //shows all the product.addItem (Product items in productPage.js)
  document.querySelector("#card").innerHTML = printHTML;

  //Clear the form for the next input
  clearForm();

  console.log(`"Total Submission": ${formList.length}:`, formList);
}

function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#topic").value = "Recommendations";
  document.querySelector('input[name="avatar"]:checked').value = "dog";
  document.querySelector("#text").value = "";
  document.querySelector("#fileInput").value = "";

  /*
    //clear the select option back to first element: "select"
    document.querySelector("#tour_package").selectedIndex = 0;

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    document.querySelector("#radio_agree").checked = false;
*/
}
/*
//Validation on checkbox - User has to check at least one experience 
//Check if any of the checkboxes is being checked
checkboxes.forEach(checkbox => {

    //eventlistener and eventhandler function
    checkbox.addEventListener("change", function() {

        //Copy the list of checkboxes object to an array list so as to use the filter and map methods to remove unchecked checkboxes and extract the checkbox values from the array.

        let checkboxChecked = Array.from(checkboxes)
            .filter(elements => elements.checked)
            .map(elements => elements.value)

        console.log(checkboxChecked);
        if (checkboxChecked.length > 0) {
            //remove the customValidity message
            document.querySelector("#c_food").setCustomValidity("");
            document.querySelector("#c_food").reportValidity();
            isChecked = true;
        } else {
            isChecked = false;

        }

    });
});*/

/*
function setDateFormat(d) {
    //format the day to dd or month to mm
    //setting the date to "08" instead of "8" This has effect on the rest of the codes especially in calendar selector
    if (d < dateFormat) {
        d = "0" + d;
    }
    return d;
}*/

/*
//Set the min and max date for selection of the arrival date
//limit is one month e.g. today's date is min 2021-08-17, max: 2021-09-16
const dateFormat = 10;
const today = new Date();
let day = today.getDate(),
    month = today.getMonth() + 1,
    year = today.getFullYear();


let nextMonth = month + 1;

//getMonth - Jan return 0, Feb return 1, etc.


//format the YYYY-MM-DD
//e.g. day is 1, format to 01
//e.g. month is 8, format to 08
day = setDateFormat(day);
month = setDateFormat(month);
nextMonth = setDateFormat(nextMonth);

let todayDate = year + "-" + month + "-" + day;
let nextMonthDate = year + "-" + nextMonth + "-" + day;


//next month day: remain the same as the current day : 1, next month day will be the last day of the current month
//year : current month is Dec, next month will need to consider next year and 1st month.

console.log(todayDate, nextMonthDate);

document.querySelector("#arrival_date").setAttribute("min", todayDate);

document.querySelector("#arrival_date").setAttribute("max", nextMonthDate);
*/
