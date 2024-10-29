import { createContext } from "react";
import { FinishContextType } from "@/app/types/listTypes";
export const FinishContext = createContext<FinishContextType | undefined>(
  undefined
);
