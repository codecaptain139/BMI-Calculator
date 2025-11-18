const form = document.querySelector('form') //Our all work is depended on form that's why we take the form and store it in a variable called 'form'.

form.addEventListener('submit', (e) => { //then here we addEventListener name 'submit' because we have a list of events for different kind of works.
  e.preventDefault() //The form by defualt submit the data by GET method which means DATA of the form gets involved in the URL so to stop that here we use preventDefault method to stop that process.

  const height = parseInt(document.querySelector('#height').value) //.value is a property which is used only for input forms .value reads those value which user enter into the input field. But it always returns a string that's why we use parseInt which converts the height from string to a number.

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results') //Just take the access of result and store it into results variable.

  if(height === '' || height < 0 || isNaN(height)){ //Here we implement some checks like if the the height is empty and if it is less than 0 and if it is NaN then print the below message.
    results.innerHTML = `Please give a valid height ${height}`; //Please give a valid height.
  } else if(weight === '' || weight < 0 || isNaN(weight)){ //Here we check same things for the weight also and if the conditions doesn't match then print the below message.
    results.innerHTML = `Please give a valid height ${weight}`; //Please give a valid weight.
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2) //This is the formula to calculate BMI but in my case the height is in cm that's why we divide the square of height by 10000 because we convert it into m other wise the real formula is BMI = weight(kg) / height(m)^2. And .toFixed is a method to take the value upto 2 decimal places.
    results.innerHTML = `<span>${bmi}</span>` //store the bmi in span tag in results div.
    if(bmi < 18.6){
      results.innerHTML = `<span>${bmi} - Underweight</span>`
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi} - Normal Range</span>`
    } else {
      results.innerHTML = `<span>${bmi} - Overweight</span>`
    }
  }
})