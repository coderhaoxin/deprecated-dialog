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
    this.duration = 400;
    this.content = content;
  }

  Dialog.prototype.show = function() {
    this.node.style.display = 'block';
    this.removeClass('hide');
    this.addClass('show');

    this.removeClass('close');
    this.addClass('open');

  };

  Dialog.prototype.hide = function() {
    this.removeClass('show');
    this.addClass('hide');

    var self = this;
    setTimeout(function() {
      self.removeClass('open');
      self.addClass('close');
      self.node.style.display = 'none';
    }, this.duration);
  };

  Dialog.prototype.addClass = function(name) {
    this.node.classList.add(name);
    this.content.classList.add(name);
  };

  Dialog.prototype.removeClass = function(name) {
    this.node.classList.remove(name);
    this.content.classList.remove(name);
  };
}(window));
