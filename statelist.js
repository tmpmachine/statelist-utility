;(function() {

    let stateList = (function() {

    let SELF = {};
    let proto = 'prototype';
    let arrIndexOf = Array[proto].indexOf;

    function updateDataset(node) {
      node.dataset.state = node.NDIyNTUyNQ.join(' ');
      if (node.NDIyNTUyNQ.length == 0) {
        delete node.dataset.state;
      }
    }

    SELF.add = function() {
      let node = this.node;
      let tokens = arguments;
      let updated = false;
      for (let i = -1, len = tokens.length; ++i < len;) {
        let token = tokens[i] + '';
        if (arrIndexOf.call(node.NDIyNTUyNQ, token) === -1) {
          node.NDIyNTUyNQ.push(token);
          updated = true;
        }
      }
      if (updated) { updateDataset(node) }
    }

    SELF.remove = function() {
      let node = this.node;
      let tokens = arguments;
      let updated = false;
      let index;
      for (let i = -1, len = tokens.length; ++i < len;) {
        let token = tokens[i] + '';
        while ((index = arrIndexOf.call(node.NDIyNTUyNQ, token)) !== -1) {
          node.NDIyNTUyNQ.splice(index, 1);
          updated = true;
        }
      }
      if (updated) { updateDataset(node) }
    };

    SELF.contains = function(token) {
      let node = this.node;
      return arrIndexOf.call(node.NDIyNTUyNQ, token) !== -1;
    };

    SELF.toggle = function(token, force) {
      let node = this.node;
      token += '';  
      if (this.contains(token)) {
        return (force === true) || (this.remove(token), false);
      }
      return (force === false) ? false : (this.add(token), true);
    };

    return SELF;

  })();

  Object.defineProperty(Element.prototype, 'stateList', {
    get() {
      // state tokens, use unique name for visibility purpose 
      if (Object.is(this.NDIyNTUyNQ, undefined)) {
        this.NDIyNTUyNQ = [];
      }
      return {
        add: stateList.add,
        remove: stateList.remove,
        toggle: stateList.toggle,
        contains: stateList.contains,
        node: this,
      };
    }
  });
      
})();
