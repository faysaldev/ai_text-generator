import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model:'text-davinci-003',
      prompt:prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => response.data.choices[0].text)
    
    .catch(
      (err) =>
        // `EasyAi was unable to find an answer for that! (Error: ${err.})`
        console.log(err)
    );

    // 
    return res;
};

export default query;