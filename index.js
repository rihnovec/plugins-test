import 'pickmeup/css/pickmeup.css';
import pickmeup from 'pickmeup/js/pickmeup.js';

import './styles/main.css';

const datepicker = document.querySelector('.date');
const beginDate = document.querySelector('.begin-date');
const endDate = document.querySelector('.end-date');

pickmeup(datepicker, {
  format: 'Y-m-d',
  hide_on_select: true,
  mode: 'range'
});

if (beginDate && endDate) {
  datepicker.addEventListener('pickmeup-change', function (e) {
    beginDate.value = e.detail.formatted_date[0];
    endDate.value = e.detail.formatted_date[1];
  });
}