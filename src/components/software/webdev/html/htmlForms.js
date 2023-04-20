import React from 'react';

const HtmlForms = () =>{
    return(
        <div>
            <h2>Forms</h2>
            input types-text, submit, radio, checkbox, number, range, color, date,
      tel, email, url, password, file, pulldown menu<br />
      textarea<br />
      select/option- multiple<br />
      button,fieldset/legend,
      Form Methods:
      <li>GET</li>
      <li>POST</li>
      Action says where form data goes<br />
      method is how the data will be sent<br />
      <h3>Form Examples</h3>
      *need to change this to table that shows code
      <form action='' method=''>
        Text<br />
        <label for='firstName'>Label for textBox</label><br />
        <input type='text' name='firstName' id='firstName' placeholder='text'></input><br />
        Password<br />
        <input type='password' name='password' placeholder='type password'></input><br />
        Email<br />
        <input type='email' name='email' value='email@email'></input><br />
        Submit Button<br />
        <input type='submit' value='Submit Here'></input><br />
        textarea<br />
        <textarea name='textarea' id='textArea' cols='10' rows='2'></textarea><br />
        radio<br />
        <p>Select Language</p>
        <input type='radio' name='language' value='English' checked/>English
        <input type='radio' name='language' value='Spanish' />Spanish
        <input type='radio' name='language' value='French' />Frenchz<br />
        Checkbox<br />
        <input type='checkbox' name='language1' value='English' checked/>English
        <input type='checkbox' name='language1' value='Spanish' checked/>Spanish
        <input type='checkbox' name='language1' value='French' />Frenchz<br />
        Select<br />
        <select name='languages2'>
          <option value='English'>English</option>
          <option value='Spanish'>Spanish</option>
          <option value='French'>French</option>
        </select>
      </form>

        </div>
    );
    }

export default HtmlForms;