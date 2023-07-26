import React from 'react';

const HtmlForms = () =>{
  const attributes=[
    {name:'action', tags:['form',''], notes:''},
    {name:'method', tags:['form',''], notes:''},
    {name:'id', tags:['input',''], notes:''},
    {name:'for', tags:['label',''], notes:''},
    {name:'name', tags:['',''], notes:''},
    {name:'type', tags:['input',''], notes:''},
    {name:'value', tags:['',''], notes:''},
    {name:'checked', tags:['',''], notes:''},
    {name:'placeholder', tags:['',''], notes:''},
    {name:'min', tags:['',''], notes:''},
    {name:'max', tags:['',''], notes:''},
    {name:'minlength', tags:['',''], notes:''},
    {name:'maxlength', tags:['',''], notes:''},
    {name:'rows', tags:['',''], notes:''},
    {name:'columns', tags:['',''], notes:''},
    {name:'step', tags:['',''], notes:''},
    {name:'target', tags:['',''], notes:''},
    {name:'multiple', tags:['',''], notes:''},
    {name:'required', tags:['',''], notes:''},

  ]
  const syntax=[
    {input:'form', lines:['','',], notes:['','']},
    {input:'button', lines:['','',], notes:['','']},
    {input:'submit', lines:['','',], notes:['','']},
    {input:'checkbox', lines:['','',], notes:['','']},
    {input:'radio', lines:['','',], notes:['','']},
    {input:'select', lines:['','',], notes:['','']},
    {input:'range', lines:['','',], notes:['','']},
    {input:'textarea', lines:['','',], notes:['','']},
    {input:'month', lines:['','',], notes:['','']},
    {input:'time', lines:['','',], notes:['','']},
    {input:'email', lines:['','',], notes:['','']},
    {input:'password', lines:['','',], notes:['','']},
    {input:'text', lines:['','',], notes:['','']},
    {input:'number', lines:['','',], notes:['','']},

  ]
    return(
        <div>
            <h1>Forms</h1>
            <p>A form is a wrapper that will send all the information within it as an HTML request to a specific URL</p>

            <hr/>
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