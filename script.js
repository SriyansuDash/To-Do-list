const inputB = document.getElementById('inputb');
const list = document.getElementById('List');

function addTask(){
    if(inputB.value === ''){
        alert(' Why are you not writing something:)');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputB.value;
       
        let span = document.createElement('span');
        span.onclick = function(ef){
            ef.stopPropagation();
            li.remove();
        }
        
        li.onclick = function(ef) {
            if (ef.target.tagName === 'SPAN') return;
            li.classList.toggle('checked');
        }
        
        li.appendChild(span);  
        list.appendChild(li);
    }
    inputB.value = "";
}

inputB.addEventListener('keypress', function(ef){
    if(ef.key === 'Enter'){
        addTask();
    }
});
