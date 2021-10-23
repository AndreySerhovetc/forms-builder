import { Element } from './interfaces/element';

export const Elements: Element[] = [
  {
    id: 1,
    name: 'Button',
    style: {
      width: '100px',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#0f0f0f',
      backgroundColor: '#fff',
    },
  },

  {
    id: 2,
    name: 'Textarea',
    style: {
      width: '100%',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000',
      required: false,
      placeholder: 'Enter your text',
      label: 'Text Area',
    },
  },

  {
    id: 3,
    name: 'Input',
    style: {
      width: '100%',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000',
      required: true,
      placeholder: 'Enter your text',
      label: 'Text Field',
    },
  },

  {
    id: 4,
    name: 'Checkbox',
    style: {
      width: '20px',
      height: '20px',
      color: '#000',
    },
  },

  {
    id: 5,
    name: 'Select',
    style: {
      width: '100px',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000',
    },
  },
];
