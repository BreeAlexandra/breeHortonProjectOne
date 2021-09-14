// When the user submits the form, capture that submission and get the value that they wrote in the input field.
    // - Add an event lister to the form for the submit event.
    // - Go get the value that the user wrote from the page.
// Build another function to take the name and comment the user gave us and put them on the page under the older comments. Add a placeholder image.
    // - Build a new HTML <div> element and populate it with the user's comment.
    // - Append our new div element 

    const formElement = document.querySelector('.commentForm');
    
    formElement.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const name = document.getElementById('name');
        const userName = name.value;
        console.log(userName);
        const commentForm = document.querySelector('.blog textarea');
        const userComment = commentForm.value;
        console.log(userComment);

        // addContent(`Thursday September 16th, 2021 by ${userName}`);
        
    });



    

