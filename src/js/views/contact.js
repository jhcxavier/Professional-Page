import React from "react";


class Projects extends React.Component {}

export default Projects;

export class Home extends React.Component {
	render() {
		return (
       <div class="container1">
                <form action="action_page.php">

                    <label for="fname">First Name<label/>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label for="email">Email</label>
                        <select id="Email" name="Email">
                        </select>

                    <label for="message">Looking Forward to your message!</label>
                        <textarea id="message" name="message" placeholder="Please leave your full contact information and detailed message" style="height:200px"></textarea>

                        <input type="submit" value="Done? Click Me"/>
                    <input type="submit" value="Submit"/>
            </form>
        </div>
        }
    }
)