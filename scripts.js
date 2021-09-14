// When the user submits the form, capture that submission and get the value that they wrote in the input field.
    // - Add an event lister to the form for the submit event.
    // - Go get the value that the user wrote from the page.
// Build another function to take the name and comment the user gave us and put them on the page under the older comments. Add a placeholder image.
    // - Append placeholder image 
    // - Build a new HTML <p> element and populate it with the user's name.
    // - Append our new <p> element 
    // - Build a new HTML <p> element and populate it with the user's comment.
    // - Append our new <p> element 

    const formElement = document.querySelector('.commentForm');
    
    formElement.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const name = document.getElementById('name');
        const userName = name.value;
        console.log(userName);
        const commentForm = document.querySelector('.blog textarea');
        const userComment = commentForm.value;
        console.log(userComment);

        addImage();
        addName(`Thursday September 16th, 2021 by ${userName}`);
        addComment(userComment);
        
    });

    const addImage = function() {

        const image = document.querySelector(`.c3imageContainer`);
        image.innerHTML = `<img src="http://placekitten.com/100/100" alt="adorable kitten">`;

    }

    const divElement = document.querySelector('.c3textContainer');

    const addName = function(newName) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = newName;

        divElement.appendChild(newParagraph);
    }

    const addComment = function(newComment) {
        const secondParagraph = document.createElement('p');
        secondParagraph.textContent = newComment;

        divElement.appendChild(secondParagraph);
    }



    

