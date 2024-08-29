let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')

buttons.forEach( (button) => {
    //console.log(button);
    button.addEventListener('click', function(e) {
      console.log(e);   // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
      console.log(e.target);    // <span class="button" id="blue"></span>
      let color = e.target.id

      /* using Switch statement :
      switch (color) {
        case color:
            body.style.backgroundColor = color
            break;
        default:
            console.log("No color changes");
            break;
      }*/

      /* using if else condition
      if(color){
        body.style.backgroundColor = color
      }  */
    })
})

