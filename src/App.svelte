<script>
  export let config = {};

  // Default configuration
  const defaultConfig = {
    gaId: null,
    i18n: {
      en: {
        intro: "How likely are you to recommend us to a friend or colleague?",
        notLikely: "Not at all likely",
        extremelyLikely: "Extremely likely",
        submitBtn: "Submit",
        thankYou: "Thank you for your feedback!",
        followUp: "Could you tell us why?"
      }
    },
    language: 'en',
    theme: {
      primaryColor: '#007bff',
      backgroundColor: '#ffffff',
      textColor: '#333333',
      borderRadius: '8px'
    },
    showFollowUp: true
  };

  // Merge user config with defaults
  const mergedConfig = { ...defaultConfig, ...config };
  const strings = mergedConfig.i18n[mergedConfig.language] || mergedConfig.i18n.en;

  let selectedScore = null;
  let isSubmitted = false;
  let showFollowUp = false;
  let followUpText = '';

  function selectScore(score) {
    selectedScore = score;
  }

  function submitScore() {
    if (selectedScore === null) return;

    // Google Analytics tracking
    if (mergedConfig.gaId && window.gtag) {
      window.gtag('event', 'nps_score', {
        'event_category': 'NPS',
        'event_label': 'Score',
        'value': selectedScore
      });
    }

    if (mergedConfig.showFollowUp) {
      showFollowUp = true;
    } else {
      isSubmitted = true;
    }
  }

  function submitFollowUp() {
    // Google Analytics tracking for follow-up
    if (mergedConfig.gaId && window.gtag && followUpText.trim()) {
      window.gtag('event', 'nps_feedback', {
        'event_category': 'NPS',
        'event_label': 'Feedback',
        'custom_parameter': followUpText.substring(0, 100) // Limit feedback length
      });
    }

    isSubmitted = true;
  }

  function getScoreCategory(score) {
    if (score <= 6) return 'detractor';
    if (score <= 8) return 'passive';
    return 'promoter';
  }
</script>

<div class="nps" style="--primary-color: {mergedConfig.theme.primaryColor}; --bg-color: {mergedConfig.theme.backgroundColor}; --text-color: {mergedConfig.theme.textColor}; --border-radius: {mergedConfig.theme.borderRadius}">
  {#if !isSubmitted && !showFollowUp}
    <div class="nps-content">
      <h3 class="nps-question">{strings.intro}</h3>

      <div class="score-scale">
        {#each Array(11) as _, i}
          <button
            class="score-button {selectedScore === i ? 'selected' : ''} {selectedScore === i ? getScoreCategory(i) : ''}"
            on:click={() => selectScore(i)}
          >
            {i}
          </button>
        {/each}
      </div>

      <div class="scale-labels">
        <span class="scale-label">{strings.notLikely}</span>
        <span class="scale-label">{strings.extremelyLikely}</span>
      </div>

      {#if selectedScore !== null}
        <button class="submit-btn" on:click={submitScore}>
          {strings.submitBtn}
        </button>
      {/if}
    </div>
  {:else if showFollowUp}
    <div class="nps-content">
      <h3 class="nps-question">{strings.followUp}</h3>
      <textarea
        bind:value={followUpText}
        class="follow-up-textarea"
        placeholder="Your feedback helps us improve..."
        rows="3"
      ></textarea>
      <button class="submit-btn" on:click={submitFollowUp}>
        {strings.submitBtn}
      </button>
    </div>
  {:else}
    <div class="nps-content thank-you">
      <h3 class="nps-question">{strings.thankYou}</h3>
    </div>
  {/if}
</div>

<style>
  .nps {
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

  .score-scale {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    margin-bottom: 12px;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .score-button {
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
  }

  .score-button:hover {
    border-color: var(--primary-color);
    transform: translateY(-1px);
  }

  .score-button.selected {
    border-color: var(--primary-color);
    background: var(--primary-color);
    color: white;
  }

  .score-button.selected.detractor {
    background: #ef4444;
    border-color: #ef4444;
  }

  .score-button.selected.passive {
    background: #f59e0b;
    border-color: #f59e0b;
  }

  .score-button.selected.promoter {
    background: #10b981;
    border-color: #10b981;
  }

  .scale-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 20px;
  }

  .scale-label {
    max-width: 80px;
    text-align: center;
  }

  .submit-btn {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .submit-btn:hover {
    opacity: 0.9;
  }

  .follow-up-textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    margin-bottom: 16px;
    resize: vertical;
    min-height: 80px;
    box-sizing: border-box;
  }

  .follow-up-textarea:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .thank-you {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    .nps {
      top: 10px;
      right: 10px;
      left: 10px;
      max-width: none;
      padding: 16px;
    }

    .score-scale {
      gap: 2px;
    }

    .score-button {
      width: 28px;
      height: 28px;
      font-size: 12px;
      flex-shrink: 0;
    }

    .scale-labels {
      font-size: 11px;
    }

    .scale-label {
      max-width: 60px;
    }
  }
</style>
