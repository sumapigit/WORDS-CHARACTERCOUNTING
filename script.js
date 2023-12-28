let textbox=document.getElementById("textbox")
textbox.addEventListener('input',function(){
    var text=this.value;
    let char=text.length
    document.getElementById("char").innerHTML=char
    text=text.trim()//to remove space from last & firsyt
    let words=text.split(" ")
    // console.log(words)
    let cleanList=words.filter(function(elm){
        // console.log(cleanList)
        return elm!=" "
    })
    document.getElementById("words").innerHTML=cleanList.length
})
