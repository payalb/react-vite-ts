npm create vite@latest
npm install
npm i -D eslint
npx eslint --init
npx install-peerdeps --dev eslint-config-airbnb 
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

npm i -D vitest ////search for any file with test in it.
npm i -D @testing-library/react @testing-library/jest-dom
npm i -D jsdom

npm i react-router-dom 
BrowserRouter: uses history api and state to manage diff pages. Have to redirect 404 to index.js
testing-library.com

   <Route path = "*" element = {<NotFound/>}></Route>  // if none path match 


Testing: MemoryRouter: give array of paths to load..
cypress: IT
vitest: Unit test

if assets needs to be bundled, run by loader ..minify/ : assets
if no processing needed: put it in public folder.