import { Locator, test as base, expect } from '@playwright/test';

// Create reusable fixture for the number field locators
type calculatorFixtures = {
    num1Locator: Locator;
    num2Locator: Locator;
};

const test = base.extend<calculatorFixtures>({
    num1: async ({ page }, use) => {
        const num1Locator = page.locator('#num1');

        await use(num1Locator);
    },
    num2: async ({ page }, use) => {
        const num2Locator = page.locator('#num2');

        await use(num2Locator);
    },
});

test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:3000/');
});

test('can input numbers in the fields', async ({ page, num1, num2 }) => {

    const testNumber = '1234567890'

    // Enter "1234567890" in both fields
    await num1.fill(testNumber);
    await num2.fill(testNumber);
    
    // Verify that "1234567890" in the value of both fields
    await expect(num1).toHaveValue(testNumber)
    await expect(num2).toHaveValue(testNumber)
});

test('can NOT input letters, symbols, or emoji in the fields', async ({ page, num1, num2 }) => {
    
    const testString = 'abyz&^~)}?/😎'

    // Enter "abyz&^~)}?/😎" in both fields
    await num1.type(testString);
    await num2.type(testString);

    // Verify both fields remain blank, disallowing the characters
    await expect(num1).toBeEmpty
    await expect(num2).toBeEmpty
});

test('performs addition correctly', async ({ page, num1, num2 }) => {

    // Enter values into number fields
    await num1.type('2');
    await num2.type('7');

    // Click the "+" button to add the numbers
    await page.getByRole('button', {name: '+'}).click();

    // Verify that the result is correct
    await expect(page.getByTestId('calculator-result')).toHaveText('Result: 9');
});

test('performs subtraction correctly', async ({ page, num1, num2 }) => {

    // Enter values into number fields
    await num1.type('10');
    await num2.type('7');

    // Click the "-" button to subtract the numbers
    await page.getByRole('button', {name: '-'}).click();

    // Verify that the result is correct
    await expect(page.getByTestId('calculator-result')).toHaveText('Result: 3');
});

test('performs multiplication correctly', async ({ page, num1, num2 }) => {

    // Enter values into number fields
    await num1.type('10');
    await num2.type('7');

    // Click the "*" button to multiply the numbers
    await page.getByRole('button', {name: '*'}).click();

    // Verify that the result is correct
    await expect(page.getByTestId('calculator-result')).toHaveText('Result: 70');
});

test('performs division correctly', async ({ page, num1, num2 }) => {

    // Enter values into number fields
    await num1.type('9258');
    await num2.type('3');

    // Click the "-" button to divide the numbers
    await page.getByRole('button', {name: '/'}).click();

    // Verify that the result is correct
    await expect(page.getByTestId('calculator-result')).toHaveText('Result: 3086');
});


