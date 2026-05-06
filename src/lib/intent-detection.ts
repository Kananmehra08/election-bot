/**
 * KEYWORD-BASED INTENT DETECTION SYSTEM
 * =====================================
 * A simple rule-based NLP feature that detects user intent from their message.
 * 
 * This is NOT machine learning — it uses keyword matching to classify queries.
 * No training data or model files required.
 */

// Define intent types
export type Intent = 
  | "candidate_info" 
  | "voting_process" 
  | "election_results" 
  | "general_query";

// Keywords associated with each intent
const INTENT_KEYWORDS: Record<Intent, string[]> = {
  candidate_info: [
    "candidate",
    "who",
    "leader",
    "politician",
    "party",
    "symbol",
    "nomination",
    "nominated",
    "contestant",
  ],
  voting_process: [
    "vote",
    "voting",
    "process",
    "how",
    "steps",
    "register",
    "eligible",
    "evm",
    "vvpat",
    "ballot",
    "poll",
    "polling",
    "booth",
    "indelible",
    "silken",
  ],
  election_results: [
    "result",
    "results",
    "winner",
    "won",
    "win",
    "winning",
    "counting",
    "count",
    "announcement",
    "declared",
    "victory",
    "lose",
    "lost",
  ],
};

/**
 * Detects the intent of a user message using keyword matching.
 * 
 * @param userInput - The user's message (e.g., "How do I vote?")
 * @returns The detected intent as a string
 * 
 * @example
 * const intent = detectIntent("Who is the candidate?");
 * console.log(intent); // Output: "candidate_info"
 */
export function detectIntent(userInput: string): Intent {
  // Convert input to lowercase for case-insensitive matching
  const lowerInput = userInput.toLowerCase();

  // Split into words
  const words = lowerInput.split(/\s+/);

  // Count keyword matches for each intent
  const intentScores: Record<Intent, number> = {
    candidate_info: 0,
    voting_process: 0,
    election_results: 0,
    general_query: 0,
  };

  // Check each word against intent keywords
  words.forEach((word) => {
    // Remove punctuation from word
    const cleanWord = word.replace(/[.,!?;:]/g, "");

    Object.entries(INTENT_KEYWORDS).forEach(([intent, keywords]) => {
      if (keywords.includes(cleanWord)) {
        intentScores[intent as Intent]++;
      }
    });
  });

  // Find the intent with the highest score
  let highestIntent: Intent = "general_query";
  let highestScore = 0;

  Object.entries(intentScores).forEach(([intent, score]) => {
    if (score > highestScore && intent !== "general_query") {
      highestScore = score;
      highestIntent = intent as Intent;
    }
  });

  // If no keywords matched, return general_query
  return highestIntent;
}

/**
 * A utility function to log intent for debugging/monitoring.
 * Useful in development and for understanding user patterns.
 * 
 * @param userInput - The user's message
 * @param intent - The detected intent
 */
export function logIntentDetection(
  userInput: string,
  intent: Intent
): void {
  console.log(
    `[Intent Detection] User: "${userInput.substring(0, 50)}..." | Intent: ${intent}`
  );
}

/**
 * SYNTHETIC DATASET EXAMPLES (For Explanation Only)
 * These are sample user queries showing how the intent detection works.
 * These are NOT used by the function — just for documentation.
 */
export const SYNTHETIC_EXAMPLES = [
  // Candidate Info Examples
  { query: "Who are the candidates in my area?", intent: "candidate_info" },
  { query: "Tell me about the party symbols.", intent: "candidate_info" },
  { query: "Who nominated these leaders?", intent: "candidate_info" },

  // Voting Process Examples
  { query: "How do I vote in the elections?", intent: "voting_process" },
  { query: "What are the steps to register as a voter?", intent: "voting_process" },
  { query: "Explain how EVM and VVPAT work.", intent: "voting_process" },

  // Election Results Examples
  { query: "When will the results be announced?", intent: "election_results" },
  { query: "Who won the last election?", intent: "election_results" },
  { query: "How are votes counted?", intent: "election_results" },

  // General Query Examples
  { query: "What's the weather today?", intent: "general_query" },
  { query: "Tell me a joke.", intent: "general_query" },
];
