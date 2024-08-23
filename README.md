# Grievance-System

Grievance System Prototype

This is a simple prototype for a grievance management system. It allows users to submit grievances, view the status of their grievances, and provides an admin panel for administrators to manage and resolve grievances. The prototype is built using basic HTML, CSS, and JavaScript, with data stored in the browser’s local storage for demonstration purposes.


Features

	•	Submit Grievances: Users can submit grievances with their name, email, type of grievance, and a detailed description.
	•	View Grievances: Users can search and view their submitted grievances along with their current status.
	•	Admin Panel: Administrators can log in to view all grievances, update their status, and mark them as resolved.



Usage

	1.	Submit a Grievance:
	•	Fill in the form under the “Submit Grievance” section with your details and description of the issue.
	•	Click “Submit” to save your grievance. You will receive a confirmation message.
	2.	View Grievances:
	•	Use the search bar in the “View Grievance” section to find your grievances by ID or email.
	•	Your grievances will be listed with their status.
	3.	Admin Panel:
	•	Click the “Login as Admin” button to access the admin dashboard.
	•	View all grievances submitted by users.
	•	Use the “Mark as Resolved” button to update the status of a grievance.

Files

	•	index.html: The main HTML file that contains the structure of the web page.
	•	styles.css: The CSS file that styles the web page.
	•	script.js: The JavaScript file that handles form submissions, data storage, and UI updates.

    How It Works

	•	Grievance Submission: When a user submits a grievance, it is stored in the browser’s local storage with a unique ID and “Pending” status.
	•	View Grievances: Users can search for their grievances by ID or email. The grievances are retrieved from local storage and displayed on the page.
	•	Admin Panel: Admins can view all grievances, and update their status to “Resolved”. The status updates are saved back to local storage.

Limitations

	•	Local Storage: This prototype uses local storage to store grievances, which is not persistent across different devices or browsers. It’s suitable for small-scale testing but not for production.
	•	No Authentication: The admin login is a simple button click without authentication. In a real-world scenario, a secure login system would be required.
	•	No Backend: There is no backend or database in this prototype. All data is handled client-side, which limits scalability and security.
