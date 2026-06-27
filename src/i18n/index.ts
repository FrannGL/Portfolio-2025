import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";

type Nested = { [key: string]: string | string[] | Nested };
const resources: Record<string, Nested> = { en, es };

function lookup(lang: string, key: string): unknown {
  const keys = key.split(".");
  let value: any = resources[lang] ?? resources["es"];
  for (const k of keys) {
    if (!value || typeof value !== "object") return key;
    value = value[k];
  }
  return value;
}

export function t(lang: string, key: string): string {
  const value = lookup(lang, key);
  return typeof value === "string" ? value : key;
}

export function tArr(lang: string, key: string): string[] {
  const value = lookup(lang, key);
  return Array.isArray(value) ? value : [];
}
