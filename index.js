function scuberGreetingForFeet(somevalue){
  // Write your code here!
  if (somevalue <= 199){
    return "This one is on me!";
  }
  else if(somevalue <=1500){
    return "That will be twenty bucks.";
  }
  else if (somevalue <=2001){
    return "I will gladly take your thirty bucks.";
  }
  else if(somevalue <= 2501){
    return "No can do.";
  }
}

function ternaryCheckCity(somevalue){
  // Write your code here!
  return somevalue === "NYC" ?"Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(somevalue){
  // Write your code here!
  switch (somevalue){
    case("generous"):
    return "Thank you so much."
    case("not as generous"):
    return "Thank you. "
    case("thanks for everything"):
      return "Bye. ";

  }
}