import 'bootstrap'
import 'data-confirm-modal'

$(document).on('turbo:load', () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
