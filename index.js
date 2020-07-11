'use strict';

function createHandlers() {
  $('.shopping-item-delete').on('click', event =>{
    event.preventDefault();
    $(event.target).closest('li').remove();
  });
  $('#js-shopping-list-form').on('submit', event =>{
    event.preventDefault();
    let userEntry = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${userEntry}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
  })
  /*create a click handler for the check button. Find the closest shopping item class. use togggle-class to apply shoppin-item__checked*/
}
$(createHandlers);