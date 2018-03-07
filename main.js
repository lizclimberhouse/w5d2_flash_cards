console.log("this JS is working")

// $('#arrow_click').on('click', function() {
//   var arrow_text = "Say anything";
//   $("#arrow").text(arrow_text);
// })


let cards = [ 
  { front: 'Arrow Function', back: 'Is a thing that we talked about in class that takes the place of \"function\"' },
  { front: 'Let', back: 'Another thing we talked about in class that replaces \"var\"'},
  { front: 'Const', back: 'This sets a constant variable to resolve magic number issues'},
  { front: 'Object.Assign', back: 'Good for assigning objects or something'}
 ]
let i = 0;

$(document).ready( () => {
  function FuncArrow () {
  cards.forEach( c => {
    
    $("#card_list").append(`
  
      <div class="col s6 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${c.front}</span>
          <p id="card_text_${i}"></p>
        </div>
        <div class="card-action">
          <a id="card_click" data-id="${i}">Show Info</a>
        </div>
      </div>
    </div>
    `)
  i++;
  
  })

  $(document).on('click', '#card_click', function(e) {
    let i = $(this).data("id")
    let x = $('#card_text_' + i);
    // debugger
  
    let y = $('#card_click').find("[data-id='" + i + "']");
    if (x.text() === "") {
      let z = $("[data-id='" + i + "']");
      // debugger
      x.text(cards[i].back);
      z.text("Hide Info");
    } else {
      z = $("[data-id='" + i + "']");
      x.text("");
      z.text("Show Info");
    }
  })

  }
  FuncArrow()

  


  $("#save-click").click( function() {
    let new_front = $("#new_front").val();
    let new_back = $("#new_back").val();
    // debugger
    let array_add = { front: new_front, back: new_back };
    cards.push(array_add);
    console.log(array_add);
    let card_list = $('#card_list')
    cards.forEach( card => card_list.append(array_add))
    card_list.empty()
    FuncArrow()
  })

  

})








// $(document).on('click', '#arrow_click', () => {
//   FuncArrow()
// })
// function FuncArrow () {
//   let x = $('#arrow');
//   let y = $('#arrow_click')
//   if (x.text() === "") {
//     x.text("Is a thing that we talked about in class that takes the place of \"function\"");
//     y.text("Hide Info");
//   } else {
//     x.text("");
//     y.text("Show Info");
//   }
// }

// $(document).on('click', '#let_click', () => {
//   FuncLet()
// })
// function FuncLet () {
//   let x = $('#let');
//   let y = $('#let_click')
//   if (x.text() === "") {
//     x.text("Another thing we talked about in class that replaces \"var\"");
//     y.text("Hide Info");
//   } else {
//     x.text("");
//     y.text("Show Info");
//   }
// }

// $(document).on('click', '#const_click', () => {
//   FuncConst()
// })
// function FuncConst () {
//   let x = $('#const');
//   let y = $('#const_click')
//   if (x.text() === "") {
//     x.text("This sets a constant variable to resolve magic number issues");
//     y.text("Hide Info");
//   } else {
//     x.text("");
//     y.text("Show Info");
//   }
// }

// $(document).on('click', '#oa_click', () => {
//   FuncOA()
// })
// function FuncOA () {
//   let x = $('#oa');
//   let y = $('#oa_click')
//   if (x.text() === "") {
//     x.text("Good for assigning objects or something");
//     y.text("Hide Info");
//   } else {
//     x.text("");
//     y.text("Show Info");
//   }
// }