/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = class IonCore {
  initialize() {
    // Whenever the addon icon is clicked, open the control page.
    chrome.browserAction.onClicked.addListener(this._openControlPanel);
    // After installing the addon, make sure to show the control page.
    chrome.runtime.onInstalled.addListener(this._openControlPanel);
  }

  _openControlPanel() {
    chrome.runtime.openOptionsPage();
  }
}
