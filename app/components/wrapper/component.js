import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  actions: {
    scroll(e) {
      if(e.target.scrollTop > e.target.scrollHeight / 4) {
        this.next();
      }
    }
  }
});
