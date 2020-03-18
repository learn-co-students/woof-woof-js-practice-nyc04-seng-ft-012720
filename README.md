# WOOF WOOF WELCOME TO DOGGO BARK BARK

THIS GOOD APPLICATION FOR LOOKING AT DOGS BOW WOW.

WHEN LOOKING AT PUP PUPS USER SHOULD BE ABLE TO:
 - CLICK ON DOGS IN THE DOG BAR TO SEE MORE INFO ABOUT THE GOOD PUPPER;
   - MORE INFO INCLUDES A DOG PIC, A DOG NAME, AND A DOG BUTTON THAT INDICATES
     WHETHER IT IS A GOOD DOG OR A BAD DOG;
 - CLICK ON GOOD DOG/BAD DOG BUTTON IN ORDER TO TOGGLE PUP GOODNESS;
 - CLICK ON "FILTER GOOD DOGS" BUTTON IN ORDER TO JUST SEE GOOD DOGS OR SEE
   ALL DOGS IN DOG BAR.

## EXAMPLE:
![Showcasing the full functionality](woof-woof-demo.gif)

### STEP 1: VIEW THE DATA

All of the dog data is stored in the `db.json` file. You'll want to access this data
using a json server. In order to do this, run `$ npm install -g json-server` and
then `$ json-server --watch db.json`.

This will setup the data on a server using restful routes at http://localhost:3000/pups.
Go ahead and head to that url in your browser to view the data.
Familiarize yourself with the attributes for each pup. Try going to `/pups/:id` to see an individual pup as well.

### STEP 2: ADD PUPS TO DOG BAR
On the page, there is a `div` with the id of `"dog-bar"`. On page load, make a fetch
to get all of the pup objects. When you have this information, you'll need to add
a `span` with the pup's name to the dog bar (ex: `<span>Mr. Bonkers</span>`).

### STEP 3: SHOW MORE INFO ABOUT EACH PUP
When a user clicks on a pup's `span` in the dog bar, that pup's info (`image`, `name`, and `isGoodDog` status) should show up in the `div` with the id of `"dog-info"`.
When you have the pup's information, the dog info `div` should have the following children:
 - an `img` tag with the pup's image url
 - an `h2` with the pup's name
 - a `button` that says `"Good Dog!"` or `"Bad Dog!"` based on whether `isGoodDog` is true or false.
 Ex:
 ```
  <img src=dog_image_url>
  <h2>Mr. Bonkers</h2>
  <button>Good Dog!</button>
 ```

### STEP 4: TOGGLE GOOD DOG
 When a user clicks the Good Dog/Bad Dog button, two things should happen:
  - The button's text should change from Good to Bad or Bad to Good
  - The corresponding pup object in the database should be updated to reflect the new isGoodDog value
    - Please note, you can update a dog by making a PATCH request to `/pups/:id`

### BONUS! STEP 5: FILTER GOOD DOGS 
When a user clicks on the Filter Good Dogs button, two things should happen:
 - The button's text should change from "Filter good dogs: OFF" to "Filter good dogs: ON", or vice versa.
 - If the button now says "ON" (meaning the filter is on), then the Dog Bar should only show pups whose isGoodDog attribute is true. If the filter is off, the Dog Bar should show all pups (like normal).



https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg

https://specials-images.forbesimg.com/imageserve/5db4c7b464b49a0007e9dfac/960x0.jpg?fit=scale

https://lh3.googleusercontent.com/proxy/OhpWrLvH_iPopEei3AaZ0T7mfP6ldDQH4OmTgb4_WmxBk-_qQBEl_B94pyzGKhb5Q0bIAg0L9BiNJIAVpuJNdbRBfBIUK-_9cCJeBpdvGZE


https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=640:*



https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg
