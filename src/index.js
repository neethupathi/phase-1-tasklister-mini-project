
document.addEventListener("DOMContentLoaded", () => {

const t=document.getElementById("tasks");
  document.getElementById("create-task-form").addEventListener("submit",
  function but(e)
  {
    e.preventDefault();
    let txt = document.getElementById("new-task-description").value;
   const li = document.createElement('li');
    li.appendChild(document.createTextNode(txt));
    const delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
t.appendChild(li);
  }
  );
  t.addEventListener('click',
  function rem(e) {
    if (e.target.nodeName === 'BUTTON') {
      if(confirm('Are you sure?')) {
        let li = e.target.parentElement;
        t.removeChild(li);
      }
    }

  }
  );


});


