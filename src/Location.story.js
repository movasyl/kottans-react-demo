import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import './index.css';
import Location from './Location';

storiesOf('Location', module)
  .add('default state', () => (
    <Location planet={"Test"} />
  ))
  .add('on Kashyyk', () => (
    <div onClick={action('test')}>
      <Location planet={"Kashyyk"} />
    </div>
  ))
