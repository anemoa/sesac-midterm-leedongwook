const getTodos = async () => {
    try{
        const list = await axios.get('https://jsonplaceholder.typicode.com/todos');
        list.data.slice(0, 10);

        
    }catch(err){
        console.log(err);
    } 
}




document.addEventListener("DOMContentLoaded", ()=> {
	getTodos();
});


