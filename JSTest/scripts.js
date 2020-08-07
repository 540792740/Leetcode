(
    () => {
        const nav = document.querySelector('nav');
        const paragraph = document.querySelector('p');
        const placeholder = paragraph.innerText;

        const onClick = (event) => {
            // Something is wrong here

            if (event.target === nav) {
                return;
            }

            location.hash = '';
            location.hash = event.target.innerHTML
        }

        const onHashChange = () => {
            const hash = document.createElement('span');
            hash.innerHTML = location.hash;
            paragraph.innerHTML = ''
            paragraph.append(hash)
            // Your Codes below
        }

        window.addEventListener('click', onClick, false);
        window.addEventListener('hashchange', onHashChange, false);
    }
)();
