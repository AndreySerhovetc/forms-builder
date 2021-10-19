import { Element } from "./Element"

export const Elements: Element[] = [
  {
    id: 1,
    name: 'button',
    style: {
      width: '100px',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#0f0f0f',
      backgroundColor: '#fff'
    }
  },

  {
    id: 2,
    name: 'textarea',
    style: {
      width: '100%',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000',
      required: false,
      placeholder: 'Enter your text'
    }
  },

  {
    id: 3,
    name: 'input',
    style: {
      width: '100%',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000',
      required: false,
      placeholder: 'Enter your text',
      label: 'Text Field'
    }
  },

  {
    id: 4,
    name: 'checkbox',
    style: {
      width: '20px',
      height: '20px',
      color: '#000'
    }
  },

  {
    id: 5,
    name: 'select',
    style: {
      width: '100px',
      height: '50px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000',
    }
  }
]