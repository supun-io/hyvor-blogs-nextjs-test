import { Blog } from '@hyvor/hyvor-blogs-serve';

export function getBlog() {

    return new Blog({
        subdomain: 'nextjs-temporary-testing',
        deliveryApiKey: '0046a1f42d92713da0ccd3842d9cb801',
        webhookSecret: '084daaa19b44e8aec7a8e47bfd1a6016'
    });

}