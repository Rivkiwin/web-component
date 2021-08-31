class Modal extends HTMLElement {
    constructor() {
        super();
    }
    close()
    {
       let d= shadowRoot.getElementById('popUp').style.display=none;
        console.log("t",d);
    }
    connectedCallback() {
        this._render();
    }
    get img() {
        return this.getAttribute("title");
    }

    set img(value) {
        this.setAttribute("title", value);
    }


    _render() {
        const container = document.createElement("div");
        container.innerHTML = `
        <style>
       #popUp{
            position:fixed;
            justify-content:center;
            width:100vw;
            height: 100%;
            background-color: rgb(0 0 0 /   50%);
            z-index: 200;
            top: 0;
            display: flex;
           justify-content: center;
         }
        .popUpM{
         width: 50%;
         max-height:80vh;
         display: flex;
         justify-content: center;
         height: max-content;
         min-width:270px;
        }
        .popUpM img{
                border-radius: 8%;
              margin-top:8%;
                max-height:80vh;
        
        }
        .closebtn {
            top: 0;
            font-size: xxx-large;
            right: 3%;
            border: none;
            position: fixed;
            background: transparent;
            color: #f6ca0d;
        }
        </style>
        <div  id="popUp">
          <div class='popUpM'>
            <button class='closebtn' id='closebtn' >&times;</button>
            <img src="http://p15364-215-24142.s215.upress.link/wp-content/uploads/2021/08/שנה-טובה_פוסט.jpg">
            </img>
          </div>
        </div>`;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(container);
        shadowRoot.getElementById('closebtn').onclick = () => shadowRoot.getElementById('popUp').style.display='none';

    }
}
window.customElements.define("x-modal", Modal);
