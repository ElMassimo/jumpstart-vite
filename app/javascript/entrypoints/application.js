// This file is automatically compiled by Vite, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import jQuery from 'jquery'
import Rails from '@rails/ujs'
import ActiveStorage from '@rails/activestorage'
import LocalTime from 'local-time'

window.$ = jQuery
window.Rails = Rails
Rails.start()
ActiveStorage.start()
LocalTime.start()

import '@hotwired/turbo-rails'
import 'channels'
import 'trix'
import '@rails/actiontext'

// Bootstrap
import 'bootstrap'
import 'data-confirm-modal'

$(document).on('turbo:load', () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
