"use client";

import dynamic from "next/dynamic";
import type { InviteData } from "@/data/invites";

const KeralaTheme = dynamic(() => import("./KeralaTheme").then(m => m.KeralaTheme), { ssr: false });
const ChristianTheme = dynamic(() => import("./ChristianTheme").then(m => m.ChristianTheme), { ssr: false });
const RoyalTheme = dynamic(() => import("./RoyalTheme").then(m => m.RoyalTheme), { ssr: false });
const ElegantChristianTheme = dynamic(() => import("./ElegantChristianTheme").then(m => m.ElegantChristianTheme), { ssr: false });
const AjayAparnaTheme = dynamic(() => import("./AparnaAjayThemeClone").then(m => m.AparnaAjayThemeClone), { ssr: false });
const SreejithSukanyaTheme = dynamic(() => import("./SreejithSukanyaTheme").then(m => m.SreejithSukanyaTheme), { ssr: false });
const VishnuAthulyaTheme = dynamic(() => import("./VishnuAthulyaTheme").then(m => m.VishnuAthulyaTheme), { ssr: false });
const AshwageethamTheme = dynamic(() => import("./aswgee").then(m => m.AswgeeTheme || m.AshwageethamTheme), { ssr: false });
const PrudhviMouktikaTheme = dynamic(() => import("./PrudhviMouktikaTheme").then(m => m.PrudhviMouktikaTheme), { ssr: false });
const WedsD1Theme = dynamic(() => import("./WedsD1Theme").then(m => m.WedsD1Theme || m.YaswanthMrudulaTheme), { ssr: false });

export function ThemeWrapper({ invite }: { invite: InviteData }) {
  if (invite.theme === "kerala") return <KeralaTheme invite={invite} />;
  if (invite.theme === "christian") return <ChristianTheme invite={invite} />;
  if (invite.theme === "royal") return <RoyalTheme invite={invite} />;
  if (invite.theme === "elegant-christian") return <ElegantChristianTheme invite={invite} />;
  if (invite.theme === "ajay-aparna") return <AjayAparnaTheme invite={invite} />;
  if (invite.theme === "sreejith-sukanya") return <SreejithSukanyaTheme invite={invite} />;
  if (invite.theme === "vishnu-athulya") return <VishnuAthulyaTheme invite={invite} />;
  if (invite.theme === "ashwageetham") return <AshwageethamTheme invite={invite} />;
  if (invite.theme === "prudhvi-mouktika" || invite.theme === "prudhvi-moutika" || invite.theme === "telugu") return <PrudhviMouktikaTheme invite={invite} />;
  if (invite.theme === "weds-d1" || invite.theme === "yaswanth-mrudula" || invite.theme === "toran") return <WedsD1Theme invite={invite} />;
  return null;
}
