export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // اگر فایل استاتیک وجود داره، همون رو برگردون
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) {
      return asset;
    }
    
    // اگر نبود، صفحه اصلی رو نشون بده
    return env.ASSETS.fetch(new Request(new URL('/', url.origin), request));
  }
}
