// Centralized theme colors for the 4 styles to allow easy editing during development
export const STYLE_COLORS = {
  direct:        '#E76F51', // Burnt Sienna  — assertive, no-nonsense
  enthusiastic:  '#F4A261', // Warm Honey    — energetic, upbeat
  collaborative: '#2A9D8F', // Deep Teal     — calm, people-first
  precise:       '#E9C46A'  // Soft Gold     — methodical, exacting
};

// The 4 Communication Styles
// Question option `styleId`s in ./questionsData.js MUST match an `id` here.
// - `strengths` / `blindSpots`: short, at-a-glance bullets shown by default
// - `strengthsDetailed` / `blindSpotsDetailed`: full titled descriptions
//   revealed inside the "Show full description" accordion on the results screen
export const STYLES = [
  {
    id: 'direct',
    name: 'The Just the Facts Communicator',
    subtitle: 'Direct',
    focus: 'Efficiency-driven. You communicate to get to the next task as fast as possible.',
    strengths: ['Cuts through noise', 'Drives quick decisions', 'Keeps the line moving'],
    blindSpots: ['Can feel blunt or cold', 'Skips the "why"', 'Misses emotional cues'],
    strengthsDetailed: [
      {
        title: 'The High-Pressure Rush',
        description: 'When the water station is full of tickets, your "Bullet-Point" speech keeps the team moving. You don\'t clutter the airwaves with unnecessary talk, allowing the crew to stay focused on the hustle.'
      },
      {
        title: 'Decisive Problem Solving',
        description: 'If a blender breaks or a guest has a complex issue, you provide an immediate, clear solution. Your team never has to guess what you want them to do next.'
      },
      {
        title: 'Efficiency Gains',
        description: 'You are a master of the "Short-Cut" that doesn\'t sacrifice quality. You communicate exactly how to shave seconds off a ticket time, which helps the store hit its labor and speed goals.'
      }
    ],
    blindSpotsDetailed: [
      {
        title: 'The "Robot" Vibe',
        description: 'By skipping the "warm-up" conversation, you might come across as cold. Your team might feel like they are just "labor units" rather than people you care about.'
      },
      {
        title: 'Leaving Out the "Why"',
        description: 'Because you value brevity, you might tell a teammate what to do but not why it matters. Without the "Why," the team loses their connection to the guest\'s goal.'
      },
      {
        title: 'Intimidating Tone',
        description: 'Your directness can be misread as anger. "Kindness" communicators on your team might feel "snapped at" even when you are just trying to be efficient.'
      }
    ],
    color: STYLE_COLORS.direct
  },
  {
    id: 'enthusiastic',
    name: 'The Cheerleader Communicator',
    subtitle: 'Enthusiastic',
    focus: 'Engagement-driven. You communicate to build energy and excitement.',
    strengths: ['Lifts team morale', 'Creates a great guest vibe', 'Turns hard shifts fun'],
    blindSpots: ['Glosses over real issues', 'Hype can mask stress', 'Light on specifics'],
    strengthsDetailed: [
      {
        title: 'The Vibe Architect',
        description: 'You are the primary source of energy in the store. Your engaging speech and non-verbal cues make the shift feel like a team sport rather than a job.'
      },
      {
        title: 'Legendary Guest Connections',
        description: 'You are a natural at engaging the community. You communicate with guests in a way that makes them feel seen and excited to come back.'
      },
      {
        title: 'Motivating Through Stress',
        description: 'When the team is tired, your mantra of contagious energy can recharge their batteries and get them through a difficult closing shift.'
      }
    ],
    blindSpotsDetailed: [
      {
        title: 'Burying the Lead',
        description: 'You might get so caught up in the good vibes that the actual instruction gets lost. A teammate might leave a conversation feeling "pumped up" but unsure of exactly which prep task to start.'
      },
      {
        title: 'Dismissing the Details',
        description: 'Detailed Standards communicators might feel you are all talk. If you gloss over the technical facts to keep the energy high, your more precise teammates may lose trust in your directions.'
      },
      {
        title: 'Ignoring the "Low Battery"',
        description: 'You might try to cheerlead a teammate who is actually burnt out or struggling, making them feel misunderstood rather than supported.'
      }
    ],
    color: STYLE_COLORS.enthusiastic
  },
  {
    id: 'collaborative',
    name: 'The Kindness Communicator',
    subtitle: 'Collaborative',
    focus: 'Connection-driven. You communicate to ensure everyone feels heard and safe.',
    strengths: ['Builds psychological safety', 'High team trust', 'Reads emotions well'],
    blindSpots: ['Can avoid hard conversations', 'Slower to direct', 'Decisions feel by-committee'],
    strengthsDetailed: [
      {
        title: 'The Secure Base',
        description: 'You are an incredible listener. Your team feels safe coming to you with problems because they know you won\'t judge them or bark at them.'
      },
      {
        title: 'Conflict Resolution',
        description: 'You excel at managing guest conflicts because you naturally use "Question" speech to understand the guest\'s frustration before trying to solve it.'
      },
      {
        title: 'Team Retention',
        description: 'People stay at your store because they feel valued as individuals. You naturally provide words of appreciation on the small moments that make the team feel cared for.'
      }
    ],
    blindSpotsDetailed: [
      {
        title: 'The "Soft Signal"',
        description: 'Your instructions can sound like suggestions. A "Just the Facts" teammate might not realize that "I was thinking maybe we could sweep the lobby" actually means "The lobby is dirty; sweep it now."'
      },
      {
        title: 'Avoiding the "Critical Conversation"',
        description: 'Because you value harmony, you might hesitate to give a nudge or corrective feedback, allowing a toxic behavior or a missed standard to continue for too long.'
      },
      {
        title: 'Wasting Time in the Rush',
        description: 'During a high-volume hour, your desire to ensure everyone is "okay" can slow down the operation. Sometimes the team needs a command, not a conversation.'
      }
    ],
    color: STYLE_COLORS.collaborative
  },
  {
    id: 'precise',
    name: 'The Detailed Standards Communicator',
    subtitle: 'Precise',
    focus: 'Accuracy-driven. You communicate to ensure the standard is met perfectly.',
    strengths: ['Protects quality and compliance', 'Catches small errors early', 'Keeps records airtight'],
    blindSpots: ['Can over-explain', 'Slows in fast-moving moments', 'May feel rigid to teammates'],
    strengthsDetailed: [
      {
        title: 'The Error-Free Open',
        description: 'Your prep lists are perfect, and your team knows exactly how to make every item. You ensure fewer wasted ingredients and better-tasting smoothies.'
      },
      {
        title: 'Training Mastery',
        description: 'You excel at taking a "green" employee and getting them solo on the line because your instructions are backed by data and the manual. You leave no room for "guessing."'
      },
      {
        title: 'Integrity of the Blend',
        description: 'You know the products better than anyone. You ensure that the "Blend Promise" is always met because you communicate the exact standards required for every smoothie and food item.'
      }
    ],
    blindSpotsDetailed: [
      {
        title: 'The "Over-Communication" Trap',
        description: 'During a rush, a 3-minute explanation of a 10-second task can frustrate the team. You might prioritize "explaining the process" over "giving the answer."'
      },
      {
        title: 'The "Nagging" Label',
        description: 'Cheerleader communicators might feel you are constantly critiquing them on minor details, which can drain their energy and make them feel like they can\'t do anything right.'
      },
      {
        title: 'Telling over Showing',
        description: 'You might rely so much on instructions and manuals that you forget to model the behavior. Some team members need to see the care, not just hear the rules again.'
      }
    ],
    color: STYLE_COLORS.precise
  }
];
