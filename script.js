var wrapperEle = document.body.querySelector(".wrapper");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for(var i=0; i<list.length;i++){
  if(list[i].name&&list[i].age&&list[i])
    {
      var personEle = document.createElement("div");
      personEle.innerHTML=list[i].age;
      if(list[i].age>40)
        {
          personEle.style.color = "red";
        }
      wrapperEle.appendChild(personEle);
    }
}