import React from 'react';
import Word from './office/word.js'
import Excel from './office/excel.js'
import Pp from './office/pp.js'
import Skype from './office/skype.js'
import Outlook from './office/outlook.js'
import ButtonMaker from '../../utilities/buttonMaker.js'

const Office = () => {
    const items = [
      {name: 'Word', slug: 'word', component:<Word />},
      {name: 'Excel', slug: 'excel', component:<Excel />},
      {name: 'Power Point', slug: 'pp', component:<Pp />},
      {name: 'Skype', slug: 'skype', component:<Skype />},
      {name: 'Outlook', slug: 'outlook', component:<Outlook />},
    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }

export default Office;
