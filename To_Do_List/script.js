
const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

function addTask(){
    if(inputBox.value === "")
    {
        alert('Write something')                
    }
    else
    {
        let div = document.createElement('div')
        div.setAttribute('class','flex justify-between')
        listContainer.append(div)

        let li = document.createElement('li')
        li.innerHTML = inputBox.value.toUpperCase()
        div.append(li)
        

        let i = document.createElement('i')
        i.setAttribute('class','ri-close-fill  text-3xl hover:bg-gray-200 hover:rounded-full hover:cursor-pointer')
        div.append(i)             
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener('click',function(e){

    // console.log(e.target)
    // console.log(e.target.tagName)
    if(e.target.tagName === 'I'){
        console.log("inside if")
        e.target.parentElement.remove()
    }
    saveData()
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()
