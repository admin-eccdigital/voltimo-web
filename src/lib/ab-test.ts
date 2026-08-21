"use client";

import { useEffect, useRef, useState } from "react";

export interface AbTestConfig<V extends string = string> {
  id: string;
  variants: readonly { key: V; weight: number }[];
}

const STORAGE_PREFIX = "vlt_ab_";

function pick<V extends string>(variants: AbTestConfig<V>["variants"]): V {
  const total = variants.reduce((s, v) => s + v.weight, 0);
  let roll = Math.random() * total;
  for (const v of variants) {
    roll -= v.weight;
    if (roll <= 0) return v.key;
  }
  return variants[variants.length - 1].key;
}

export function useAbTest<V extends string>(config: AbTestConfig<V>): V | null {
  const [variant, setVariant] = useState<V | null>(null);
  const pushed = useRef(false);

  useEffect(() => {
    const storageKey = STORAGE_PREFIX + config.id;
    const stored = localStorage.getItem(storageKey) as V | null;
    const validKeys = config.variants.map((v) => v.key);

    let chosen: V;
    if (stored && validKeys.includes(stored)) {
      chosen = stored;
    } else {
      chosen = pick(config.variants);
      localStorage.setItem(storageKey, chosen);
    }

    setVariant(chosen);

    if (!pushed.current) {
      pushed.current = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "ab_test_exposure",
        ab_test: {
          test_id: config.id,
          variant: chosen,
        },
      });
    }
  }, [config.id, config.variants]);

  return variant;
}
