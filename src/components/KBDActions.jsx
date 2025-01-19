import React, { useMemo } from 'react'

const KBDActions = () => {
    const actions = useMemo(() => [
        {
            id: "blog",
            name: "Blog",
            shortcut: ["b"],
            keywords: "writing words",
            perform: () => (window.location.pathname = "blog"),
        },
        {
            id: "contact",
            name: "Contact",
            shortcut: ["c"],
            keywords: "email",
            perform: () => (window.location.pathname = "contact"),
        },
    ], []);
    return { actions }
}

export default KBDActions