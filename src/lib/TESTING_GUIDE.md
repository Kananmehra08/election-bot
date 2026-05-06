/**
 * SIMPLE TEST FILE - Demonstrating Intent Detection
 * Run this in browser console to see how the system works
 * 
 * Copy and paste these examples in your browser's Developer Tools Console (F12)
 */

// Import is handled automatically in chat.tsx
// But here's how you'd test each intent:

/* ============================================
   TEST EXAMPLES - Copy to Browser Console
   ============================================ */

// Test 1: Candidate Information Intent
const test1 = "Who are the candidates?";
// Expected: "candidate_info"

// Test 2: Voting Process Intent
const test2 = "How do I register and vote?";
// Expected: "voting_process"

// Test 3: Election Results Intent
const test3 = "When will the results be announced and who won?";
// Expected: "election_results"

// Test 4: General Query Intent
const test4 = "What's the weather today?";
// Expected: "general_query"

// Test 5: Multiple Keywords
const test5 = "Tell me about candidate symbols and voting process";
// Expected: "candidate_info" or "voting_process" (whichever has more keywords)

// Test 6: Case Insensitivity
const test6 = "WHO IS THE LEADER?";
// Expected: "candidate_info" (case doesn't matter)

// Test 7: Typo Test (Limitation Demo)
const test7 = "Hw d I vte?";
// Expected: "general_query" (words don't match exactly)

/* ============================================
   IN CHAT INTERFACE
   ============================================ 
   
   Just send a message in the chat and open 
   Browser DevTools (F12 → Console tab).
   
   You'll see output like:
   "[Intent Detection] User: "How do I vote?" | Intent: voting_process"
   
   This shows the system working in real-time!
*/

/* ============================================
   HOW TO VERIFY IN PRODUCTION
   ============================================ 
   
   1. Open the Election Guide Bot chat page
   2. Press F12 (Developer Tools)
   3. Go to "Console" tab
   4. Send test messages like:
      - "Who won the election?"
      - "How do I register to vote?"
      - "Tell me about candidates"
   5. See the intent detection logs in console
*/

// Example output you should see:
// [Intent Detection] User: "Who won the election?" | Intent: election_results
// [Intent Detection] User: "How do I register to vote?" | Intent: voting_process
// [Intent Detection] User: "Tell me about candidates" | Intent: candidate_info
