import * as ActiveStorage from '@rails/activestorage'
import LocalTime from 'local-time'
import '@hotwired/turbo-rails'
import 'trix'
import '@rails/actiontext'
import '~/channels/index.js'
import '~/controllers/index.js'

ActiveStorage.start()
LocalTime.start()
