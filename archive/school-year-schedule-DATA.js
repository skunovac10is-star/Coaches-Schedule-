// LEGACY school-year schedule — saved June 2026 (Spring, Session 3)
// To restore: ask Claude to "switch the app back to the school-year schedule"
// This is the data block; the live app keeps it as SCHOOL_SCHEDULE.

const SCHOOL_SCHEDULE = {
  Monday:[
    {time:'9:30–11am',name:'Adult 2.5-3.0',type:'adult',coaches:['Laurence P','Shevi A']},
    {time:'12–1pm',name:'Adult Beginner',type:'adult',courts:1,coaches:['David S']},
    {time:'4–5:30pm',name:'TT Orange 2 Green',type:'tt',courts:1,coaches:['Laurence P']},
    {time:'4–6pm',name:'TT Comp',type:'comp',courts:7,coaches:['Kris W','Andrew W','Gabe K','Stevie D','Jeremie C','Kein W','Flynn H']},
    {time:'7–8:30pm',name:'Comp Clinic',type:'comp',courts:6,coaches:['Stevie D','Kein W','Shevi A','Kris W','Sean T','Gabe K','Flynn H']},
    {time:'7–8:30pm',name:'Green 2 Orange',type:'tt',courts:2,coaches:['Jeremie C']},
    {time:'8:30–10pm',name:'Adult 2.5-3.0',type:'adult',coaches:['Shevi A','Gabe K']},
    {time:'8:30–10pm',name:'Adult Adv Beginner',type:'adult',courts:1,coaches:['Laurence P']},
  ],
  Tuesday:[
    {time:'9:30–11am',name:'Adult 2.5-3.0',type:'adult',courts:1,coaches:['Laurence P']},
    {time:'5–7pm',name:'TT1',type:'tt',courts:8,coaches:['Anna M','Flynn H','Kris W','Jeremie C','Stevie D','Gabe K','Andrew W']},
    {time:'7–8:30pm',name:'Comp Clinic',type:'comp',courts:6,coaches:['Kein W','Stevie D','Kris W','Anna M','Laurence P','Gabe K','Sean T']},
    {time:'7–8:30pm',name:'TT Orange 2 Green',type:'tt',courts:2,coaches:['Jeremie C','Flynn H']},
    {time:'8:30–10pm',name:'Adult 3.5+',type:'adult',courts:1,coaches:['Gabe K','Kris W']},
  ],
  Wednesday:[
    {time:'12–1:30pm',name:'Adult Adv Beginner',type:'adult',coaches:['Laurence P','David S']},
    {time:'4–6pm',name:'TT Comp',type:'comp',coaches:['Stevie D','Jeremie C','Andrew W','Laurence P','Flynn H','Gabe K']},
    {time:'6–7pm',name:'Munchkins',type:'munch',courts:2,coaches:['Laurence P','Anna M','David S','Amy G','Shevi A','Bella N']},
    {time:'7–9pm',name:'TT1',type:'tt',courts:8,coaches:['Sanjin K','Gabe K','Stevie D','Shevi A','Andrew W','Jeremie C','Anna M','Flynn H']},
  ],
  Thursday:[
    {time:'4–5pm',name:'Munchkins',type:'munch',courts:2,coaches:['Laurence P','Sean T','David S','Flynn H']},
    {time:'5–7pm',name:'TT1',type:'tt',courts:8,coaches:['Stevie D','Jeremie C','Gabe K','Kris W','Flynn H','Andrew W']},
    {time:'7–8:30pm',name:'Comp Clinic',type:'comp',courts:6,coaches:['Laurence P','Anna M','Kris W','Flynn H','Bella N','Sean T']},
    {time:'7–8:30pm',name:'Green 2 Orange',type:'tt',courts:2,coaches:['Stevie D','Andrew W']},
    {time:'8:30–10pm',name:'Adult 3.5+',type:'adult',coaches:['Laurence P']},
  ],
  Friday:[
    {time:'4–5:30pm',name:'Comp Clinic',type:'comp',courts:6,coaches:['Flynn H','Stevie D','Sean T','Kris W','Bella N']},
    {time:'4–5:30pm',name:'TT Orange 2 Green',type:'tt',courts:2,coaches:['Ahmed A','Andrew W']},
    {time:'5:30–6:30pm',name:'Munchkins',type:'munch',courts:2,coaches:['Laurence P','Sean T','Ahmed A','Flynn H']},
    {time:'6:30–8:30pm',name:'TT Comp',type:'comp',coaches:['Stevie D','Flynn H','Sean T','Ahmed A','Bella N','Shevi A','Andrew W']},
  ],
  Saturday:[
    {time:'8:30–10am',name:'Adult 2.5-3.0',type:'adult',courts:1,coaches:['Ahmed A']},
    {time:'10–11am',name:'Munchkins',type:'munch',courts:2,coaches:['Sean T','Ahmed A','Anna M','Bella N','Flynn H','Amy G']},
    {time:'11am–12:30pm',name:'Comp Clinic',type:'comp',coaches:['Kris W','Shevi A','Ahmed A','Anna M','Sean T','Bella N','Flynn H','Amy G']},
    {time:'1:30–3:30pm',name:'TT Comp',type:'comp',coaches:['Shevi A','Kris W','Sean T','Ahmed A','Bella N','Flynn H']},
  ],
  Sunday:[
    {time:'7:30–9am',name:'Team United Clinic',type:'other',coaches:['Shevi A']},
    {time:'8:30–10am',name:'Adult 3.5+',type:'adult',coaches:['Laurence P','Flynn H']},
    {time:'11am–12pm',name:'Munchkins',type:'munch',courts:2,coaches:['Anna M','Nick F','Laurence P','Shevi A','Jinay S','Sean T','Flynn H']},
    {time:'12–1:30pm',name:'Comp Clinic',type:'comp',coaches:['Shevi A','Nick F','Stevie D','Jinay S','Anna M','Sean T','Ahmed A']},
    {time:'2:30–4pm',name:'TT Green 2 Y',type:'tt',courts:1,coaches:['Sean T','Bella N']},
    {time:'2:30–4:30pm',name:'TT1',type:'tt',courts:7,coaches:['Shevi A','Stevie D','Flynn H','Ahmed A','Andrew W']},
    {time:'5:30–7pm',name:'Adult 2.5-3.0',type:'adult',coaches:['Laurence P','Jinay S']},
    {time:'5:30–7pm',name:'Adult Beginner',type:'adult',courts:1,coaches:['TBD']},
    {time:'5:30–7pm',name:'Adult Adv Beginner',type:'adult',courts:1,coaches:['TBD']},
  ]
};
