

function App() {
    let properties = {
        author : "Teuku",
        message : "Hello i am Teuku"
    }
    properties.age = 21

    if(properties) {
        delete properties.author;
    } 
    else {
        properties.nameApp = "ReactJs" 
    }
    return console.log(properties);
}

export default App;