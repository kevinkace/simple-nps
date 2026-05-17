<script lang="ts">
  import { fade } from 'svelte/transition';

  const { gtag } = window as any;

  const { config : userConfig } = $props();

  type FormState = 'pre' | 'form' | 'follow-up' | 'thank-you' | 'done';

  const defaultConfig = {
    gaId: null,
    i18n: {
      en: {
        intro: "How likely are you to recommend us to a friend or colleague?",
        notLikely: "Not at all likely",
        extremelyLikely: "Extremely likely",
        submitBtn: "Submit",

        thankYou: "Thank you for your feedback!",

        followUp: "Could you tell us why?",
        followUpPlaceholder: "Your feedback helps us improve...",
        followUpSubmit: "Submit feedback",
        followUpSkip: "Skip",

        close: "Close"
      }
    },
    language: 'en',
    theme: {
      primaryColor: '#007bff',
      backgroundColor: '#ffffff',
      textColor: '#333333',
      borderRadius: '8px'
    },
    showFollowUp: true,
    delay : 1000,
    thankYouDuration: 1500
  };

  // svelte-ignore state_referenced_locally
  const config = { ...defaultConfig, ...userConfig };
  const strings = config.i18n[config.language] || config.i18n.en;

  let selectedScore = $state<number | null>(null);
  let formState = $state<FormState>("pre");

  let followUpText = $state('');

  // #region Event Handlers

  function selectScore(score : number) {
    selectedScore = score;
  }

  /**
   * Submit NPS score to Google Analytics and show follow-up question if enabled
   */
  function submitScore() {
    if (selectedScore === null) return;

    // Google Analytics tracking
    if (config.gaId && gtag) {
      gtag('event', 'nps_score', {
        'event_category': 'NPS',
        'event_label': 'Score',
        'value': selectedScore
      });
    }

    if (config.showFollowUp) {
      formState = "follow-up";
    } else {
      formState = "thank-you";
    }
  }

  /**
   * Submit follow-up feedback to Google Analytics and mark survey as submitted
   */
  function submitFollowUp() {
    if (config.gaId && gtag && followUpText.trim()) {
      gtag('event', 'nps_feedback', {
        'event_category': 'NPS',
        'event_label': 'Feedback',
        'custom_parameter': followUpText.substring(0, 100) // Limit feedback length
      });
    }

    formState = "thank-you";
  }

  function skipFollowUp() {
    formState = "thank-you";
  }

  /**
   * Get score category for styling (detractor, passive, promoter)
   */
  function getScoreCategory(score: number) {
    if (score <= 6) return 'detractor';
    if (score <= 8) return 'passive';
    return 'promoter';
  }

  // #endregion

  // remove after showing thank you message
  $effect(() => {
    if (formState === "thank-you") {
      setTimeout(() => {
        formState = "done";
      }, config.thankYouDuration);
    }
  });

  // delay before showing the NPS survey
  setTimeout(() => {
    formState = "form";
  }, config.delay);

</script>

{#if formState !== "pre" && formState !== "done"}
  <div
    class="simple-nps"
    style:--primary-color={config.theme.primaryColor}
    style:--bg-color={config.theme.backgroundColor}
    style:--text-color={config.theme.textColor}
    style:--border-radius={config.theme.borderRadius}
    transition:fade={{ duration: 300 }}
  >
    <button
      class="nps-close-btn"
      aria-label={strings.close}
      onclick={() => formState = "done"}
    >
      &times;
    </button>
    {#if formState === "form"}
      <div class="nps-content">
        <h3 class="nps-question">
          {strings.intro}
        </h3>

        <div class="nps-score-scale">
          {#each Array(11) as _, i}
            <button
              class="nps-score-button"
              class:nps-score-selected={selectedScore === i}
              data-score-category={getScoreCategory(i)}
              onclick={() => selectScore(i)}
            >
              {i}
            </button>
          {/each}
        </div>

        <div class="nps-scale-labels">
          <span class="nps-scale-label">
            {strings.notLikely}
          </span>
          <span class="nps-scale-label">
            {strings.extremelyLikely}
          </span>
        </div>

        {#if selectedScore !== null}
          <button
            class="nps-submit-btn"
            onclick={submitScore}
          >
            {strings.submitBtn}
          </button>
        {/if}
      </div>
    {:else if formState === "follow-up"}
      <div
        class="nps-content"
        data-testid="follow-up"
      >
        <h3 class="nps-question">
          {strings.followUp}
        </h3>

        <textarea
          id="nps-follow-up-textarea"
          bind:value={followUpText}
          class="nps-follow-up-textarea"
          placeholder={strings.followUpPlaceholder}
          rows="3"
        ></textarea>

        <button
          class="nps-submit-btn"
          type="submit"
          onclick={submitFollowUp}
        >
          {strings.followUpSubmit}
        </button>

        <button
          class="nps-submit-btn"
          type="button"
          onclick={skipFollowUp}
        >
          {strings.followUpSkip}
        </button>
      </div>
    {:else if formState === "thank-you"}
      <div class="nps-content nps-thank-you">
        <h3 class="nps-question">
          {strings.thankYou}
        </h3>
      </div>
    {/if}
  </div>
{/if}

<style>
  .simple-nps {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    position: fixed;
    bottom: 20px;
    right: 20px;
    max-width: 400px;
    padding: 24px;
    background: var(--bg-color);
    border: 1px solid #e1e5e9;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    color: var(--text-color);
    z-index: 9999;

    min-width: 20em;
  }

  .nps-close-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 1em;
    aspect-ratio: 1;

    font-size: 25px;
    color: var(--text-color);
    line-height: 1;

    background: transparent;

    border: none;
    border-radius: 16%;

    cursor: pointer;

    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }

  .nps-content {
    text-align: center;
  }

  .nps-question {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 20px 0;
    line-height: 1.4;
  }

  .nps-score-scale {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    margin-bottom: 12px;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0.1em 0;
  }

  .nps-score-button {
    width: 32px;
    height: 32px;
    border: 2px solid #d1d5db;
    background: white;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: var(--primary-color);
      transform: translateY(-1px);
    }

    &.nps-score-selected {
      border-color: var(--primary-color);
      background: var(--primary-color);
      color: white;

      &[data-score-category="detractor"] {
        background: #ef4444;
        border-color: #ef4444;
      }

      &[data-score-category="passive"] {
        background: #f59e0b;
        border-color: #f59e0b;
      }

      &[data-score-category="promoter"] {
        background: #10b981;
        border-color: #10b981;
      }
    }
  }

  .nps-scale-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #6b7280;
  }

  .nps-scale-label {
    max-width: 80px;
    text-align: center;
  }

  .nps-submit-btn {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
  }

  .nps-follow-up-textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    margin-bottom: 16px;
    resize: vertical;
    min-height: 80px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }


  .nps-thank-you {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    .simple-nps {
      top: 10px;
      right: 10px;
      left: 10px;
      max-width: none;
      padding: 16px;
    }

    .nps-score-scale {
      gap: 2px;
    }

    .nps-score-button {
      width: 28px;
      height: 28px;
      font-size: 12px;
      flex-shrink: 0;
    }

    .nps-scale-labels {
      font-size: 11px;
    }

    .nps-scale-label {
      max-width: 60px;
    }
  }
</style>
