// Communication Style Quiz
// styleId mapping (matches ./stylesData.js):
//   direct        → A answers: speed, clarity, decisive action
//   enthusiastic  → B answers: energy, motivation, positive vibe
//   collaborative → C answers: care, connection, shared problem-solving
//   precise       → D answers: accuracy, standards, detail

export const QUESTIONS = [
  {
    id: 'q1',
    text: 'A team member makes a mistake on a complex custom smoothie during a busy rush. What is your first instinct?',
    options: [
      { id: 'q1-direct',        text: '"Dump it and remake it quickly; let\'s keep the line moving. I\'ll talk to the guest."', styleId: 'direct' },
      { id: 'q1-enthusiastic',  text: '"Shake it off, it happens! Let\'s crush this remake, you\'ve got this!"', styleId: 'enthusiastic' },
      { id: 'q1-collaborative', text: '"Are you feeling overwhelmed? Let me step in and help you with this one."', styleId: 'collaborative' },
      { id: 'q1-precise',       text: '"Let\'s quickly check the recipe card together so we can see exactly where the ratio got thrown off."', styleId: 'precise' }
    ]
  },
  {
    id: 'q2',
    text: 'You are training a brand-new hire on the register. What do you focus on most during their first hour?',
    options: [
      { id: 'q2-direct',        text: 'Showing them the fastest, most efficient way to punch in orders and modifiers to keep the line short.', styleId: 'direct' },
      { id: 'q2-enthusiastic',  text: 'Making it a fun, high-energy experience so they feel excited about interacting with our guests.', styleId: 'enthusiastic' },
      { id: 'q2-collaborative', text: 'Checking in frequently to ensure they feel comfortable, safe, and not stressed by the screen.', styleId: 'collaborative' },
      { id: 'q2-precise',       text: 'Emphasizing the exact standards for cash handling and how to input complex modifier requests flawlessly.', styleId: 'precise' }
    ]
  },
  {
    id: 'q3',
    text: 'It is time to hand off the shift to the incoming manager. How do you communicate the store\'s status?',
    options: [
      { id: 'q3-direct',        text: 'I give a rapid-fire, bullet-point list of what is done and exactly what they need to finish.', styleId: 'direct' },
      { id: 'q3-enthusiastic',  text: 'I hype them up, tell them how great the day has been, and set a positive vibe for their shift.', styleId: 'enthusiastic' },
      { id: 'q3-collaborative', text: 'I check in on how they are doing personally and ask if there is anything specific I can do to set them up for success before I leave.', styleId: 'collaborative' },
      { id: 'q3-precise',       text: 'I walk them through the detailed log of inventory, waste, and exact prep levels left in the walk-in.', styleId: 'precise' }
    ]
  },
  {
    id: 'q4',
    text: 'A new seasonal smoothie is launching today. How do you introduce it to your team?',
    options: [
      { id: 'q4-direct',        text: 'I explain the build order, the prep time, and how it impacts our speed of service.', styleId: 'direct' },
      { id: 'q4-enthusiastic',  text: 'I focus on how delicious it is, how much the guests are going to love it, and get the team hyped to sell it.', styleId: 'enthusiastic' },
      { id: 'q4-collaborative', text: 'I let everyone taste it, ask for their thoughts, and make sure everyone is comfortable making it.', styleId: 'collaborative' },
      { id: 'q4-precise',       text: 'I review the exact nutritional facts, the specific measurement changes, and the allergen protocols.', styleId: 'precise' }
    ]
  },
  {
    id: 'q5',
    text: 'A guest looks overwhelmed by the menu and asks for a recommendation. How do you reply?',
    options: [
      { id: 'q5-direct',        text: 'I ask what their specific goal is (e.g., protein, vegan, low-calorie) and immediately suggest our top seller in that category.', styleId: 'direct' },
      { id: 'q5-enthusiastic',  text: 'I light up, rave about my absolute personal favorite smoothie, and tell them why it\'s the best thing on the menu.', styleId: 'enthusiastic' },
      { id: 'q5-collaborative', text: 'I ask them how their day is going and gently guide them toward a smoothie that matches their current mood or craving.', styleId: 'collaborative' },
      { id: 'q5-precise',       text: 'I ask what ingredients they prefer and detail the specific macros and flavor profiles of two distinct options.', styleId: 'precise' }
    ]
  },
  {
    id: 'q6',
    text: 'You notice the lobby is getting messy, but there is a moderate line at the register. What do you say?',
    options: [
      { id: 'q6-direct',        text: '"John, the line is manageable. Please go sweep the lobby right now."', styleId: 'direct' },
      { id: 'q6-enthusiastic',  text: '"Alright team, let\'s do a 60-second blitz and make this lobby sparkle before the next rush!"', styleId: 'enthusiastic' },
      { id: 'q6-collaborative', text: '"Does anyone have a quick second to grab the lobby, or do we all need to stay on the line?"', styleId: 'collaborative' },
      { id: 'q6-precise',       text: '"The lobby checklist needs to be completed, starting with wiping the tables and then checking the trash bins."', styleId: 'precise' }
    ]
  },
  {
    id: 'q7',
    text: 'A team member arrives 15 minutes late for their shift. How do you greet them?',
    options: [
      { id: 'q7-direct',        text: '"Clock in and jump straight on the blender station; we\'re down a person and tickets are backing up."', styleId: 'direct' },
      { id: 'q7-enthusiastic',  text: '"Glad you made it! Grab your apron and let\'s get you in the game!"', styleId: 'enthusiastic' },
      { id: 'q7-collaborative', text: '"Is everything okay? I was getting a little worried about you."', styleId: 'collaborative' },
      { id: 'q7-precise',       text: '"Please make sure you note the exact time you arrived in the logbook before you wash your hands."', styleId: 'precise' }
    ]
  },
  {
    id: 'q8',
    text: 'The blender rinser breaks down in the middle of a busy shift. How do you communicate the plan?',
    options: [
      { id: 'q8-direct',        text: 'I quickly dictate a new workflow for manually rinsing pitchers to ensure our ticket times don\'t suffer.', styleId: 'direct' },
      { id: 'q8-enthusiastic',  text: 'I tell the team, "Plot twist! We\'re doing it old school today, let\'s keep the energy up and power through!"', styleId: 'enthusiastic' },
      { id: 'q8-collaborative', text: 'I check in with the person on the blender station to make sure they aren\'t getting too frustrated by the bottleneck.', styleId: 'collaborative' },
      { id: 'q8-precise',       text: 'I pull the maintenance manual to troubleshoot and immediately log a detailed ticket in the system.', styleId: 'precise' }
    ]
  },
  {
    id: 'q9',
    text: 'During your pre-shift huddle, what is your primary talking point?',
    options: [
      { id: 'q9-direct',        text: 'Hitting today\'s specific sales targets and keeping our labor costs in line.', styleId: 'direct' },
      { id: 'q9-enthusiastic',  text: 'Getting everyone pumped up, playing some great music, and creating a fantastic atmosphere for the shift.', styleId: 'enthusiastic' },
      { id: 'q9-collaborative', text: 'Making sure everyone is happy with their assigned stations and feels supported by the team.', styleId: 'collaborative' },
      { id: 'q9-precise',       text: 'Reminding the team of our core operational standards, like perfect portion control and avoiding cross-contamination.', styleId: 'precise' }
    ]
  },
  {
    id: 'q10',
    text: 'You need to give feedback to a team member who is struggling to offer add-ins (upselling). How do you approach it?',
    options: [
      { id: 'q10-direct',        text: 'I give them a short, proven script to use with every single guest to keep it simple and effective.', styleId: 'direct' },
      { id: 'q10-enthusiastic',  text: 'I cheer them on, remind them how great they are at greeting guests, and celebrate loudly the next time they get a "yes."', styleId: 'enthusiastic' },
      { id: 'q10-collaborative', text: 'I ask them how they feel about upselling and try to understand what makes them uncomfortable about asking guests.', styleId: 'collaborative' },
      { id: 'q10-precise',       text: 'I show them the exact data on how one extra add-in per transaction affects the store\'s overall metrics and their own performance.', styleId: 'precise' }
    ]
  }
];
