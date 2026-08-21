"use client";

import { useAbTest, type AbTestConfig } from "@/lib/ab-test";
import {
  LpSticky,
  LpHero,
  LpOutcome,
  LpAudience,
  LpTeacher,
  LpHow,
  LpDates,
  LpPrice,
  LpFears,
  LpProof,
  LpEdge,
  LpRegistration,
} from "@/components/lp";
import { LpHeroB } from "./LpHeroB";
import { LpAudienceB } from "./LpAudienceB";
import { LpFearsB } from "./LpFearsB";

const TEST: AbTestConfig<"control" | "rekvalifikace"> = {
  id: "elektrikar-rekval-2026-08",
  variants: [
    { key: "control", weight: 50 },
    { key: "rekvalifikace", weight: 50 },
  ],
};

export function ElektrikarAbTest() {
  const variant = useAbTest(TEST);

  if (!variant) {
    return <div style={{ minHeight: "100vh" }} />;
  }

  const isB = variant === "rekvalifikace";

  return (
    <>
      {isB ? <LpHeroB /> : <LpHero />}
      <LpOutcome />
      {isB ? <LpAudienceB /> : <LpAudience />}
      <LpTeacher />
      <LpHow />
      <LpDates />
      <LpPrice />
      {isB ? <LpFearsB /> : <LpFears />}
      <LpProof />
      <LpEdge />
      <LpRegistration />
      <LpSticky />
    </>
  );
}
