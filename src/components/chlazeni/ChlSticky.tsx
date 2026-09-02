"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/brand";

export function ChlSticky() {
  return (
    <div className="lp-sticky">
      <div className="lp-sticky__txt">
        <strong>Dvě kvalifikace NSK za 4 dny</strong>
        <span>25 000 Kč · příprava i obě zkoušky</span>
      </div>
      <Button variant="cta" icon={<ArrowRight />} href="#poptavka">
        Poptat termín
      </Button>
    </div>
  );
}
