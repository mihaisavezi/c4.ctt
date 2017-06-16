import { issues } from './issues';

let listItems = '';
issues
    .map((res, index) => listItems += `<li data-index="${index}" class="issue f6 f5-ns b dib ph3 ph5-ns pv3 pv4-ns mr3 mb3 hover-black hover-bg-white bg-animate no-underline white ba br-pill b--white-40 fw4">${res.issue}</li>`);

export const homepage = `
<div class="vh-100 dt w-100 tc bg-dark-gray white cover relative" style="background:  url(https://media.giphy.com/media/2pJfGles06wOk/giphy.gif) no-repeat center center fixed; ">
        <div class="absolute absolute--fill t0 b0 h-100 w-100 bg-black-60 z-0"></div>
        <section class="mw5-ns mw9-ns center pa3 z-1 relative">
            <h1 class="tc center f2 f1-m f-headline-l lh-title display ttu fw5 white measure-narrow mb2">What keeps you up at night ?</h1>
            <p class="tc f5 f4-l lh-copy measure-wide fw3 center">
                 Alege din lista de mai jos care este problema care te frământa cel mai tare. Ce te enerveaza cel mai tare in țara asta.
                Care este problema care te ține treaz noapte de noapte. Ce ai rezolva prima data dacă ai avea puterea sa
                o faci chiar acum.
            </p>
            <ul style="max-height: 20rem" class="list flex flex-wrap justify-center align-center items-center ph3 ph5-l pv4 mt3 mb3 vh-75 overflow-scroll js-problem-list">
                ${listItems}
            </ul>
            <div class="mt6 mb3 tc fixed left-0 right-0 margin center bottom-0 ">
                <a rel="nofollow" rel="noreferrer" class="f3 hover-black hover-bg-white bg-animate no-underline br2 ba ph5 pv3 mb2 dib white js-submit-items"
                    href="#0">Spune-ne</a>
            </div>
        </section>
    </div>
`;