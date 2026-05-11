// Communication Style Quiz
// styleId mapping (matches ./stylesData.js):
//   direct        → A answers: speed, clarity, decisive action
//   enthusiastic  → B answers: energy, motivation, positive vibe
//   collaborative → C answers: care, connection, shared problem-solving
//   precise       → D answers: accuracy, standards, detail

export const QUESTIONS = [
  {
    id: 'q1',
    text: 'A team member makes a mistake on a custom smoothie during a busy rush. What is your first instinct?',
    options: [
      { id: 'q1-direct',        text: '"Let\'s remake it quickly so we can keep the line moving — I\'ll let the guest know."', styleId: 'direct' },
      { id: 'q1-enthusiastic',  text: '"No worries, it happens. Let\'s get a fresh one going."', styleId: 'enthusiastic' },
      { id: 'q1-collaborative', text: '"Take a breath — want me to jump in and finish this one with you?"', styleId: 'collaborative' },
      { id: 'q1-precise',       text: '"Let\'s take a quick look at the recipe card together so we can spot where the ratio went off."', styleId: 'precise' }
    ]
  },
  {
    id: 'q2',
    text: 'You are training a brand-new hire on the register. What do you focus on most during their first hour?',
    options: [
      { id: 'q2-direct',        text: 'Showing them the quickest way to ring in orders and modifiers so the line keeps moving.', styleId: 'direct' },
      { id: 'q2-enthusiastic',  text: 'Keeping the energy up so they feel comfortable and engaged with guests.', styleId: 'enthusiastic' },
      { id: 'q2-collaborative', text: 'Checking in often to make sure they feel supported and aren\'t stressed by the screen.', styleId: 'collaborative' },
      { id: 'q2-precise',       text: 'Walking them through our cash handling steps and how to correctly enter modifier requests.', styleId: 'precise' }
    ]
  },
  {
    id: 'q3',
    text: 'It is time to hand off the shift to the incoming manager. How do you communicate the store\'s status?',
    options: [
      { id: 'q3-direct',        text: 'I give a clear, bulleted rundown of what is done and what still needs to happen.', styleId: 'direct' },
      { id: 'q3-enthusiastic',  text: 'I share a few wins from the day and set a positive tone for their shift.', styleId: 'enthusiastic' },
      { id: 'q3-collaborative', text: 'I ask how they are doing and see if there is anything I can wrap up to set them up well before I leave.', styleId: 'collaborative' },
      { id: 'q3-precise',       text: 'I walk them through current inventory, waste, and prep levels in the walk-in.', styleId: 'precise' }
    ]
  },
  {
    id: 'q4',
    text: 'A new seasonal smoothie is launching today. How do you introduce it to your team?',
    options: [
      { id: 'q4-direct',        text: 'I cover the build order, prep time, and how it may affect our speed of service.', styleId: 'direct' },
      { id: 'q4-enthusiastic',  text: 'I talk up the flavor, why guests will enjoy it, and get the team excited to recommend it.', styleId: 'enthusiastic' },
      { id: 'q4-collaborative', text: 'I have everyone taste it, ask for their thoughts, and make sure they feel confident making it.', styleId: 'collaborative' },
      { id: 'q4-precise',       text: 'I review the nutritional info, measurement changes, and allergen notes.', styleId: 'precise' }
    ]
  },
  {
    id: 'q5',
    text: 'A guest looks overwhelmed by the menu and asks for a recommendation. How do you reply?',
    options: [
      { id: 'q5-direct',        text: 'I ask what they\'re looking for (protein, vegan, low-calorie) and suggest our top seller in that category.', styleId: 'direct' },
      { id: 'q5-enthusiastic',  text: 'I share a personal favorite and tell them what I like about it.', styleId: 'enthusiastic' },
      { id: 'q5-collaborative', text: 'I ask a couple of questions about what they\'re in the mood for and help guide them toward something that fits.', styleId: 'collaborative' },
      { id: 'q5-precise',       text: 'I ask about their flavor and ingredient preferences and walk them through a couple of options.', styleId: 'precise' }
    ]
  },
  {
    id: 'q6',
    text: 'You notice the lobby is getting messy, but there is a moderate line at the register. What do you say?',
    options: [
      { id: 'q6-direct',        text: '"John, the line\'s manageable — can you head out and sweep the lobby?"', styleId: 'direct' },
      { id: 'q6-enthusiastic',  text: '"Hey team, let\'s take a couple of minutes to tidy up the lobby before the next rush."', styleId: 'enthusiastic' },
      { id: 'q6-collaborative', text: '"Does anyone have a moment to grab the lobby, or should we all stay on the line for now?"', styleId: 'collaborative' },
      { id: 'q6-precise',       text: '"The lobby checklist is due — wipe down the tables first, then check the trash bins."', styleId: 'precise' }
    ]
  },
  {
    id: 'q7',
    text: 'A team member arrives 15 minutes late for their shift. How do you greet them?',
    options: [
      { id: 'q7-direct',        text: '"Go ahead and clock in — once you\'re ready, jump on the blender station, tickets are backing up."', styleId: 'direct' },
      { id: 'q7-enthusiastic',  text: '"Glad you\'re here — grab your apron and let\'s jump in."', styleId: 'enthusiastic' },
      { id: 'q7-collaborative', text: '"Everything okay? Let\'s get you settled in once you\'re ready."', styleId: 'collaborative' },
      { id: 'q7-precise',       text: '"Please note your arrival time in the logbook, then wash up before stepping on the floor."', styleId: 'precise' }
    ]
  },
  {
    id: 'q8',
    text: 'The blender rinser breaks down in the middle of a busy shift. How do you communicate the plan?',
    options: [
      { id: 'q8-direct',        text: 'I quickly explain the new workflow for rinsing pitchers by hand so ticket times don\'t slip.', styleId: 'direct' },
      { id: 'q8-enthusiastic',  text: 'I let the team know we\'ll be doing it the old-school way today and keep the mood light while we work through it.', styleId: 'enthusiastic' },
      { id: 'q8-collaborative', text: 'I check in with the person on blender to make sure they\'re not getting overwhelmed by the bottleneck.', styleId: 'collaborative' },
      { id: 'q8-precise',       text: 'I pull the maintenance manual to troubleshoot and log a detailed ticket in the system.', styleId: 'precise' }
    ]
  },
  {
    id: 'q9',
    text: 'During your pre-shift huddle, what is your primary talking point?',
    options: [
      { id: 'q9-direct',        text: 'Hitting today\'s sales targets and keeping our labor on track.', styleId: 'direct' },
      { id: 'q9-enthusiastic',  text: 'Setting a good tone for the shift — music on, energy up, and a positive atmosphere.', styleId: 'enthusiastic' },
      { id: 'q9-collaborative', text: 'Making sure everyone is comfortable with their station and feels supported by the team.', styleId: 'collaborative' },
      { id: 'q9-precise',       text: 'Reviewing our core standards, like portion control and avoiding cross-contamination.', styleId: 'precise' }
    ]
  },
  {
    id: 'q10',
    text: 'You need to give feedback to a team member who is struggling to offer add-ins (upselling). How do you approach it?',
    options: [
      { id: 'q10-direct',        text: 'I give them a short, simple script they can use with every guest to keep it consistent.', styleId: 'direct' },
      { id: 'q10-enthusiastic',  text: 'I encourage them, point out what they already do well at the register, and acknowledge it the next time they land an add-in.', styleId: 'enthusiastic' },
      { id: 'q10-collaborative', text: 'I ask how they feel about upselling and try to understand what makes it uncomfortable for them.', styleId: 'collaborative' },
      { id: 'q10-precise',       text: 'I show them the numbers on how one extra add-in per transaction affects store metrics and their own performance.', styleId: 'precise' }
    ]
  }
];
