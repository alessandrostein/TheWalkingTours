/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

var Turbolinks = require("turbolinks");
Turbolinks.start();

import Rails from "rails-ujs";
Rails.start();

import {
  Application
} from "stimulus";
import {
  definitionsFromContext
} from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("controllers", true, /.js$/);
application.load(definitionsFromContext(context));

// Utility function to require all files in a directory...
function requireAll(r) {
  r.keys().forEach(r);
}

// Require everything in our modules directory
requireAll(require.context("modules/", true, /\.js$/));

// Add images to the manifest
requireAll(require.context("images/", true, /\.(svg|png)$/));

// Import our app CSS
import "css/application";
