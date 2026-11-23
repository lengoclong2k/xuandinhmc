"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

export type Lang = "vi" | "en";
/** Một đoạn text song ngữ. Nếu không cần tiếng Anh, để `en` giống `vi`. */
export type Localized = { vi: string; en: string };

const STORAGE_KEY = "mc-lang";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "vi",
  setLang: () => {},
});

// Lưu ngôn ngữ trong localStorage, đọc bằng useSyncExternalStore (an toàn với SSR).
const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};
const getSnapshot = (): Lang => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "vi";
  } catch {
    return "vi";
  }
};
const getServerSnapshot = (): Lang => "vi";

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    listeners.forEach((cb) => cb());
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Render text theo ngôn ngữ hiện tại: <L text={site.hero.title} /> */
export function L({ text }: { text: Localized }) {
  const { lang } = useLang();
  return <>{text[lang]}</>;
}

/** Hook dùng khi cần string thuần (vd. alt, aria-label). */
export function useT() {
  const { lang } = useLang();
  return (text: Localized) => text[lang];
}
