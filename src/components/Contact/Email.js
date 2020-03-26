import React from 'react';
import { Email, Item} from 'react-html-email';

export default function InlineLink({name, message, email}) {
  return (
  <Email title='link'>
    <Item>
       You have a message from: {name}
    </Item>
      {message}
    <Item> 
      His email is: {email}
    </Item>
  </Email>
)};