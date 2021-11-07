import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: 'hi',
    message: `Hi RND, I am Fred. Let’s build your website together.`,
    trigger: 'namequestion'
  },
  {
    id: 'namequestion',
    message: 'First, please enter the name of your restaurant, hotel or business.',
    trigger: 'businessname'
  },
  {
    id: 'businessname',
    user: true,
    validator: value => {
      if (value && value.length > 0) {
        return true;
      }
      return 'Please enter a valid business name.';
    },
    trigger: 'businessname2'
  },
  {
    id: 'businessname2',
    user: true,
    validator: value => {
      if (value && value.length > 0) {
        return true;
      }
      return 'Please enter a valid business name.';
    },
    trigger: 'end'
  },
  {
    id: 'end',
    message:
      'That’s it! We’re done 🎉 Now go and spread the word about your new amazing website. If you want to adapt any of the contents, simply come back to me and we’ll change them together.',
    end: true
  }
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot
        steps={steps}
        handleEnd={value => {
          console.log(value);
        }}
        onChange={value => {
          console.log('HEY');
          console.log(value);
        }}
      />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
