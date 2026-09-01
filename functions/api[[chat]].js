export default async function onRequest({ request }) {
  // 获取请求方法
  const method = request.method;

  if (method !== 'POST') {
    return new Response(JSON.stringify({error:"only post"}), {
      headers: { "Content-Type": "application/json" },
      status: 200
    })
  }

  try {
    const body = await request.json();
    const { question } = body;
    // 环境变量后续在Cloudflare后台配置 API_KEY
    const apiKey = import.meta.env.API_KEY;

    return new Response(JSON.stringify({answer:"测试成功！接口跑通了"}), {
      headers: { "Content-Type": "application/json" }
    })
  } catch(err) {
    return new Response(JSON.stringify({error: err.message}), {
      headers: { "Content-Type": "application/json" },
      status: 500
    })
  }
}
