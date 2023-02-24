import React from "react";

function BasicHTML () {
    return (
      <div>
        <table cellspacing="50">
          <tr>
            <td>
              <img
                src="https://images.pling.com/cache/400x400/img/00/00/66/29/43/1817999/166172-macos-12-monterey-official-stock-wallpaper-6k-resolution-dark-1920x1080.jpg"
                alt="Test"
              />
            </td>
            <td>
              <h1>Here The title</h1>
              <p>I like coffee, sweets and burgers</p>
            </td>
          </tr>
        </table>
        <hr size="2" />
        <ul>
          Fruits
          <li>Apple</li>
          <li>Banana</li>
        </ul>

        <h3>Work Experience</h3>
        <table border="1">
          <tr>
            <td>Table</td>
            <td>Chair</td>
          </tr>
        </table>

        <table>
          <tr>
            <td>English</td>
            <td>#####</td>
            <td>Korean</td>
            <td>####</td>
          </tr>

          <tr>
            <td>Chinese</td>
            <td>###</td>
            <td>Korean</td>
            <td>####</td>
          </tr>
        </table>

        <h3>Form Actions</h3>
       {/*  <form action="/" method="post">
          <label> Name: </label>
          <input type="text" name="name" />
          <input type="submit" name="name" />
          <input type="checkbox" name="name" />
          <input type="email" name="name" />
          <input type="file" name="name" />
          <input type="password" name="name" />
          <input type="range" min="1" max="22" name="name" />
          <input type="radio" name="name" />
          <input type="search" name="name" />
          <input type="time" name="name" />
        </form> */}

        <form action="/" method="post">
          <label type="text" name="">Name</label>
          <input type="text" name="name" /><br/>
           <label type="email" name="">Email</label>
          <input type="email" name="name" /><br/>
          <label>Your Message</label>
          <textarea name="message" rows="10" cols="50" placeholder="Here Message"></textarea>
        </form>
      </div>
    );
}

export default BasicHTML;