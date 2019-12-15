# UIAPIAuto_QATest
# Install node modules

```
npm install

```
## Repository Structure

```txt
/cypress
    /fixtures
        - test data
        - Page elements     
    /integration
        - test/spec files
    

```

## Running the tests

Cypress can be run through the terminal (headlessly) or via Chrome.

#### To run in the terminal
```
npx cypress run
```

#### To run in chrome via the Cypress app
```
npx cypress open
```

## Reporting

To generate a report using 'mochawesome' you'll need to run cypress headlessly with the following:

```
npx cypress run --reporter mochawesome
```





