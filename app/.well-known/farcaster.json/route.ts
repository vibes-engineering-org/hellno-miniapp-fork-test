function withValidProperties(
  properties: Record<string, undefined | string | string[]>,
) {
  return Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return !!value;
    }),
  );
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL;

  return Response.json({
    accountAssociation: {
      header: 'eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ',
      payload: 'eyJkb21haW4iOiJoZWxsbm8tbWluaWFwcC1mb3JrLXRlc3QudmVyY2VsLmFwcCJ9',
      signature: 'MHhjMDVkZDk5NGU4ZGU5OTRiODhkMTg5Njc4YTgyYmFjZjVhNGIzOWFlMjIxZjAyZWQ3Zjk3YTdhNGE4YjU3NzdhM2ExZmU2MTYyZjEwMTI5Yzg0OWQ1ODZlOGE4MDRkODE4OWVmNGNjNDkzOWU1OTE2Yzg5OWMwYzdlNmMzM2E4ZjFj',
    },
    frame: withValidProperties({
      version: "1",
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "Farcaster Mini App",
      iconUrl: process.env.NEXT_PUBLIC_APP_ICON || `${URL}/icon.png`,
      homeUrl: URL,
      imageUrl: process.env.NEXT_PUBLIC_APP_OG_IMAGE || `${URL}/og.png`,
      buttonTitle: "Open",
      webhookUrl: `${URL}/api/webhook`,
      splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE || `${URL}/splash.png`,
      splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR || "#555555",
      primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY,
      tags: [],
      subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE,
      description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
      screenshotUrls: [],
      heroImageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
      tagline: process.env.NEXT_PUBLIC_APP_TAGLINE,
      ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE,
      ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION,
      ogImageUrl: process.env.NEXT_PUBLIC_APP_OG_IMAGE,
    }),
  });
}
