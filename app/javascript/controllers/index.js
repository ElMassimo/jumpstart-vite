import { Application } from "stimulus"

// Start the Stimulus application.
const application = Application.start()

// Controller files must be named *_controller.js.
const controllers  = import.meta.globEager('./**/*_controller.js')

// Register all the controllers within this directory and all subdirectories.
Object.entries(controllers).forEach(([name, controllerModule]) => {
  const identifier = identifierForContextKey(name)
  application.register(identifier, controllerModule.default)
})

// Extracted from @stimulus/webpack-helpers
function identifierForContextKey(key) {
  const logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1]
  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--")
  }
}
