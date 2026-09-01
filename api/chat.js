// api/chat.js
export default async function handler(req, res) {

  // 只允许POST请求
  if(req.method !== 'POST'){
    return res.status(200).json({error:"only post"})
  }

  try {
    // 获取前端传过来的提问
    const { question } = req.body;

    // 这里写你原来调用大模型的代码
    const apiKey = process.env.API_KEY;

    res.json({answer:"测试成功！接口跑通了"});

  } catch(err) {
    console.error(err);
    res.status(500).json({error:err.message})
  }
}
