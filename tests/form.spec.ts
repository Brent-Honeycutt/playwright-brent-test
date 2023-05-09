import { test, expect } from '@playwright/test';
import { click } from '@testing-library/user-event/dist/click';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');
});

const VALID_USERNAMES = [
  'John Doe',
  'Jane Doe',
  'Foo Bar'
];

const VALID_EMAILS = [
  'john.doe@example.com',
  'jane.doe@example.com',
  'foo.bar@example.com'
];

const VALID_PASSWORDS = [
  'password123',
  '123password',
  'foo123password123bar'
];

test('allows a user to register with valid credentials and logs the submitted data', async ({ page }) => {

  // Enter valid registration details
  await page.getByTestId('name-input').fill(VALID_USERNAMES[0]);
  await page.getByTestId('email-input').fill(VALID_EMAILS[0]);
  await page.getByTestId('password-input').fill(VALID_PASSWORDS[0]);

  // Be ready to grab any console log items and add them to the consoleLogs array
  const consoleLogs = [];
  page.on("console", msg => {
    console.log(msg.text());
    consoleLogs.push(msg.text());
  })

  // Click the submit button
  await page.getByTestId('register-button').click();

  // Expect the consoleLogs array to contain the user, email, and password used in registration
  await expect(consoleLogs).toContain('Name: ' + [VALID_USERNAMES[0]] + '\nEmail: ' + [VALID_EMAILS[0]] + '\nPassword: ' + [VALID_PASSWORDS[0]]);
});

