import { fireEvent, getByText, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fail } from 'assert';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

describe('index.html', () => {
    beforeEach(() => {
        // Constructing a new JSDOM with this option is the key
        // to getting the code in the script tag to execute.
        // This is indeed dangerous and should only be done with trusted content.
        // https://github.com/jsdom/jsdom#executing-scripts
        dom = new JSDOM(html, { runScripts: 'dangerously' });
        container = dom.window.document.body;
    })

    it('renders with an external stylesheet', () => {
        const cssLinkTag = dom.window.document.head.querySelector('link[href="css/index.css"]');
        expect(cssLinkTag).toBeInTheDocument();
    });

    it('has a viewport tag', () => {
        const viewportTag = dom.window.document.head.querySelector('meta[content="width=device-width, initial-scale=1.0"]');
        expect(viewportTag).toBeInTheDocument();
    });
    
    it('renders a header title that links to home page', () => {
        const headerTitle = container.querySelector('h1').innerHTML;
        const headerTitleATag = container.querySelector('header a');
        const regex = /BLOOMTECH BAR AND GRILL/i;
        expect(headerTitle).toMatch(regex);
        expect(headerTitleATag.href.includes('index.html')).toEqual(true);
    });

    it('renders the correct four links in header nav', () => {
        const headerNavLinks = container.querySelector('header nav');
        let headerNavLinkTextArr = headerNavLinks.innerHTML.split(/<a /i);
        // shift is to get rid of initial index that splits before the a tag
        headerNavLinkTextArr.shift();

        expect(headerNavLinkTextArr.length).toBe(4);

        expect(getByText(headerNavLinks, /Menu/i)).toBeInTheDocument();
        expect(getByText(headerNavLinks, /Reservations/i)).toBeInTheDocument();
        expect(getByText(headerNavLinks, /Special Offers/i)).toBeInTheDocument();
        expect(getByText(headerNavLinks, /Contact/i)).toBeInTheDocument();
    });

    it('menu link correctly links to new page', async () => {
        const menuLink = container.querySelector('header nav a');
        expect(menuLink.href.includes('menu.html')).toEqual(true);
    });

    it('renders the correct three social media icons in header nav', () => {
        const headerNavLinks = container.querySelector('nav');

        let headerSMIconsArr = headerNavLinks.innerHTML.split(/<i /i);
        // shift is to get rid of initial index that splits before the i tag
        headerSMIconsArr.shift();
        expect(headerSMIconsArr.length).toBe(3);

        for (let i = 0; i < headerSMIconsArr.length; i++) {
            const index = headerSMIconsArr[i];
            
            if(index.includes('facebook')) {
                expect(index.includes('facebook')).toBe(true);
            } else if(index.includes('twitter')) {
                expect(index.includes('twitter')).toBe(true);
            } else if(index.includes('instagram')) {
                expect(index.includes('instagram')).toBe(true);
            } else {
                fail(`Hit an unexpected icon tag`);
            }
        }
    });

    it('renders nine images in the OUR FOOD section', () => {
        const foodPics = container.querySelector('.gallery');

        let foodPicsArr = foodPics.innerHTML.split(/src=/i);
        // shift is to get rid of initial index that splits before the i tag
        foodPicsArr.shift();

        expect(foodPicsArr.length).toBe(9);
});

    it('renders an input and button in footer nav with appropriate text', () => {
        const footerInput = container.querySelector('footer input');
        const footerButton = container.querySelector('footer button');

        expect(footerInput).not.toBe(null || undefined);
        expect(footerInput.placeholder.includes('Email Address')).toBe(true);
        expect(footerButton).not.toBe(null || undefined);
        expect(footerButton.innerHTML.includes('Sign Up')).toBe(true);
    });

    it('renders the correct four links in footer nav', () => {
        const footerNavLinks = container.querySelector('footer nav');
        let footerNavLinkTextArr = footerNavLinks.innerHTML.split(/<a /i);
        // shift is to get rid of initial index that splits before the a tag
        footerNavLinkTextArr.shift();

        expect(footerNavLinkTextArr.length).toBe(4);

        expect(getByText(footerNavLinks, /Menu/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /Reservations/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /Special Offers/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /Contact/i)).toBeInTheDocument();
    });

    it('footer menu link correctly links to new page', async () => {
        const menuLink = container.querySelector('footer nav a');
        expect(menuLink.href.includes('menu.html')).toEqual(true);
    });
});
