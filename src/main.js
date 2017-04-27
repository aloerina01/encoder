import { h, app } from 'hyperapp';

let state = {
    escapeValue: '',
    encodeUrlValue: '',
    encodeUrlCompValue: '',
    test: 'helloworld'
};

const view = (state, actions) => {
    return (
        <section style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h1 style={{ color: "#ddd", textShadow:"1px 1px 10px black" }}># encoding functions</h1>
            <input placeholder="type text..." 
                   type="text" 
                   onInput={e => {actions.encode(e.target.value)}}
                   style={{
                       width:"100%",
                       maxWidth: "360px",
                       boxSizing: "border-box",
                       padding: "0 6px",
                       height: "46px",
                       fontSize: "20px",
                       margin: "0 0 36px 0",
                       outline: "none",
                       backgroundColor: "#fff",
                       opacity: ".8"
                   }}>
            </input>
            <div style={{ padding: "16px 8px" }}>
                <h4 style={{ margin: "8px 0", color: "#ddd", textShadow:"1px 1px 10px black" }}>## escape():</h4>
                <p style={{ minHeight: "24px", color: "#fff", margin: "0", wordWrap: "break-word", wordBreak: "break-all", textShadow:"1px 1px 10px black" }}>{ state.escapeValue }</p>
            </div>
            <div class="result" style={{ padding: "16px 8px" }}>
                <h4 style={{ margin: "8px 0", color: "#ddd", textShadow:"1px 1px 10px black" }}>## encodeURI():</h4>
                <p style={{ minHeight: "24px", color: "#fff", margin: "0", wordWrap: "break-word", wordBreak: "break-all", textShadow:"1px 1px 10px black" }}>{ state.encodeUrlValue }</p>
            </div>
            <div class="result" style={{ padding: "16px 8px" }}>
                <h4 style={{ margin: "8px 0", color: "#ddd", textShadow:"1px 1px 10px black" }}>## encodeURIComponent():</h4>
                <p style={{ minHeight: "24px", color: "#fff", margin: "0", wordWrap: "break-word", wordBreak: "break-all", textShadow:"1px 1px 10px black" }}>{ state.encodeUrlCompValue }</p>
            </div>
        </section>
    );
};

const actions = {
    encode: (state, target) => {
        state = Object.assign(state, {
            escapeValue: escape(target),
            encodeUrlValue: encodeURI(target),
            encodeUrlCompValue: encodeURIComponent(target)
        })
        console.log(state);
        return state;
    }
};

app({ state, view, actions });
