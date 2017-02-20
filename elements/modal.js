const html = require('choo/html')
const sf = require('sheetify')

const prefix = sf`
  :host {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 500;
  }
  
  :host > .inner {
    max-width: 800px;
    background: #fff;
    color: #404040;
    padding: 30px;
    border-radius: 3px;
    border: 10px solid #404040;    
    overflow: scroll;
    z-index: 501;
    animation: move 1s 1 ease;
    animation-delay: 10;    
  }
  
  :host > .inner > .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  
  :host > .inner .img {
    max-width: 50%;
  }
`

function modalView (content) {
  return html`
    <div class="${prefix}">
      <div class="inner">${content}</div>
    </div>
  `
}

module.exports = modalView