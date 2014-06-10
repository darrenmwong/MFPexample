data = {

  burrito: {
    calories: 830,
    protein: 26,
    carbs: 80
  },

  ChickenSandwhich: {
    calories: 430,
    protein: 32,
    carbs: 40

  }



};

$("#submit-button").click(function(e) {
  e.preventDefault();
  var calories = $("#selectId").val()
  console.log(calories);  
  console.log(data);
});

