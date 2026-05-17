import { expect, test } from '@playwright/test';

let form;

async function submitScore(page, score) {
  await form.getByTestId(`score-${score}`).click();
  await form.getByTestId('submit-score-btn').click();
}
test.describe('NPS', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test.html');

    form = await page.locator('.simple-nps');

    await expect(form).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    await expect(form).toBeHidden();
  });

  test('can close', async ({ page }) => {
    await form.getByTestId('close-btn').click();
  });

  test('can submit a score', async ({ page }) => {
    await submitScore(page, 10);

    const feedback = form.getByTestId('follow-up');

    await expect(feedback).toBeVisible();

    await form.getByTestId('close-btn').click();
  });

  test('can submit feedback', async ({ page }) => {
    await submitScore(page, 10);

    const feedback = form.getByTestId('follow-up-textarea');

    await feedback.fill('Great product!');

    await form.getByTestId('follow-up-submit-btn').click();
  });
});