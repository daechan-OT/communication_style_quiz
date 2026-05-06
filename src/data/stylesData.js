// Centralized theme colors for the 4 styles to allow easy editing during development
export const STYLE_COLORS = {
  direct:        '#E76F51', // Burnt Sienna  — assertive, no-nonsense
  enthusiastic:  '#F4A261', // Warm Honey    — energetic, upbeat
  collaborative: '#2A9D8F', // Deep Teal     — calm, people-first
  precise:       '#E9C46A'  // Soft Gold     — methodical, exacting
};

// The 4 Communication Styles
// Question option `styleId`s in ./questionsData.js MUST match an `id` here.
// `focus`, `strengths`, and `blindSpots` are inferred placeholders aligned with
// each archetype — review and refine the wording before publishing.
export const STYLES = [
  {
    id: 'direct',
    name: 'The Just the Facts Communicator',
    subtitle: 'Direct',
    focus: 'Speed, clarity, and decisive action',
    strengths: ['Cuts through noise', 'Drives quick decisions', 'Keeps the line moving'],
    blindSpots: ['Can feel blunt or cold', 'Skips the "why"', 'Misses emotional cues'],
    color: STYLE_COLORS.direct
  },
  {
    id: 'enthusiastic',
    name: 'The Cheerleader Communicator',
    subtitle: 'Enthusiastic',
    focus: 'Energy, motivation, and positive momentum',
    strengths: ['Lifts team morale', 'Creates a great guest vibe', 'Turns hard shifts fun'],
    blindSpots: ['Glosses over real issues', 'Hype can mask stress', 'Light on specifics'],
    color: STYLE_COLORS.enthusiastic
  },
  {
    id: 'collaborative',
    name: 'The Kindness Communicator',
    subtitle: 'Collaborative',
    focus: 'Connection, care, and shared problem-solving',
    strengths: ['Builds psychological safety', 'High team trust', 'Reads emotions well'],
    blindSpots: ['Can avoid hard conversations', 'Slower to direct', 'Decisions feel by-committee'],
    color: STYLE_COLORS.collaborative
  },
  {
    id: 'precise',
    name: 'The Detailed Standards Communicator',
    subtitle: 'Precise',
    focus: 'Accuracy, standards, and operational excellence',
    strengths: ['Protects quality and compliance', 'Catches small errors early', 'Keeps records airtight'],
    blindSpots: ['Can over-explain', 'Slows in fast-moving moments', 'May feel rigid to teammates'],
    color: STYLE_COLORS.precise
  }
];
