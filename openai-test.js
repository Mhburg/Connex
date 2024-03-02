import OpenAI from 'openai';

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'Based on the script provided, generate a series of dot points for compelling Q&As with facts, in the style of a question and a series of dot points for answers. Script: Hi. I’m Ava. Family. It is a warm, comfortable, exciting word. But sometimes… it’s a difficult word.🥺 My parents weren’t around much when I was a kid.😞 So when I became a teenager, and when they wanted to reconnect with me. It felt awkward. 😖 At school, I struggled to blend in. Later I found out I had undiagnosed issues like ADHD, Bipolar and Panic Disorder. At that time, I was oblivious. I didn’t even understand the meaning of the words ‘Personal boundary’, ‘Self-esteem’, ‘Anxiety’ I never had the awareness.😬 And that changed after years of becoming an adult and, getting exposed to some of the greatest teachings of all time, that shaped who I am today, That helped me finally had the courage to open up about my issues and getting diagnosed at the age of 25,😲 which was truly liberating,🥹 as it finally allowed me to get the help that I really needed. I’m sure many here can relate. 1 in 7 kids in Australia experiences mental disorder. 😢Many more globally live without the privilege of access to, or let alone Awareness, of mental health. Do you know how these kids cope?🤨.. 🥴I played games. Lots and lots of games. It’s the one thing that I turned to when I was upset. 😝 Everyone loves games. 🤩 But there aren’t many games that really focus on Mental Health.🤔 And there are some non-game apps that promote Mental Health, but they’re costly🫣 So we decided to bridge the gap! 🫡 MindGrove is an AI-driven game, designed to teach children communication skills, coping strategies, and more.🤩. ',
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
}

main();
