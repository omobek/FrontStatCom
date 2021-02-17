const searchWrapper = document.querySelector(".search__input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".actocom__box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=>{
   let userData = e.target.value;
   let emptyArray = [];
   if (userData){
       emptyArray = suggestions.filter((data)=>{
           return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
       })

       emptyArray = emptyArray.map((data)=>{
           return data = '<li>' + data + '</li>';
       });
       console.log(emptyArray);
       searchWrapper.classList.add("active");
       showSuggestions(emptyArray);
       let allList = suggBox.querySelectorAll("li");
       for (let i = 0 ; i < allList.length; i++){
           allList[i].setAttribute("onclick", "select(this)");
       }
   }else{
       searchWrapper.classList.remove("active");
   }

}
function  select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    // if(inputBox.value = selectUserData){
    //     suggBox.classList.remove("active");
    // }
}

function showSuggestions(list){
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('')
    }
    suggBox.innerHTML = listData;
}

function removSuggbox(){

}
