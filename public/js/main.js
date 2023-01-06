// definition is global, will be fetched of course
import { definition } from './dataset.js'

const dom = {
    intro: document.querySelector('.intro'),
    item: document.querySelector('.item'),
    category: document.querySelector('.category'),
    summary: document.querySelector('.summary'),
    thank_you: document.querySelector('.thank_you'),
    navigation: document.querySelector('.navigation'),
}

async function getDefinition() {
    return definition;
}

// navigation variables
const report = [];
let currenItemIndex = 0;

function showSummary() {
    hideAll();

    // populate summary
    const summary = report.filter(item => item.item).reduce((acc, item) => {
        if (item.item.expected === item.item.reported) {
            acc.numOK++
        }
        else {
            acc.issues.push(item);
        }
        return acc;
    }, {
        numOK: 0,
        issues: []
    });

    dom.summary.querySelector('.correct').textContent = summary.numOK;

    const ul = dom.summary.querySelector('ul')

    ul.innerHTML = '';

    summary.issues.forEach(issue => {
        const li = document.createElement('li');

        li.textContent = `[${issue.mainCategory.name}] - [${issue.subCategory.name}] - ${issue.item.name}`;

        const ul2 = document.createElement('ul');

        const liReported = document.createElement('li');
        const liExpected = document.createElement('li');
        const liReason = document.createElement('li');

        liReported.textContent = `Expected: ${issue.item.expected}`
        liExpected.textContent = `Reported: ${issue.item.reported}`
        liReason.textContent = `Reason: ${issue.item.reason}`

        ul2.appendChild(liReported);
        ul2.appendChild(liExpected);
        ul2.appendChild(liReason);

        li.appendChild(ul2);
        ul.appendChild(li);
    });

    // TODO: prepare reports for all OK items

    dom.summary.style.display = '';
}

function promptForValue() {
    const item = report[currenItemIndex];

    dom.item.querySelector('.entry').style.display = '';
    dom.item.querySelector('.optimistic').style.display = 'none';
}

function reportDiscrepancyAndContinue() {
    const item = report[currenItemIndex];

    item.item.reported = Number(dom.item.querySelector('.entry .reported').value);
    item.item.reason = dom.item.querySelector('.entry .reason').value;

    showNext();
}

function showNext() {
    if (currenItemIndex >= report.length - 1) {
        showSummary();
    }
    else {
        showItem(currenItemIndex + 1)
    }
}

function showPrevious() {
    if (currenItemIndex > 0) {
        showItem(currenItemIndex - 1);
    }
}

function hideAll() {
    for (const page of Object.values(dom)) {
        page.style.display = 'none'
    }
}

function populateItem(item) {
    dom.item.querySelector('.main_category').textContent = item.mainCategory.name;
    dom.item.querySelector('.sub_category').textContent = item.subCategory.name;
    dom.item.querySelector('.item').textContent = item.item.name;
    dom.item.querySelector('.expected').textContent = item.item.expected;
    dom.item.querySelector('.last .value').textContent = item.item.last || '';
    dom.item.querySelector('.reason').textContent = item.item.reason || '';

    dom.item.querySelector('.is-success').classList.remove('is-focused')
    dom.item.querySelector('.is-warning').classList.remove('is-focused')

    // disgusting pluralization, but just for demo!
    dom.item.querySelector('.unit').textContent = (item.item.type === 'set' ?
        'Set' : 'No') + (item.item.expected > 1 ? 's' : '');

    dom.item.querySelector('.last .unit').textContent = (item.item.type === 'set' ?
        'Set' : 'No') + ((item.item.last || 0) > 1 ? 's' : '');

    dom.item.querySelector('.entry .expected').textContent = item.item.expected;
    dom.item.querySelector('.entry .reported').value = item.item.reported || item.item.last || '';
    dom.item.querySelector('.entry .reason').value = item.item.reason || '';
    dom.item.querySelector('.last').style.display = 'last' in item.item ? '' : 'none';
    dom.item.querySelector('.is-warning').style.display = 'last' in item.item ? '' : 'none';

    if (!('reported' in item.item) || item.item.reported === item.item.expected || item.item.reported === item.item.last) {
        dom.item.querySelector('.entry').style.display = 'none';
        dom.item.querySelector('.optimistic').style.display = '';
        if (item.item.reported === item.item.expected) {
            dom.item.querySelector('.is-success').classList.add('is-focused')
        }
        else if (item.item.reported === item.item.last) {
            dom.item.querySelector('.is-warning').classList.add('is-focused')
        }
    }
    else {
        dom.item.querySelector('.entry').style.display = '';
        dom.item.querySelector('.optimistic').style.display = 'none';
    }
}

function showItem(index = 0) {
    currenItemIndex = index;

    hideAll();

    dom.navigation.style.display = index > 0 ? '' : 'none'

    const toShow = report[index];

    if (toShow.item) {
        populateItem(toShow)
        dom.item.style.display = '';
    }
    else {
        dom.category.querySelector('h1').textContent = toShow.mainCategory.name;
        dom.category.querySelector('h2').textContent = toShow.subCategory.name;
        dom.category.style.display = '';
    }
}

function submitReport() {
    // Send report to server and show thank you page.
}

async function run() {
    hideAll();

    const definition = await getDefinition();

    // flatten the definition to build a report
    // cheating by assuming there are always 2 categories (main and sub)
    for (const mainCategory of definition) {
        for (const subCategory of mainCategory.items) {
            report.push({
                mainCategory,
                subCategory,
            })

            report.push(...subCategory.items.map(item => ({
                mainCategory,
                subCategory,
                item,
            })))
        }
    }

    // bind all UI elements
    dom.intro.querySelector('button').addEventListener('click', () => {
        showItem();
    })
    dom.category.querySelector('button').addEventListener('click', () => {
        showNext();
    })

    dom.item.querySelector('.optimistic .is-success').addEventListener('click', () => {
        report[currenItemIndex].item.reported = report[currenItemIndex].item.expected;
        showNext();
    })

    dom.item.querySelector('.optimistic .is-warning').addEventListener('click', () => {
        report[currenItemIndex].item.reported = report[currenItemIndex].item.last;
        showNext();
    })

    dom.item.querySelector('.optimistic .is-danger').addEventListener('click', () => {
        promptForValue(report[currenItemIndex]);
    })

    dom.item.querySelector('.entry button').addEventListener('click', () => {
        reportDiscrepancyAndContinue();
    })

    dom.navigation.querySelector('button').addEventListener('click', () => {
        showPrevious();
    })

    // show Intro
    dom.intro.style.display = '';
}

run();