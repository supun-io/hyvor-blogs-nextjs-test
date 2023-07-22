import { getBlog } from "../blog";

export async function GET(_: Request, {params}: {params: {paths: string[]|undefined}}) {

    const path = '/' + (params.paths?.join('/') || '');
    return await getBlog().handleBlogRequest(path);

}

export async function POST(request: Request, {params} : {params: {paths: string[]|undefined}}) {

    if (params.paths?.[0] !== '_hb_webhook') {
        return new Response('Not Found', {status: 404});
    }

    const data = await request.json();
    const signature = request.headers.get('X-Signature') || '';

    return await getBlog().handleWebhookRequest(data, signature);

}