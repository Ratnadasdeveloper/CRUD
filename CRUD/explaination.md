

Here's a step-by-step explanation of the code:

HTML Structure:

The code starts with the HTML structure that defines the form and the table where data will be displayed.
The form contains input fields for Name, Job, and Experience, as well as buttons for Submit and Reset.
There is a <div> element with the id="msg" to display messages to the user.
The table initially has a header row with columns: Name, Job, Experience, and Action.
CSS Styling:

The CSS code defines the styling for the HTML elements:
Sets the background color of the body.
Styles the table, table cells, and input fields.
Defines specific styles for the table header row and data rows.
JavaScript Functions:

The JavaScript code handles the CRUD operations and user interactions.
Global Variables:

msg: Represents the message <div> element for displaying notifications.
row: A global variable used to track the currently selected row for editing or updating.
CREATE (Submit Function):

The Submit function is triggered when the user clicks the Submit button.
It calls retrieveData to collect data from input fields.
If any of the fields are empty, it displays an error message; otherwise, it calls insert to add the data to the table.
READ (Retrieve Data Function):

The retrieveData function reads data from the input fields and returns it as an object.
It checks if any of the fields are empty and returns null in that case.
INSERT Function:

The insert function takes data and adds a new row to the table.
It uses the insertRow and insertCell methods to create a new row and cells.
The data is added to the cells, and Edit and Delete buttons are also included.
EDIT Function:

The edit function is called when the user clicks the Edit button in a row.
It retrieves the data from the selected row and populates the input fields with that data for editing.
It stores the row index in the data-row-index attribute of the form element, so that the update function knows which row to update.
UPDATE Function:

The update function is called when the user clicks the Submit button after editing.
It retrieves the row index from the data-row-index attribute, updates the table cell values, and clears the form.
Finally, it removes the data-row-index attribute to indicate that no row is currently being edited.
DELETE Function:

The remove function is called when the user clicks the Delete button in a row.
It confirms the deletion with the user and then removes the selected row from the table.
