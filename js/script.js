// Loading Screen
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('loading-screen').style.display = 'flex';

    setTimeout(function(){  
        document.getElementById('loading-screen').style.display = 'none';

        document.getElementById('content').style.display = 'block';
    })
});

// Reset Btn Form
function resetForm() {
    document.getElementById("form").reset();
}


// Search Input

let choices = [
    "باطنة",
    "عظام",
    "جلدية",
    "قلب وأوعية دموية",
    "عيون",
    "جراحة",
    "تجميل",
    "أطفال",
    "أسنان",
    "نسا وتوليد",
    "أورام",
    "مخ وأعصاب",
    "علاج طبيعي",
    "أنف وأذن وحنجرة",
    "صدر"
  ];
  let $ = document;
  let list_group = $.querySelector(".list-group");
  
  function ListItemGenerator() {
    if (!inputTxt.value) {
      inputTxt.parentElement.classList.remove("active");
      list_group.style.display = "none";
    } else {
      inputTxt.parentElement.classList.add("active");
      list_group.style.display = "block";
  
      let SearchResults = choices.filter(function (choice) {
        return choice.toLowerCase().startsWith(inputTxt.value.toLowerCase());
      });
  
      CreatingList(SearchResults);
  
      function CreatingList(Words) {
        let createdList = Words.map(function (word) {
          return "<li>" + word + "</li>";
        });
        let CustomListItem;
        if (!CreatingList.length) {
          CustomListItem = "<li>" + inputTxt.value + "</li>";
        } else {
          CustomListItem = createdList.join("");
        }
        list_group.innerHTML = CustomListItem;
        CompleteText();
      }
    }
  
    function CompleteText() {
      all_list_items = list_group.querySelectorAll("li");
      all_list_items.forEach(function (list) {
        list.addEventListener("click", function (e) {
          inputTxt.value = e.target.textContent;
          list_group.style.display = "none";
        });
      });
    }
  }
  
  inputTxt.addEventListener("keyup", ListItemGenerator);
  


  // Add click event for scroll up button
  let  scrollBtn = document.querySelector(".scrollBtn");
    window.addEventListener("scroll", ()=>{
        scrollUp()
    })
    scrollBtn.addEventListener('click',()=>{
        window.scrollTo({
            top : 0 ,
            behavior : "smooth"
        })
    })
    scrollUp()
    function scrollUp(){
        window.scrollY > 100 ? 
        scrollBtn.classList.add('active') :
        scrollBtn.classList.remove('active'); 
    }