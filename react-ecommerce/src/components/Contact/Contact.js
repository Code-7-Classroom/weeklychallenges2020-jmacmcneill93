import React from 'react';
import "./contact.css"
class Contact extends React.Component {
    render() {
        return(
        <section id="features">
        <div class="box1">
            <i class="fas fa-building"></i>
            <h3>Location</h3>
            <p>123 Main St. Charlotte, NC</p>

        </div>

        <div class="box2">
            <i class="fas fa-phone"></i>
            <h3>Phone Number</h3>
            <p>7045446557</p>
        </div>

        <div class="box3">
            <i class="fas fa-envelope"></i>
            <h3>Email Address</h3>
            <p>joshmcneill1993@gmail.com</p>
        </div>

</section>

        )
    }
}

export default Contact;