define({
    identifier: "com.pilotmoon.popclip.extension.lowercase",
    name: "Lowercase",
    icon: "text:[[ab]]",
    code: (selection) => {
        popclip.pasteText(selection.text.toLowerCase())
    }
})