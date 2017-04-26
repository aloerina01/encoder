import { h, app } from 'hyperapp';

let state = {
    escapeValue: '',
    encodeUrlValue: '',
    encodeUrlCompValue: '',
    test: 'helloworld'
};

const view = (state, actions) => 
        <section>
            <h1>encoding functions</h1>
            <textarea placeholder="type text..." type="text" onInput={e => {actions.encode(e.target.value)}}></textarea>
            <div>
                <p>escape():</p>
                <p>{ state.escapeValue }</p>
            </div>
        </section>
;

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
