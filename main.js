var post = document.getElementById('post');
var getText = document.getElementById('getText');
var requestURL = 'https://api.behance.net/v2/projects?q=motorcycle&client_id=UQHakERSArHWQGtYuuN0vuWbWFcPdtcL'

getText.addEventListener("click", function() {
        fetch(requestURL)
            .then(res => res.json())
            .then(projects => {
                var output = '';
                var project = projects.projects;
        
                for (var i = 0; i < 9; i++) {
                    var random = Math.floor(Math.random() * project.length)
                    output += `<li class="comment" id="${project[random].id}">
                        <img src="${project[random].covers[115]}" class="img"> 
                        <p class="index">Index: ${project[random].id}</p>
                        <p class="name">Name: ${project[random].name}</p>
                        </li>`;
                }

                post.innerHTML = output;
                console.log(project);
            })
    })


