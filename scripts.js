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

        const email = document.querySelector('input[type=email]');
        const userEmail = email.value
        console.log(userEmail);
        
        const commentForm = document.querySelector('.blog textarea');
        const userComment = commentForm.value;

        // I'm not sure the best way to credit someone for helping me - but my cohort mate Ryan shared this code and gave me his permission to use it!! I hope that's ok!
        const today = new Date;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        addImage();
        addName(`${today.toLocaleDateString(undefined,options)} by ${userName}`);
        addComment(userComment);

        formElement.reset();

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


    
    

