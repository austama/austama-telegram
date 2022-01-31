var root = document.body;

var send = function(url, body) {
    return m.request({
        method: 'POST',
        url: url,
        body: JSON.stringify(body)
    })
};

var Header = {
    'view': (vnode) => { 
        return m("div", [
            m("header", [
                m("div", { class: 'pure-menu pure-menu-horizontal'}, [
                    m(m.route.Link, { class: "pure-menu-heading pure-menu-link pure-menu-selected" , href: '#'}, "Austama Project"),
                    m("ul", { class: 'pure-menu-list'}, [
                        m("li", {class: "pure-menu-item", onclick: (i) => { i.className += " pure-menu-selected" } },
                          m(m.route.Link, {class: "pure-menu-link", href: '/telegram/sign_in'}, "sign in")),
                        m("li", {class: "pure-menu-item", onclick: (i) => { i.className += " pure-menu-selected" }},
                          m(m.route.Link, {class: "pure-menu-link", href: '/telegram/sign_out'}, "sign out")),
                        m("li", {class: "pure-menu-item", onclick: (i) => { i.className += " pure-menu-selected" }},
                          m(m.route.Link, {class: "pure-menu-link", href: '/telegram/settings'}, "settings")),
                        m("li", {class: "pure-menu-item", onclick: (i) => { i.className += " pure-menu-selected" }},
                          m(m.route.Link, {class: "pure-menu-link", href: '/telegram/messages'}, "messages"))
                    ])
                ])
            ]),
       vnode])
    }
}

var Footer = {
    'view': () => {
    }
}

var Telegram = {
    'view': () => {
        return Header.view(
            m("main", [
                m("p", "This is a work in progress project...")
            ])
        )
    }
};

// Add a new session
var TelegramSignIn = {
    'state': {
        name: null,
        api_id: null,
        api_hash: null,
        phone: null
    },
    'view': () => {
        return Header.view(
            m("main", [
                m("h1", {
                    class: "title"
                }),
                m("form", [
                    m("li", [
                        m("ul", [m("label", {}, "name: "), m("input", { oninput: (i) => { TelegramSignIn.state.name = i.target.value } } )]),
                        m("ul", [m("label", {}, "api_id: "), m("input", { oninput: (i) => { TelegramSignIn.state.api_id = i.target.value } } )]),
                        m("ul", [m("label", {}, "api_hash: "), m("input", { oninput: (i) => { TelegramSignIn.state.api_hash = i.target.value } })]),
                        m("ul", [m("label", {}, "phone: "), m("input", { oninput: (i) => { TelegramSignIn.state.phone = i.target.value } })]),
                    ]),
                    m("button", { onclick: () => { send('/telegram/sign_in', TelegramSignIn.state) } }, "send")
                ])
            ])
        )
    }
};

// Get the list of current active session as table
var TelegramSignOut = {
    'state': {
        name: null
    },
    'view': () => {
        return Header.view(
            m("main", [])
        )
    }
};

// Print current telegram settings
var TelegramSettings = {
    'view': () => {
        return Header.view(
            m("main", [])
        )
    }
};

// List managed messages
var TelegramMessages = {
    'view': () => {
        return Header.view(
            m("main", [
                m("table", { class: "pure-table" }, [
                    m("thead",
                      m("tr", [
                          m("td", "id"),
                          m("td", "create_date"),
                          m("td", "publish_date"),
                          m("td", "delete_date"),
                      ])),
                    m("tbody",
                      m("tr", [
                          m("td", "test"),
                          m("td", "test"),
                          m("td", "test"),
                          m("td", "test"),
                      ]))
                ])
            ])
        )
    }
};

m.route(root, '/', {
    '/': Telegram,
    '/telegram': Telegram,
    '/telegram/sign_in': TelegramSignIn,
    '/telegram/sign_out': TelegramSignOut,
    '/telegram/settings': TelegramSettings,
    '/telegram/messages': TelegramMessages,
    '/telegram/messaegs/:id': TelegramMessages
});

