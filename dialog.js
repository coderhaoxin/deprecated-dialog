(function(win) {
  'use strict';

  if (!win.dialog) {
    win.dialog = dialog;
  }

  function dialog(q) {
    var node = document.getElementById(q);
    var content = node.children && node.children[0];
    return new Dialog(node, content);
  }

  function Dialog(node, content) {
    this.node = node;
    this.content = content;
  }

  Dialog.prototype.show = function() {
    this.node.style.display = 'block';
    this.node.classList.remove('hide');
    this.node.classList.add('show');

    this.content.classList.remove('close');
    this.content.classList.add('open');

    this.content.classList.remove('hide');
    this.content.classList.add('show');
  };

  Dialog.prototype.hide = function() {
    this.node.classList.remove('show');
    this.node.classList.add('hide');

    this.content.classList.remove('show');
    this.content.classList.add('hide');

    var self = this;
    setTimeout(function() {
      self.content.classList.remove('open');
      self.content.classList.add('close');
      self.node.style.display = 'none';
    }, 300);
  };
}(window));
