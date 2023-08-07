const checkTextInputsjsjs = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key.match(/[^a-z 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
}

export default checkTextInputsjsjs;