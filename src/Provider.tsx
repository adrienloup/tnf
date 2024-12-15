import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
} from "react";

import { Children } from "@/src/generic/types/Children.type";
import { LanguageProvider } from "@/src/generic/languages/Language.provider";
import { ThemeProvider } from "@/src/generic/theme/Theme.provider";
import { GameProvider } from "@/src/game/Game.provider";
import { NotifProvider } from "@/src/game/components/notif/Notif.provider";

type ProvidersType = [
  ComponentType<{ children: Children }>,
  ComponentPropsWithoutRef<ElementType>?,
][];

const combineProviders = (providers: ProvidersType) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: Children }) => <>{children}</>,
  );

export const Provider: FunctionComponent<{ children: Children }> =
  combineProviders([
    [LanguageProvider],
    [ThemeProvider],
    [GameProvider],
    [NotifProvider],
  ]);
