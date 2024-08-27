const programing = ["js","MVC","py","CSS"] 

// programing.forEach( function (item){
//     console.log(`${item}`);    
// })

// OR

// programing.forEach( (val) => {
//     console.log(`${val}`);
// } )

// OR

// function print(i) {
//     console.log(i)
// }
// programing.forEach(print)       // we giving reference of function thats why not use print()

//OR

// Output : 
        // js
        // MVC
        // py
        // CSS

programing.forEach( (item, index, arr) => {
    //console.log(item,index,arr)
}) 

// Output : 
        // js 0 [ 'js', 'MVC', 'py', 'CSS' ]
        // MVC 1 [ 'js', 'MVC', 'py', 'CSS' ]
        // py 2 [ 'js', 'MVC', 'py', 'CSS' ]
        // CSS 3 [ 'js', 'MVC', 'py', 'CSS' ]

//-----------------------------------
let myCoding = [
    {
        languageName : "JavaScript",
        fileName : "JS"
    },
    {
        languageName : "Model-View-Controller",
        fileName : "MVC"
    },
    {
        languageName : "Casceding Style Sheet",
        fileName : "CSS"
    },
]

myCoding.forEach( (obj) => {
    console.log(obj.languageName)
} )

// Output : 
        // JavaScript
        // Model-View-Controller
        // Casceding Style Sheet