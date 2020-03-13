import React from 'react';
import { Email, Item, A} from 'react-html-email';

export default function InlineLink({name, feedback, children}) {
  return (
  <Email title='link'>
    <Item>
       Hello {name}
      Your message is: {feedback}
    </Item>
    <Item>
      {children}
    </Item>
  </Email>
)};