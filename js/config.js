        document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('header');
            const aboutMeSection = document.querySelector('#about-me');

            if (header && aboutMeSection) {
                const aboutMeOffsetTop = aboutMeSection.offsetTop;

                window.addEventListener('scroll', () => {
                    if (window.scrollY >= aboutMeOffsetTop) {
                        header.classList.add('nav-scrolled');
                    } else {
                        header.classList.remove('nav-scrolled');
                    }
                });
            }
        });