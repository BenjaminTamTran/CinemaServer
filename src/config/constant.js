/**
 * Local

 */
const http = 'http://';
const https = 'https://';
const url = 'localhost:3000/';
const base_url = http + url;
const appKey = 'C1n3ma';
const imagePlaceholder = 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081';
const defaultUserName = 'user' + Math.floor(Math.random() * 10000000000);
const defaultUserAvatar = 'https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg';

module.exports = {
    appKey,
    imagePlaceholder,
    defaultUserName,
    defaultUserAvatar
};
