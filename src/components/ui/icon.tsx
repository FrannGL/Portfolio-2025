import type { SVGProps } from "react";

type IconName =
  | "location"
  | "ribbon"
  | "code-slash"
  | "graduate"
  | "language"
  | "download"
  | "email"
  | "whatsapp"
  | "briefcase"
  | "flag"
  | "star"
  | "happy";

const iconPaths: Record<IconName, { body: string; w: number; h: number }> = {
  location: {
    w: 512,
    h: 512,
    body: '<path fill="currentColor" d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"/>',
  },
  ribbon: {
    w: 512,
    h: 512,
    body: '<path fill="currentColor" d="M256 336c-5.22 0-10.4-.24-15.51-.69a176.12 176.12 0 0 1-131.29-78.37L20 416h115l58 96l82.53-177.09A178 178 0 0 1 256 336m147-79.26a176.9 176.9 0 0 1-88.18 69.14L273.7 415.5L319 512l58-96h115Z"/><circle cx="256.02" cy="160" r="48" fill="currentColor"/><path fill="currentColor" d="M256 16c-79.4 0-144 64.6-144 144s64.6 144 144 144s144-64.6 144-144S335.4 16 256 16m0 224a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"/>',
  },
  "code-slash": {
    w: 512,
    h: 512,
    body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112m192 224l128-112l-128-112m-48-48l-96 320"/>',
  },
  graduate: {
    w: 512,
    h: 512,
    body: '<path fill="currentColor" d="M472 168.5L276.9 73.7a33.94 33.94 0 0 0-29.8 0L51.1 168.5a24.1 24.1 0 0 0 0 43l44.3 21.9v63.8a55.7 55.7 0 0 0 51.2 55.8c40.1 4.7 91.1 11 161.4 11s121.3-6.3 161.4-11a55.7 55.7 0 0 0 51.2-55.8v-63.8l44.3-21.9a24.1 24.1 0 0 0 0-43M392 264.3a23.9 23.9 0 0 1-15.5 22.5c-20.3 7.6-55.6 17.2-120.5 17.2s-100.2-9.6-120.5-17.2a23.9 23.9 0 0 1-15.5-22.5v-38.2l117.5-58.3a16 16 0 0 1 14.8 0L392 226.1Z"/><ellipse cx="256" cy="168.5" rx="24" ry="8" fill="currentColor"/>',
  },
  language: {
    w: 512,
    h: 512,
    body: '<path fill="currentColor" d="M363 176L246 464h47.24l24.49-58h90.54l24.49 58H480Zm-26.69 186L363 279.85L389.69 362ZM272 320c-.25-.19-20.59-15.77-45.42-42.67c39.58-53.64 62-114.61 71.15-143.33H352V90H214V48h-44v42H32v44h219.25c-9.52 26.95-27.05 69.5-53.79 108.36c-32.68-43.44-47.14-75.88-47.33-76.22L143 152l-38 22l6.87 13.86c.89 1.56 17.19 37.9 54.71 86.57c.92 1.21 1.85 2.39 2.78 3.57c-49.72 56.86-89.15 79.09-89.66 79.47L64 368l23 36l19.3-11.47c2.2-1.67 41.33-24 92-80.78c24.52 26.28 43.22 40.83 44.3 41.67L255 362Z"/>',
  },
  download: {
    w: 512,
    h: 512,
    body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 272l80 80l80-80M256 48v288"/>',
  },
  email: {
    w: 24,
    h: 24,
    body: '<path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/>',
  },
  whatsapp: {
    w: 24,
    h: 24,
    body: '<path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"/>',
  },
  briefcase: {
    w: 512,
    h: 512,
    body: '<path fill="none" d="M336 80H176a16 16 0 0 0-16 16v16h192V96a16 16 0 0 0-16-16"/><path fill="currentColor" d="M496 176a64.07 64.07 0 0 0-64-64h-48V96a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v48h480Zm-144-64H160V96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 152a24 24 0 0 1-24 24H200a24 24 0 0 1-24-24v-4a4 4 0 0 0-4-4H16v144a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V256H340a4 4 0 0 0-4 4Z"/>',
  },
  flag: {
    w: 512,
    h: 512,
    body: '<path fill="currentColor" d="M80 480a16 16 0 0 1-16-16V68.13a24 24 0 0 1 11.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.8 183.8 0 0 0 71-14.5a18 18 0 0 1 25 16.58v219.36a20 20 0 0 1-12 18.31c-8.71 3.81-40.51 16.25-84 16.25c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 0 1-16 16"/>',
  },
  star: {
    w: 512,
    h: 512,
    body: '<path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"/>',
  },
  happy: {
    w: 24,
    h: 24,
    body: '<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>',
  },
};

const iconMap: Record<string, IconName> = {
  "ion:location-sharp": "location",
  "ion:ribbon-sharp": "ribbon",
  "ion:code-slash-outline": "code-slash",
  "game-icons:graduate-cap": "graduate",
  "ion:language-sharp": "language",
  "entypo:download": "download",
  "ion:download-outline": "download",
  "mdi:email-outline": "email",
  "ic:baseline-whatsapp": "whatsapp",
  "ion:briefcase": "briefcase",
  "ion:flag": "flag",
  "ion:star": "star",
  "mingcute:happy-fill": "happy",
};

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: string;
}

export function Icon({ icon, className, ...props }: IconProps) {
  const name = iconMap[icon];
  const data = name ? iconPaths[name] : null;

  if (!data) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${data.w} ${data.h}`}
      className={className}
      {...props}
      dangerouslySetInnerHTML={{ __html: data.body }}
    />
  );
}
